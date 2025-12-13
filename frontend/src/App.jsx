import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CarDetails from "./pages/CarDetails";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import MyBookings from "./pages/MyBookings";

/**
 * Component App - Component gốc của ứng dụng
 * Quản lý routing và layout chung cho toàn bộ ứng dụng
 * @returns {JSX.Element} Layout chính với Navbar, Routes và Footer
 */
function App() {
  // State quản lý hiển thị modal đăng nhập
  const [_showLogin, setShowLogin] = useState(false);

  // Kiểm tra xem đường dẫn hiện tại có phải là trang owner không
  const isOwnerPath = useLocation().pathname.startsWith("/owner");

  return (
    <div>
      {/* Hiển thị Navbar nếu không phải trang owner */}
      {!isOwnerPath && <Navbar onShowLogin={setShowLogin} />}

      {/* Định nghĩa các routes của ứng dụng */}
      <Routes>
        {/* Trang chủ */}
        <Route element={<Home />} path="/" />
        {/* Trang chi tiết xe với tham số id */}
        <Route element={<CarDetails />} path="/car-details/:id" />
        {/* Trang danh sách xe */}
        <Route element={<Cars />} path="/cars" />
        {/* Trang đặt chỗ của tôi */}
        <Route element={<MyBookings />} path="/my-bookings" />
      </Routes>

      {/* Hiển thị Footer nếu không phải trang owner */}
      {!isOwnerPath && <Footer />}
    </div>
  );
}

export default App;
