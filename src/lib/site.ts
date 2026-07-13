export const SITE = {
  name: 'Đinh Tiến Công',
  brand: 'Tiến Công Land',
  title: 'Đinh Tiến Công | Chuyên Viên Tư Vấn Bất Động Sản',
  description:
    'Chuyên viên tư vấn bất động sản uy tín tại TP.HCM với hơn 8 năm kinh nghiệm. Đồng hành cùng khách hàng mua bán, đầu tư bất động sản an toàn, minh bạch.',
  url: 'https://www.tiencongland.vn',
  locale: 'vi_VN',
  phone: '+84 909 123 456',
  phoneDisplay: '0909 123 456',
  email: 'contact@tiencongland.vn',
  address: '88 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh',
  workingHours: 'Thứ 2 - Thứ 7: 8:00 - 18:00',
  license: 'MST/GPKD số 0312xxxxxx do Sở KH&ĐT TP.HCM cấp',
  // TODO: điền tên công ty/sàn phân phối mà chuyên viên đang hợp tác (nếu có).
  // Để trống nếu hoạt động độc lập — các đoạn văn bản pháp lý sẽ tự động bỏ phần nhắc tên công ty.
  company: '',
  social: {
    facebook: 'https://facebook.com/tiencongland',
    zalo: 'https://zalo.me/0909123456',
    youtube: 'https://youtube.com/@tiencongland',
  },
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Trang chủ' },
  { href: '/about', label: 'Giới thiệu' },
  { href: '/du-an', label: 'Dự án' },
  { href: '/properties', label: 'Bất động sản' },
  { href: '/blog', label: 'Kiến thức' },
  { href: '/contact', label: 'Liên hệ' },
] as const;
