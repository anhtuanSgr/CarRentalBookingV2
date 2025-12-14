// Component Title - Component hiển thị tiêu đề và mô tả cho các trang
// title: Tiêu đề chính
// description: Mô tả ngắn gọn về trang
const Title = ({ title, description }) => {
  return (
    <div>
      {/* Tiêu đề chính */}
      <h1 className="font-medium text-3xl">{title}</h1>
      {/* Mô tả - responsive text size */}
      <p className="mt-2 max-w-156 text-gray-500/90 text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};

export default Title;
