import { assets } from "../assets/assets";

/**
 * Component Footer - Hiển thị footer của website
 * @returns {JSX.Element} Footer với logo, mô tả, menu và thông tin liên hệ
 */
const Footer = () => {
  return (
    // Container chính của footer với padding responsive
    <div className="mt-60 px-6 md:px-16 lg:px-24 xl:px-32 text-gray-500 text-sm">
      {/* Phần nội dung chính của footer */}
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-gray-300 border-b">
        {/* Phần logo và mô tả công ty */}
        <div>
          {/* Logo công ty */}
          <img alt="logo" className="h-8 md:h-9" src={assets.logo} />

          {/* Mô tả ngắn về dịch vụ */}
          <p className="mt-3 max-w-80">
            Dịch vụ cho thuê xe cao cấp với nhiều lựa chọn xe sang trọng và phổ
            thông cho mọi nhu cầu lái xe của bạn.
          </p>

          {/* Các icon mạng xã hội */}
          <div className="flex items-center gap-3 mt-6">
            {/* Link Facebook */}
            <a
              href="https://facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Facebook"
                className="w-5 h-5"
                src={assets.facebook_logo}
              />
            </a>

            {/* Link Instagram */}
            <a
              href="https://instagram.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Instagram"
                className="w-5 h-5"
                src={assets.instagram_logo}
              />
            </a>

            {/* Link Twitter */}
            <a
              href="https://twitter.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Twitter"
                className="w-5 h-5"
                src={assets.twitter_logo}
              />
            </a>

            {/* Link Email */}
            <a href="mailto:info@carrental.com">
              <img alt="Email" className="w-5 h-5" src={assets.gmail_logo} />
            </a>
          </div>
        </div>

        {/* Phần các cột menu */}
        <div className="flex flex-wrap justify-between gap-8 w-1/2">
          {/* Cột Quick Links - Các liên kết nhanh đến các trang chính */}
          <div>
            <h2 className="font-medium text-gray-800 text-base uppercase">
              Liên kết nhanh
            </h2>
            <ul className="flex flex-col gap-1.5 mt-3">
              <li>
                <a href="/">Trang chủ</a>
              </li>
              <li>
                <a href="/cars">Xe có sẵn</a>
              </li>
              <li>
                <a href="/my-bookings">Đặt xe của tôi</a>
              </li>
              <li>
                <a href="/about">Về chúng tôi</a>
              </li>
            </ul>
          </div>

          {/* Cột Resources - Các tài nguyên và chính sách */}
          <div>
            <h2 className="font-medium text-gray-800 text-base uppercase">
              Tài nguyên
            </h2>
            <ul className="flex flex-col gap-1.5 mt-3">
              <li>
                <a href="/help">Trung tâm trợ giúp</a>
              </li>
              <li>
                <a href="/terms">Điều khoản dịch vụ</a>
              </li>
              <li>
                <a href="/privacy">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="/insurance">Bảo hiểm</a>
              </li>
            </ul>
          </div>

          {/* Cột Contact - Thông tin liên hệ */}
          <div>
            <h2 className="font-medium text-gray-800 text-base uppercase">
              Liên hệ
            </h2>
            <ul className="flex flex-col gap-1.5 mt-3">
              {/* Địa chỉ */}
              <li>123 Đường Láng</li>
              <li>Hà Nội, Việt Nam</li>

              {/* Số điện thoại */}
              <li>+84 123 456 789</li>

              {/* Email */}
              <li>info@carrental.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Phần copyright và links phụ */}
      <div className="flex md:flex-row flex-col justify-between items-center gap-2 py-5">
        {/* Thông tin bản quyền với năm hiện tại */}
        <p>© {new Date().getFullYear()} CarRental. Đã đăng ký bản quyền.</p>

        {/* Các liên kết phụ */}
        <ul className="flex items-center gap-4">
          <li>
            <a href="/privacy">Bảo mật</a>
          </li>
          <li>|</li>
          <li>
            <a href="/terms">Điều khoản</a>
          </li>
          <li>|</li>
          <li>
            <a href="/cookies">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
