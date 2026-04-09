import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Hoàng Nam Cần Thơ",
  description:
    "Dịch vụ thành lập công ty, kế toán, thuế, nhân sự chuyên nghiệp tại Cần Thơ. Hơn 10 năm đồng hành cùng doanh nghiệp.",
  url: "https://hoangnamcantho.com",
  lang: "vi",
  locale: "vi_VN",
  author: "Hoàng Nam",
  ogImage: ogImage,
  themeColor: "#0056b3",

  // Contact info
  contact: {
    hotline: "0918883179",
    hotlineDisplay: "091.888.31.79",
    email: "tructuyenhoangnam@gmail.com",
    address: "03 Đ. Quản Trọng Hoàng, Xuân Khánh, Ninh Kiều, Cần Thơ",
    zalo: "https://zalo.me/0918883179",
    facebook: "https://facebook.com/hoangnamcantho",
    youtube: "https://youtube.com",
    website: "hoangnamcantho.com",
  },

  // Main navigation
  navLinks: [
    {
      text: "Trang Chủ",
      href: "/",
      icon: "lucide:home",
    },
    {
      text: "Giới Thiệu",
      href: "/gioi-thieu",
      icon: "lucide:info",
    },
    {
      text: "Dịch Vụ",
      href: "/dich-vu",
      icon: "lucide:briefcase",
      children: [
        {
          text: "Thành Lập Công Ty",
          href: "/dich-vu/thanh-lap-cong-ty-tai-can-tho",
        },
        {
          text: "Làm Giấy Phép Kinh Doanh",
          href: "/dich-vu/lam-giay-phep-kinh-doanh-tai-can-tho",
        },
        {
          text: "Thay Đổi Giấy Phép Kinh Doanh",
          href: "/dich-vu/thay-doi-giay-phep-kinh-doanh-tai-can-tho",
        },
        {
          text: "Giải Thể Công Ty",
          href: "/dich-vu/giai-the-cong-ty-o-can-tho",
        },
        {
          text: "Dịch Vụ Kế Toán",
          href: "/dich-vu/dich-vu-ke-toan-can-tho",
        },
        {
          text: "Hóa Đơn Điện Tử",
          href: "/dich-vu/hoa-don-dien-tu-can-tho",
        },
        {
          text: "Chữ Ký Số",
          href: "/dich-vu/chu-ky-so-can-tho",
        },
        {
          text: "Thành Lập CT Vốn Nước Ngoài",
          href: "/dich-vu/thanh-lap-cong-ty-von-dau-tu-nuoc-ngoai-tai-can-tho",
        },
      ],
    },
    {
      text: "Blog",
      href: "/blog",
      icon: "lucide:book-open",
    },
    {
      text: "Liên Hệ",
      href: "/lien-he",
      icon: "lucide:mail",
    },
  ],

  // Footer links
  footerLinks: {
    about: [
      { text: "Giới thiệu công ty", href: "/gioi-thieu" },
      { text: "Giới thiệu CEO", href: "/gioi-thieu-ceo" },
      { text: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" },
      { text: "Điều khoản sử dụng", href: "/dieu-khoan-su-dung" },
    ],
  },
};
export const R2_BASE = "https://images.hoangnamcantho.com";