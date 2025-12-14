import { Link } from "react-router-dom";
import { assets, dummyUserData } from "../../assets/assets";

// Component NavbarOwner - Thanh điều hướng cho trang owner
// Hiển thị logo và lời chào người dùng
const NavbarOwner = () => {
  return (
    <div className="relative flex justify-between items-center px-6 md:px-10 py-4 border-borderColor border-b text-gray-500 transition-all">
      {/* Logo, click vào sẽ về trang chủ */}
      <Link data-discover="true" to="/">
        <img alt="" className="h-7" src={assets.logo} />
      </Link>
      {/* Lời chào người dùng, hiển thị tên từ dummyUserData hoặc "Chủ xe" nếu không có */}
      <p>Xin chào, {dummyUserData.name || "Chủ xe"}</p>
    </div>
  );
};

export default NavbarOwner;
