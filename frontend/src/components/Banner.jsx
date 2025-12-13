import { assets } from "../assets/assets";

/**
 * Component Banner - Hiển thị banner quảng cáo cho chủ xe
 * @returns {JSX.Element} Banner với nội dung khuyến khích chủ xe đăng ký
 */
const Banner = () => {
  return (
    // Container chính với gradient xanh dương, responsive layout
    <div className="flex md:flex-row flex-col justify-between items-center md:items-start bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] mx-3 md:mx-auto px-8 pt-10 md:pl-14 rounded-2xl max-w-6xl overflow-hidden">
      {/* Nội dung văn bản */}
      <div className="text-white">
        {/* Tiêu đề chính */}
        <h2 className="font-medium text-3xl">Bạn có sở hữu xe sang?</h2>

        {/* Mô tả ngắn về dịch vụ */}
        <p className="mt-2">
          Kiếm tiền từ xe của bạn một cách dễ dàng bằng cách đăng ký trên
          CarRental.
        </p>

        {/* Mô tả chi tiết về lợi ích */}
        <p className="max-w-md">
          Chúng tôi lo tất cả về bảo hiểm, xác minh tài xế và thanh toán an toàn
          — để bạn có thể kiếm thu nhập thụ động mà không lo lắng.
        </p>

        {/* Nút call-to-action để đăng ký xe */}
        <button
          className="bg-white hover:bg-slate-100 mt-4 px-6 py-2 rounded-lg text-primary text-sm transition-all cursor-pointer"
          tabIndex="0"
          type="button"
        >
          Đăng ký xe của bạn
        </button>
      </div>

      {/* Hình ảnh xe minh họa */}
      <img
        alt="car"
        className="mt-10 max-h-[180px]"
        src={assets.banner_car_image}
      />
    </div>
  );
};

export default Banner;
