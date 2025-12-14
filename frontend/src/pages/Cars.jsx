import { useState } from "react";
import { assets, dummyCarData } from "../assets/assets";
import CarCard from "../components/CarCard";
import Title from "../components/Title";

/**
 * Component Cars - Trang hiển thị danh sách xe có sẵn
 * Bao gồm tính năng tìm kiếm và lọc xe
 * @returns {JSX.Element} Trang danh sách xe với thanh tìm kiếm và lưới xe
 */
const Cars = () => {
  // State quản lý giá trị tìm kiếm
  const [searchQuery, setSearchQuery] = useState("");

  // State quản lý danh sách xe (hiện tại dùng dữ liệu mẫu)
  const [cars] = useState(dummyCarData);

  // Lọc xe theo từ khóa tìm kiếm
  const filteredCars = cars.filter((car) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      car.brand.toLowerCase().includes(searchLower) ||
      car.model.toLowerCase().includes(searchLower) ||
      car.category.toLowerCase().includes(searchLower) ||
      car.fuel_type.toLowerCase().includes(searchLower) ||
      car.transmission.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div>
      {/* Container chính với padding dọc và nền sáng */}
      <div
        className="flex flex-col items-center bg-light max-md:px-4 py-20"
        style={{ opacity: 1, transform: "none" }}
      >
        {/* Tiêu đề trang */}
        <Title
          description="Khám phá bộ sưu tập xe cao cấp của chúng tôi cho chuyến phiêu lưu tiếp theo của bạn"
          title="Xe Có Sẵn"
        />

        {/* Thanh tìm kiếm với icon search và filter */}
        <div
          className="flex items-center bg-white shadow mt-6 px-4 rounded-full w-full max-w-[560px] h-12"
          style={{ opacity: 1, transform: "none" }}
        >
          {/* Icon tìm kiếm */}
          <img
            alt=""
            className="mr-2 w-[18px] h-[18px]"
            src={assets.search_icon}
          />

          {/* Input tìm kiếm */}
          <input
            className="outline-none w-full h-full text-gray-500"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo hãng, mẫu xe hoặc tính năng"
            type="text"
            value={searchQuery}
          />

          {/* Icon filter */}
          <img
            alt=""
            className="ml-2 w-[18px] h-[18px] cursor-pointer"
            src={assets.filter_icon}
          />
        </div>
      </div>

      {/* Container danh sách xe */}
      <div
        className="mt-10 px-6 md:px-16 lg:px-24 xl:px-32"
        style={{ opacity: 1 }}
      >
        {/* Hiển thị số lượng xe */}
        <p className="mx-auto xl:px-20 max-w-7xl text-gray-500">
          Hiển thị {filteredCars.length} xe
        </p>

        {/* Lưới hiển thị các thẻ xe */}
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto mt-4 xl:px-20 max-w-7xl">
          {filteredCars.map((car) => (
            <div key={car._id} style={{ opacity: 1, transform: "none" }}>
              <CarCard car={car} />
            </div>
          ))}
        </div>

        {/* Hiển thị thông báo khi không tìm thấy xe */}
        {filteredCars.length === 0 && (
          <div className="mx-auto xl:px-20 py-20 max-w-7xl text-center">
            <p className="text-gray-500 text-lg">
              Không tìm thấy xe nào phù hợp với tìm kiếm của bạn
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cars;
