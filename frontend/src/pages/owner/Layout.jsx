import { Outlet } from "react-router-dom";
import NavbarOwner from "../../components/owner/NavbarOwner";
import Sidebar from "../../components/owner/Sidebar";

// Component Layout - Layout chung cho các trang owner
// Bao gồm NavbarOwner, Sidebar và vùng hiển thị nội dung các route con
const Layout = () => {
  return (
    <div className="flex flex-col">
      {/* Thanh điều hướng phía trên */}
      <NavbarOwner />
      {/* Sidebar menu bên trái */}
      <Sidebar />
      {/* Vùng hiển thị nội dung các route con (Dashboard, AddCar, ManageCars, ManageBookings) */}
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
