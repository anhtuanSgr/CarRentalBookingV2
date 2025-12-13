import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

/**
 * Component CarCard - Hiển thị thẻ thông tin xe
 * @param {Object} car - Đối tượng chứa thông tin xe
 * @returns {JSX.Element} Thẻ xe với hình ảnh và thông tin chi tiết
 */
const CarCard = ({ car }) => {
  /**
   * Format giá tiền theo định dạng VNĐ
   * @param {number} price - Giá tiền cần format
   * @returns {string} Chuỗi giá tiền đã được format
   */
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  // Hook điều hướng trang
  const navigate = useNavigate();

  /**
   * Xử lý sự kiện click hoặc keyboard để điều hướng đến trang chi tiết
   */
  const handleNavigate = () => {
    // Điều hướng đến trang chi tiết xe
    navigate(`/car-details/${car._id}`);
    // Cuộn lên đầu trang
    window.scrollTo(0, 0);
  };

  /**
   * Xử lý sự kiện keyboard (Enter hoặc Space) để điều hướng
   */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavigate();
    }
  };

  return (
    // biome-ignore lint/a11y/useSemanticElements: Card component sử dụng div với đầy đủ accessibility attributes
    <div
      className="group shadow-lg rounded-xl overflow-hidden transition-all hover:-translate-y-1 duration-500 cursor-pointer"
      onClick={handleNavigate}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {/* Container hình ảnh xe */}
      <div className="relative h-48 overflow-hidden">
        {/* Hình ảnh xe với hiệu ứng zoom khi hover */}
        <img
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={car.image}
        />

        {/* Badge trạng thái xe - chỉ hiển thị khi xe có sẵn */}
        {car.isAvaliable && (
          <p className="top-4 left-4 absolute bg-primary/90 px-2.5 py-1 rounded-full text-white text-xs">
            Có sẵn ngay
          </p>
        )}

        {/* Hiển thị giá thuê xe */}
        <div className="right-4 bottom-4 absolute bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg text-white">
          <span className="font-semibold">{formatPrice(car.pricePerDay)}₫</span>
          <span className="text-white/80 text-sm"> / ngày</span>
        </div>
      </div>

      {/* Thông tin chi tiết xe */}
      <div className="p-4 sm:p-5">
        {/* Tên và loại xe */}
        <div className="flex justify-between items-start mb-2">
          <div>
            {/* Tên xe: Hãng + Model */}
            <h3 className="font-medium text-lg">
              {car.brand} {car.model}
            </h3>
            {/* Danh mục và năm sản xuất */}
            <p className="text-muted-foreground text-sm">
              {car.category} • {car.year}
            </p>
          </div>
        </div>

        {/* Thông số kỹ thuật - Grid 2 cột */}
        <div className="gap-y-2 grid grid-cols-2 mt-4 text-gray-600">
          {/* Số chỗ ngồi */}
          <div className="flex items-center text-muted-foreground text-sm">
            <img alt="" className="mr-2 h-4" src={assets.users_icon} />
            <span>{car.seating_capacity} Chỗ</span>
          </div>

          {/* Loại nhiên liệu */}
          <div className="flex items-center text-muted-foreground text-sm">
            <img alt="" className="mr-2 h-4" src={assets.fuel_icon} />
            <span>{car.fuel_type}</span>
          </div>

          {/* Hộp số */}
          <div className="flex items-center text-muted-foreground text-sm">
            <img alt="" className="mr-2 h-4" src={assets.car_icon} />
            <span>{car.transmission}</span>
          </div>

          {/* Vị trí xe */}
          <div className="flex items-center text-muted-foreground text-sm">
            <img alt="" className="mr-2 h-4" src={assets.location_icon} />
            <span>{car.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
