/**
 * Component Loader - Hiển thị loading spinner khi đang tải dữ liệu
 * @returns {JSX.Element} Loading spinner với animation xoay
 */
const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      {/* Container spinner */}
      <div className="flex flex-col items-center gap-4">
        {/* Spinner circle với animation xoay */}
        <div className="border-4 border-gray-200 border-t-primary rounded-full w-16 h-16 animate-spin"></div>

        {/* Text loading */}
        <p className="text-gray-500">Đang tải...</p>
      </div>
    </div>
  );
};

export default Loader;
