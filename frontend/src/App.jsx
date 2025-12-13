import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarDetails from "./pages/CarDetails";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import MyBookings from "./pages/MyBookings";

function App() {
  // State quản lý hiển thị modal đăng nhập
  const [_showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");
  return (
    <div>
      {!isOwnerPath && <Navbar onShowLogin={setShowLogin} />}
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
    </div>
  );
}

export default App;
