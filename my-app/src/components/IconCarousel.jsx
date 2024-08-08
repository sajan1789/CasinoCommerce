import Slider from "react-slick";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiWasmer } from "react-icons/si";

const IconCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const icons = [
    { component: <FaReact size={50} />, name: "React" },
    { component: <DiMongodb size={50} />, name: "MongoDB" },
    { component: <SiWasmer size={50} />, name: "Wasm" },
  ];

  return (
    <Slider {...settings}>
      {icons.map((icon, index) => (
        <div key={index} className="flex justify-center">
        
          {icon.component}
        </div>
      ))}
    </Slider>
  );
};

export default IconCarousel;
