import { useEffect, useState } from "react";
import { assets, dummyDashboardData } from "../../assets/assets";
import Title from "../../components/owner/Title";

/**
 * Component Dashboard - Bảng điều khiển chủ xe
 * Hiển thị tổng quan về số lượng xe, lượt đặt, doanh thu và các đặt xe gần đây
 */
const Dashboard = () => {
  // State quản lý dữ liệu dashboard
  const [data, setData] = useState({
    completedBookings: 0, // Số lượt đặt đã xác nhận
    monthlyRevenue: 0, // Doanh thu tháng hiện tại
    pendingBookings: 0, // Số lượt đặt đang chờ duyệt
    recentBookings: [], // Danh sách các đặt xe gần đây
    totalBookings: 0, // Tổng số lượt đặt
    totalCars: 0, // Tổng số xe
  });

  // Danh sách thẻ thống kê hiển thị trên dashboard
  const dashboardCards = [
    {
      icon: assets.carIconColored,
      title: "Tổng số xe",
      value: data.totalCars,
    },
    {
      icon: assets.listIconColored,
      title: "Tổng lượt đặt",
      value: data.totalBookings,
    },
    {
      icon: assets.cautionIconColored,
      title: "Đang chờ duyệt",
      value: data.pendingBookings,
    },
    {
      icon: assets.tick_icon,
      title: "Đã xác nhận",
      value: data.completedBookings,
    },
  ];

  // Effect để tải dữ liệu dashboard khi component mount
  useEffect(() => {
    // Lấy dữ liệu giả lập sau 1 giây (mô phỏng API call)
    // TODO: Thay thế bằng API call thực tế khi backend sẵn sàng
    setTimeout(() => {
      setData(dummyDashboardData);
    }, 1000);
  }, []);

  return (
    <div className="flex-1 px-4 md:px-10 pt-10">
      {/* Header với tiêu đề và mô tả */}
      <Title
        description="Theo dõi hiệu suất tổng thể của nền tảng gồm tổng số xe, lượt đặt, doanh thu và hoạt động gần đây"
        title="Bảng điều khiển chủ xe"
      />

      {/* Lưới các thẻ thống kê */}
      <div className="gap-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 max-w-3xl">
        {dashboardCards.map((card) => (
          <div
            className="flex justify-between items-center gap-2 p-4 border border-borderColor rounded-md"
            key={card.title}
          >
            <div>
              <h1 className="text-gray-500 text-xs">{card.title}</h1>
              <p className="font-semibold text-lg">{card.value}</p>
            </div>
            <div className="flex justify-center items-center bg-primary/10 rounded-full w-10 h-10">
              <img alt="" className="w-4 h-4" src={card.icon} />
            </div>
          </div>
        ))}
      </div>

      {/* Đặt xe gần đây & Doanh thu tháng */}
      <div className="flex flex-wrap items-start gap-6 mb-8 w-full">
        {/* Khu vực các đặt xe gần đây */}
        <div className="p-4 md:p-6 border border-borderColor rounded-md w-full max-w-lg">
          <h1 className="font-medium text-lg">Đặt xe gần đây</h1>
          <p className="mb-4 text-gray-500">
            Các lượt đặt của khách hàng gần nhất
          </p>
          {data.recentBookings.length > 0 ? (
            <div className="space-y-3">
              {data.recentBookings.map((booking) => {
                // Format ngày đặt xe theo định dạng Việt Nam
                const bookingDate = booking.createdAt
                  ? new Date(booking.createdAt).toLocaleDateString("vi-VN")
                  : "";

                // Xác định màu badge dựa trên trạng thái đặt xe
                // "đã xác nhận" -> màu xanh, các trạng thái khác -> màu vàng
                const statusColor =
                  booking.status === "đã xác nhận"
                    ? "bg-green-100 text-green-700 border-green-200"
                    : "bg-yellow-100 text-yellow-700 border-yellow-200";

                return (
                  <div
                    className="flex justify-between items-center hover:bg-gray-50 p-3 border border-borderColor rounded-md transition-colors"
                    key={booking._id}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        alt=""
                        className="w-5 h-5"
                        src={assets.listIconColored}
                      />
                      <div>
                        <p className="font-medium text-sm">
                          {booking.car?.brand} {booking.car?.model}
                        </p>
                        <p className="mt-1 text-gray-500 text-xs">
                          {bookingDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* Hiển thị giá tiền với định dạng số có dấu phẩy ngăn cách */}
                      <p className="font-medium text-gray-600 text-sm">
                        {booking.price?.toLocaleString()}₫
                      </p>
                      {/* Badge hiển thị trạng thái đặt xe */}
                      <span
                        className={`px-3 py-0.5 border rounded-full text-xs font-medium ${statusColor}`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Hiển thị khi chưa có đặt xe nào
            <p className="text-gray-400 text-sm">Chưa có đặt xe nào</p>
          )}
        </div>

        {/* Khu vực doanh thu tháng */}
        <div className="mb-6 p-4 md:p-6 border border-borderColor rounded-md w-full md:max-w-xs">
          <h1 className="font-medium text-lg">Doanh thu tháng</h1>
          <p className="text-gray-500">Doanh thu tháng hiện tại</p>
          {/* Hiển thị doanh thu với định dạng số có dấu phẩy ngăn cách */}
          <p className="mt-6 font-semibold text-primary text-3xl">
            {data.monthlyRevenue.toLocaleString()}₫
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
