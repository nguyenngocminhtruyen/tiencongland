export function formatPrice(price: number, unit: 'billion' | 'million-per-month'): string {
  if (unit === 'billion') {
    return `${price.toLocaleString('vi-VN')} tỷ`;
  }
  return `${price.toLocaleString('vi-VN')} triệu/tháng`;
}

export function formatArea(area: number): string {
  return `${area.toLocaleString('vi-VN')} m²`;
}

const STATUS_LABEL: Record<string, string> = {
  'for-sale': 'Bán',
  'for-rent': 'Cho thuê',
  sold: 'Đã bán',
};

export function statusLabel(status: string): string {
  return STATUS_LABEL[status] ?? status;
}

const TYPE_LABEL: Record<string, string> = {
  apartment: 'Căn hộ',
  house: 'Nhà phố',
  villa: 'Biệt thự',
  land: 'Đất nền',
  shophouse: 'Shophouse',
};

export function typeLabel(type: string): string {
  return TYPE_LABEL[type] ?? type;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
}
