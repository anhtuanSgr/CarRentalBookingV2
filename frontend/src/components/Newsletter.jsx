/**
 * Component Newsletter - Hiển thị form đăng ký nhận tin tức và ưu đãi
 * @returns {JSX.Element} Form đăng ký newsletter với input email và nút submit
 */
const Newsletter = () => {
  /**
   * Xử lý submit form đăng ký nhận tin
   * @param {Event} e - Event object từ form submit
   */
  const handleSubmit = (e) => {
    // Ngăn chặn hành vi mặc định của form (reload trang)
    e.preventDefault();

    // Lấy giá trị email từ input
    const email = e.target.email.value;
    console.log("Email đăng ký:", email);

    // TODO: Gọi API để lưu email đăng ký vào database
    alert("Đăng ký thành công!");

    // Reset form sau khi submit thành công
    e.target.reset();
  };

  return (
    // Container chính với layout dọc, căn giữa, responsive padding
    <div className="flex flex-col justify-center items-center space-y-2 my-10 mb-40 max-md:px-4 text-center">
      {/* Tiêu đề chính - responsive với kích thước khác nhau trên mobile và desktop */}
      <h1 className="font-semibold text-2xl md:text-4xl">
        Đừng bỏ lỡ ưu đãi nào!
      </h1>

      {/* Mô tả ngắn về lợi ích khi đăng ký */}
      <p className="pb-8 text-gray-500/70 md:text-lg">
        Đăng ký để nhận các ưu đãi mới nhất, sản phẩm mới và giảm giá độc quyền
      </p>

      {/* Form đăng ký với input email và nút submit */}
      <form
        className="flex justify-between items-center w-full max-w-2xl h-12 md:h-13"
        onSubmit={handleSubmit}
      >
        {/* Input email - chiếm toàn bộ chiều rộng, bo góc trái */}
        <input
          className="px-3 border border-gray-300 border-r-0 rounded-md rounded-r-none outline-none w-full h-full text-gray-500"
          name="email"
          placeholder="Nhập địa chỉ email của bạn"
          required
          type="email"
        />

        {/* Nút submit - bo góc phải, hover effect */}
        <button
          className="bg-primary hover:bg-primary-dull px-8 md:px-12 rounded-md rounded-l-none h-full text-white whitespace-nowrap transition-all cursor-pointer"
          type="submit"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
