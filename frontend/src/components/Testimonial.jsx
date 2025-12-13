import { assets } from "../assets/assets";
import Title from "./Title";

/**
 * Component Testimonial - Hiển thị các đánh giá từ khách hàng
 * @returns {JSX.Element} Section testimonial với các card đánh giá từ khách hàng
 */
const Testimonial = () => {
  // Dữ liệu đánh giá từ khách hàng
  const testimonials = [
    {
      id: 1,
      image: assets.testimonial_image_1,
      location: "Barcelona, Spain",
      name: "Emma Rodriguez",
      rating: 5,
      review:
        "Tôi đã thuê xe từ nhiều công ty khác nhau, nhưng trải nghiệm với CarRental thật đặc biệt.",
    },
    {
      id: 2,
      image: assets.testimonial_image_2,
      location: "New York, USA",
      name: "John Smith",
      rating: 5,
      review:
        "CarRental đã làm cho chuyến đi của tôi dễ dàng hơn rất nhiều. Xe được giao tận nơi và dịch vụ khách hàng tuyệt vời!",
    },
    {
      id: 3,
      image: assets.testimonial_image_1,
      location: "Sydney, Australia",
      name: "Ava Johnson",
      rating: 5,
      review:
        "Tôi thực sự khuyên dùng CarRental! Đội xe của họ tuyệt vời và tôi luôn cảm thấy mình nhận được ưu đãi tốt nhất với dịch vụ xuất sắc.",
    },
  ];

  return (
    // Container chính với padding responsive
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-28">
      {/* Tiêu đề section với mô tả */}
      <Title
        description="Khám phá lý do tại sao những khách hàng sành điệu chọn CarRental cho nhu cầu thuê xe cao cấp của họ trên khắp đất nước."
        title="Khách hàng nói gì về chúng tôi"
      />

      {/* Grid hiển thị các đánh giá - responsive với 1-3 cột tùy kích thước màn hình */}
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-18">
        {/* Map qua mảng testimonials để render từng card đánh giá */}
        {testimonials.map((testimonial) => (
          <div
            className="bg-white shadow-lg p-6 rounded-xl transition-all hover:-translate-y-1 duration-500"
            key={testimonial.id}
            style={{ opacity: 1, transform: "none" }}
          >
            {/* Phần thông tin khách hàng - avatar, tên và địa điểm */}
            <div className="flex items-center gap-3">
              {/* Avatar khách hàng */}
              <img
                alt={testimonial.name}
                className="rounded-full w-12 h-12"
                src={testimonial.image}
              />

              {/* Tên và địa điểm khách hàng */}
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>

            {/* Hiển thị đánh giá sao - render số lượng sao dựa trên rating */}
            <div className="flex items-center gap-1 mt-4">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <img
                  alt="star-icon"
                  key={`${testimonial.id}-star-${index}`}
                  src={assets.star_icon}
                />
              ))}
            </div>

            {/* Nội dung đánh giá từ khách hàng */}
            <p className="mt-4 max-w-90 font-light text-gray-500">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
