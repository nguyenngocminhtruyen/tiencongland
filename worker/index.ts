import { SITE } from '../src/lib/site';

interface Fetcher {
  fetch(request: Request): Promise<Response>;
}

export interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY: string;
}

const INTEREST_LABELS: Record<string, string> = {
  mua: 'Mua bất động sản',
  ban: 'Bán bất động sản',
  thue: 'Thuê / cho thuê',
  'tu-van': 'Tư vấn đầu tư',
  khac: 'Khác',
};

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return jsonResponse({ ok: false, error: 'invalid_body' }, 400);
  }

  // Honeypot: bots fill every field, including this hidden one. Pretend success so they move on.
  if (String(formData.get('_gotcha') || '').trim()) {
    return jsonResponse({ ok: true }, 200);
  }

  const name = String(formData.get('name') || '').trim();
  const phone = String(formData.get('phone') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const interest = String(formData.get('interest') || '').trim();
  const message = String(formData.get('message') || '').trim();
  const consent = formData.get('consent');

  if (!name || !phone || !message || !consent) {
    return jsonResponse({ ok: false, error: 'missing_fields' }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return jsonResponse({ ok: false, error: 'not_configured' }, 500);
  }

  const interestLabel = INTEREST_LABELS[interest] ?? (interest || 'Không rõ');
  const text = [
    `Họ tên: ${name}`,
    `SĐT: ${phone}`,
    `Email: ${email || 'Không cung cấp'}`,
    `Nhu cầu: ${interestLabel}`,
    '',
    'Nội dung:',
    message,
  ].join('\n');

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // Sandbox address — chỉ gửi được tới đúng email đã đăng ký tài khoản Resend.
      // Xác minh domain tiencongland.com trên Resend rồi đổi thành noreply@tiencongland.com
      // để gửi tự do tới SITE.email (xem ghi chú triển khai).
      from: `Website ${SITE.brand} <onboarding@resend.dev>`,
      to: [SITE.email],
      reply_to: email || undefined,
      subject: `Yêu cầu tư vấn từ ${name}`,
      text,
    }),
  });

  if (!resendResponse.ok) {
    return jsonResponse({ ok: false, error: 'send_failed' }, 502);
  }

  return jsonResponse({ ok: true }, 200);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
