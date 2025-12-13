import { useState } from "react";
import { assets, cityList } from "../assets/assets.js";

/**
 * Component Hero - Hiển thị phần hero section với form tìm kiếm xe
 * @returns {JSX.Element} Hero section với tiêu đề, form tìm kiếm và hình ảnh xe
 */
const Hero = () => {
  // Lấy ngày hôm nay để set min date cho date inputs
  const today = new Date().toISOString().split("T")[0];

  // State quản lý địa điểm nhận xe được chọn
  const [pickupLocation, setPickupLocation] = useState("");

  return (
    // Container chính với chiều cao full screen, layout dọc, căn giữa
    <div className="flex flex-col justify-center items-center gap-14 bg-light h-screen text-center">
      {/* Tiêu đề chính - responsive với kích thước khác nhau trên mobile và desktop */}
      <h1 className="font-semibold text-4xl md:text-5xl">Xe sang cho thuê</h1>

      {/* Form tìm kiếm xe - layout dọc trên mobile, ngang trên desktop */}
      <form className="flex md:flex-row flex-col justify-between items-start md:items-center bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)] p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-[800px]">
        {/* Container cho các input - responsive layout */}
        <div className="flex md:flex-row flex-col items-start md:items-center gap-10 md:ml-8">
          {/* Select địa điểm nhận xe */}
          <div className="flex flex-col items-start gap-2">
            <select
              onChange={(e) => setPickupLocation(e.target.value)}
              required
              value={pickupLocation}
            >
              {/* Option mặc định */}
              <option value="">Địa điểm nhận xe</option>

              {/* Render danh sách các thành phố từ cityList */}
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            {/* Hiển thị thông báo nếu chưa chọn địa điểm */}
            <p className="px-1 text-gray-500 text-sm">
              {pickupLocation ? "" : "Vui lòng chọn địa điểm"}
            </p>
          </div>

          {/* Input ngày nhận xe */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date">Ngày nhận xe</label>
            <input
              className="text-gray-500 text-sm"
              id="pickup-date"
              min={today} // Không cho chọn ngày trong quá khứ
              required
              type="date"
            />
          </div>

          {/* Input ngày trả xe */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date">Ngày trả xe</label>
            <input
              className="text-gray-500 text-sm"
              id="return-date"
              min={today} // Không cho chọn ngày trong quá khứ
              required
              type="date"
            />
          </div>
        </div>

        {/* Nút tìm kiếm với icon và text */}
        <button
          className="flex justify-center items-center gap-1 bg-primary hover:bg-primary-dull max-sm:mt-4 px-9 py-3 rounded-full text-white cursor-pointer"
          type="submit"
        >
          {/* Icon tìm kiếm */}
          <img
            alt="tìm kiếm"
            className="brightness-300"
            height="16"
            src={assets.search_icon}
            width="16"
          />
          Tìm kiếm
        </button>
      </form>

      {/* Hình ảnh xe chính - hiển thị ở cuối hero section */}
      <img alt="xe" className="max-h-74" src={assets.main_car} />
    </div>
  );
};

export default Hero;
