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
          href: "/thanh-lap-cong-ty-tai-can-tho",
        },
        {
          text: "Làm Giấy Phép Kinh Doanh",
          href: "/lam-giay-phep-kinh-doanh-tai-can-tho",
        },
        {
          text: "Giải Thể Công Ty",
          href: "/giai-the-cong-ty-tai-can-tho",
        },
      ],
    },
    {
      text: "Chia Sẻ",
      href: "/tin-tuc",
      icon: "lucide:book-open",
      children: [
        { text: "Tin tức công ty", href: "/tin-tuc/cong-ty" },
        { text: "Kiến thức chuyên ngành", href: "/tin-tuc/kien-thuc" },
      ],
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
