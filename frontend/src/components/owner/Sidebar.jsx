import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { assets, dummyUserData, ownerMenuLinks } from "../../assets/assets";

// Component Sidebar - Menu điều hướng bên trái cho trang owner
// Bao gồm ảnh đại diện, tên người dùng và menu điều hướng
const Sidebar = () => {
  // State quản lý thông tin người dùng
  const [user, setUser] = useState(dummyUserData);
  // Lấy đường dẫn hiện tại để highlight menu item đang active
  const location = useLocation();
  // State lưu file ảnh mới được chọn
  const [image, setImage] = useState(null);

  // Hàm cập nhật ảnh đại diện khi người dùng chọn ảnh mới
  const updateImage = async () => {
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      setUser((prevUser) => ({
        ...prevUser,
        image: imageUrl,
      }));
      setImage(null);
    }
  };

  // Hàm xử lý khi người dùng chọn file ảnh
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="relative md:flex md:flex-col md:items-center pt-8 border-borderColor border-r w-full max-w-13 md:max-w-60 min-h-screen text-sm">
      {/* Phần ảnh đại diện - có thể click để thay đổi ảnh */}
      <div className="group relative">
        <label className="cursor-pointer" htmlFor="image">
          <img
            alt=""
            className="mx-auto rounded-full w-9 md:w-14 h-9 md:h-14"
            src={
              user.image ||
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300"
            }
          />
          <input
            accept="image/*"
            hidden
            id="image"
            onChange={handleImageChange}
            type="file"
          />
          {/* Icon chỉnh sửa hiển thị khi hover vào ảnh */}
          <div className="hidden top-0 right-0 bottom-0 left-0 absolute group-hover:flex justify-center items-center bg-black/10 rounded-full">
            <img alt="Edit" className="w-4 h-4" src={assets.edit_icon} />
          </div>
        </label>
      </div>

      {/* Nút Save hiển thị khi có ảnh mới được chọn */}
      {image && (
        <button
          className="top-0 right-0 absolute flex gap-1 bg-primary/10 p-2 text-primary cursor-pointer"
          onClick={updateImage}
          type="button"
        >
          Save <img alt="" src={assets.check_icon} width={13} />
        </button>
      )}

      {/* Tên người dùng - ẩn trên mobile */}
      <p className="max-md:hidden mt-2 text-base">{user.name}</p>

      {/* Menu điều hướng - render danh sách các link từ ownerMenuLinks */}
      <div className="w-full">
        {ownerMenuLinks.map((link) => (
          <NavLink
            className={`relative flex w-full items-center gap-2 py-3 pl-4 first:mt-6 ${
              link.path === location.pathname
                ? "bg-primary/10 text-primary"
                : "text-gray-600"
            }`}
            key={link.path}
            to={link.path}
          >
            {/* Icon - đổi sang coloredIcon khi active */}
            <img
              alt={link.name}
              src={
                link.path === location.pathname ? link.coloredIcon : link.icon
              }
            />

            {/* Tên menu item - ẩn trên mobile */}
            <span className="max-md:hidden">{link.name}</span>

            {/* Thanh indicator bên phải khi menu item đang active */}
            <div
              className={`${
                link.path === location.pathname && "bg-primary"
              } absolute right-0 h-8 w-1.5 rounded-l`}
            ></div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
