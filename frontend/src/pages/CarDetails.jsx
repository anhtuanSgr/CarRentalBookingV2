import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";
import Loader from "../components/Loader";

/**
 * Component CarDetails - Hiển thị trang chi tiết xe và form đặt xe
 * Sử dụng useParams để lấy id của xe từ URL
 * @returns {JSX.Element} Trang chi tiết xe với thông tin và form booking
 */
const CarDetails = () => {
  // Lấy id từ URL params
  const { id } = useParams();

  // Hook điều hướng
  const navigate = useNavigate();

  // State quản lý dữ liệu xe
  const [carData, setCarData] = useState(null);

  // State quản lý trạng thái loading
  const [loading, setLoading] = useState(true);

  // State quản lý form đặt xe
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  /**
   * Format giá tiền theo định dạng VNĐ
   * @param {number} price - Giá tiền cần format
   * @returns {string} Chuỗi giá tiền đã được format
   */
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  /**
   * Lấy ngày hiện tại theo định dạng YYYY-MM-DD
   * @returns {string} Ngày hiện tại
   */
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  /**
   * Xử lý submit form đặt xe
   * @param {Event} e - Event submit
   */
  const handleBooking = (e) => {
    e.preventDefault();

    // Validate ngày nhận và ngày trả
    if (!pickupDate || !returnDate) {
      alert("Vui lòng chọn ngày nhận và ngày trả xe");
      return;
    }

    // Kiểm tra ngày trả phải sau ngày nhận
    if (new Date(returnDate) < new Date(pickupDate)) {
      alert("Ngày trả xe phải sau ngày nhận xe");
      return;
    }

    // TODO: Gửi request đặt xe đến backend
    console.log("Đặt xe:", {
      carId: id,
      pickupDate,
      returnDate,
    });

    alert("Đặt xe thành công!");
  };

  /**
   * Fetch dữ liệu xe từ backend hoặc dummy data
   * useEffect chạy khi component mount hoặc id thay đổi
   */
  useEffect(() => {
    // Simulate API call với setTimeout
    const fetchCarData = async () => {
      try {
        setLoading(true);

        // TODO: Thay thế bằng API call thực tế
        // const response = await fetch(`/api/cars/${id}`);
        // const data = await response.json();

        // Sử dụng dummy data để demo
        const car = dummyCarData.find((car) => car._id === id);

        // Simulate network delay
        setTimeout(() => {
          if (car) {
            setCarData(car);
          } else {
            alert("Không tìm thấy xe");
            navigate("/cars");
          }
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu xe:", error);
        alert("Có lỗi xảy ra khi tải dữ liệu xe");
        setLoading(false);
      }
    };

    fetchCarData();
  }, [id, navigate]);

  // Hiển thị loader khi đang tải dữ liệu
  if (loading) {
    return <Loader />;
  }

  // Hiển thị thông báo nếu không tìm thấy xe
  if (!carData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">Không tìm thấy thông tin xe</p>
      </div>
    );
  }

  return (
    <div className="mt-16 px-6 md:px-16 lg:px-24 xl:px-32">
      {/* Nút quay lại */}
      <button
        className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
        onClick={() => navigate(-1)}
        type="button"
      >
        <img alt="" className="opacity-65 rotate-180" src={assets.arrow_icon} />
        Quay lại trang trước
      </button>

      {/* Grid layout: 2 cột trái (thông tin xe) và 1 cột phải (form booking) */}
      <div className="gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-3">
        {/* Cột trái - Thông tin chi tiết xe */}
        <div className="lg:col-span-2">
          {/* Hình ảnh xe */}
          <img
            alt={`${carData.brand} ${carData.model}`}
            className="shadow-md mb-6 rounded-xl w-full h-auto md:max-h-100 object-cover"
            src={carData.image}
          />

          {/* Chi tiết xe */}
          <div className="space-y-6">
            {/* Tên xe và loại */}
            <div>
              <h1 className="font-bold text-3xl">
                {carData.brand} {carData.model}
              </h1>
              <p className="text-gray-500 text-lg">
                {carData.category} • {carData.year}
              </p>
            </div>

            <hr className="my-6 border-borderColor" />

            {/* Thông số kỹ thuật - Grid 4 cột */}
            <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
              {/* Số chỗ ngồi */}
              <div className="flex flex-col items-center bg-light p-4 rounded-lg">
                <img alt="" className="mb-2 h-5" src={assets.users_icon} />
                {carData.seating_capacity} Chỗ
              </div>

              {/* Loại nhiên liệu */}
              <div className="flex flex-col items-center bg-light p-4 rounded-lg">
                <img alt="" className="mb-2 h-5" src={assets.fuel_icon} />
                {carData.fuel_type}
              </div>

              {/* Hộp số */}
              <div className="flex flex-col items-center bg-light p-4 rounded-lg">
                <img alt="" className="mb-2 h-5" src={assets.car_icon} />
                {carData.transmission}
              </div>

              {/* Vị trí */}
              <div className="flex flex-col items-center bg-light p-4 rounded-lg">
                <img alt="" className="mb-2 h-5" src={assets.location_icon} />
                {carData.location}
              </div>
            </div>

            {/* Mô tả xe */}
            <div>
              <h1 className="mb-3 font-medium text-xl">Mô tả</h1>
              <p className="text-gray-500">{carData.description}</p>
            </div>

            {/* Tính năng xe */}
            <div>
              <h1 className="mb-3 font-medium text-xl">Tính năng</h1>
              <ul className="gap-2 grid grid-cols-1 sm:grid-cols-2">
                {/* Danh sách tính năng */}
                <li className="flex items-center text-gray-500">
                  <img alt="" className="mr-2 h-4" src={assets.check_icon} />
                  Camera 360
                </li>
                <li className="flex items-center text-gray-500">
                  <img alt="" className="mr-2 h-4" src={assets.check_icon} />
                  Bluetooth
                </li>
                <li className="flex items-center text-gray-500">
                  <img alt="" className="mr-2 h-4" src={assets.check_icon} />
                  GPS
                </li>
                <li className="flex items-center text-gray-500">
                  <img alt="" className="mr-2 h-4" src={assets.check_icon} />
                  Ghế sưởi ấm
                </li>
                <li className="flex items-center text-gray-500">
                  <img alt="" className="mr-2 h-4" src={assets.check_icon} />
                  Gương chiếu hậu
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cột phải - Form đặt xe */}
        <form
          className="top-18 sticky space-y-6 shadow-lg p-6 rounded-xl h-max text-gray-500"
          onSubmit={handleBooking}
        >
          {/* Giá thuê */}
          <p className="flex justify-between items-center font-semibold text-gray-800 text-2xl">
            {formatPrice(carData.pricePerDay)}₫
            <span className="font-normal text-gray-400 text-base">/ ngày</span>
          </p>

          <hr className="my-6 border-borderColor" />

          {/* Trường chọn ngày nhận xe */}
          <div className="flex flex-col gap-2">
            <label htmlFor="pickup-date">Ngày nhận xe</label>
            <input
              className="px-3 py-2 border border-borderColor rounded-lg"
              id="pickup-date"
              min={getTodayDate()}
              onChange={(e) => setPickupDate(e.target.value)}
              required
              type="date"
              value={pickupDate}
            />
          </div>

          {/* Trường chọn ngày trả xe */}
          <div className="flex flex-col gap-2">
            <label htmlFor="return-date">Ngày trả xe</label>
            <input
              className="px-3 py-2 border border-borderColor rounded-lg"
              id="return-date"
              min={pickupDate || getTodayDate()}
              onChange={(e) => setReturnDate(e.target.value)}
              required
              type="date"
              value={returnDate}
            />
          </div>

          {/* Nút đặt xe */}
          <button
            className="bg-primary hover:bg-primary-dull py-3 rounded-xl w-full font-medium text-white transition-all cursor-pointer"
            type="submit"
          >
            Đặt xe ngay
          </button>

          {/* Thông báo */}
          <p className="text-sm text-center">
            Không cần thẻ tín dụng để đặt chỗ
          </p>
        </form>
      </div>
    </div>
  );
};

export default CarDetails;
