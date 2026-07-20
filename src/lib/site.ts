export const SITE = {
  name: 'Đinh Tiến Công',
  brand: 'Tiến Công Land',
  title: 'Đinh Tiến Công | Chuyên Viên Tư Vấn Bất Động Sản',
  description:
    'Chuyên viên tư vấn bất động sản uy tín tại TP.HCM với hơn 8 năm kinh nghiệm. Đồng hành cùng khách hàng mua bán, đầu tư bất động sản an toàn, minh bạch.',
  url: 'https://tiencongland.com',
  locale: 'vi_VN',
  phone: '+84 964 346 431',
  phoneDisplay: '0964 346 431',
  email: 'tiencongland.contact@gmail.com',
  address: '193 Trường Văn Bang, Phường Thạnh Mỹ Lợi, TP. Hồ Chí Minh',
  workingHours: 'Thứ 2 - Thứ 7: 8:00 - 18:00',
  license: 'Chứng chỉ hành nghề môi giới bất động sản số HCM-0098043',
  // TODO: điền tên công ty/sàn phân phối mà chuyên viên đang hợp tác (nếu có).
  // Để trống nếu hoạt động độc lập — các đoạn văn bản pháp lý sẽ tự động bỏ phần nhắc tên công ty.
  company: '',
  social: {
    facebook: 'https://www.facebook.com/CongDinh1314002',
    zalo: 'https://zalo.me/0964346431',
    // Chưa có kênh YouTube/TikTok — để trống cho đến khi có, các nơi hiển thị sẽ tự ẩn.
    youtube: '',
    tiktok: '',
  },
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Trang chủ' },
  { href: '/about/', label: 'Giới thiệu' },
  { href: '/projects/', label: 'Dự án' },
  { href: '/properties/', label: 'Bất động sản' },
  { href: '/blog/', label: 'Kiến thức' },
  { href: '/contact/', label: 'Liên hệ' },
] as const;
