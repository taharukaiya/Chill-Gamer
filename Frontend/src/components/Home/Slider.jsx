import { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaGamepad,
  FaTrophy,
} from "react-icons/fa";
import img1 from "../../assets/sliderImages/img1.jpg";
import img2 from "../../assets/sliderImages/img2.jpg";
import img3 from "../../assets/sliderImages/img3.jpg";
import img4 from "../../assets/sliderImages/img4.jpg";
import img5 from "../../assets/sliderImages/img5.jpg";
import img6 from "../../assets/sliderImages/img6.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider data with meaningful gaming content
  const slides = [
    {
      id: 1,
      image: img1,
      title: "Epic Adventures Await",
      subtitle: "Discover the Latest RPG Masterpieces",
      description:
        "Dive into immersive worlds where your choices shape destiny. Experience stories that will stay with you forever.",
      rating: 4.9,
      category: "RPG",
      icon: <FaGamepad className="text-2xl" />,
    },
    {
      id: 2,
      image: img2,
      title: "Competitive Gaming Hub",
      subtitle: "Master the Art of Strategy",
      description:
        "Join millions of players in fast-paced competitive matches. Rise through the ranks and prove your skills.",
      rating: 4.7,
      category: "Strategy",
      icon: <FaTrophy className="text-2xl" />,
    },
    {
      id: 3,
      image: img3,
      title: "Indie Gems Collection",
      subtitle: "Uncover Hidden Gaming Treasures",
      description:
        "Support indie developers and discover unique gaming experiences that push creative boundaries.",
      rating: 4.8,
      category: "Indie",
      icon: <FaStar className="text-2xl" />,
    },
    {
      id: 4,
      image: img4,
      title: "Action-Packed Thrills",
      subtitle: "Heart-Pounding Adventures",
      description:
        "Experience adrenaline-pumping action sequences and intense combat mechanics in these blockbuster titles.",
      rating: 4.6,
      category: "Action",
      icon: <FaGamepad className="text-2xl" />,
    },
    {
      id: 5,
      image: img5,
      title: "Multiplayer Mayhem",
      subtitle: "Connect with Gamers Worldwide",
      description:
        "Team up with friends or compete against players globally in these engaging multiplayer experiences.",
      rating: 4.5,
      category: "Multiplayer",
      icon: <FaTrophy className="text-2xl" />,
    },
    {
      id: 6,
      image: img6,
      title: "Next-Gen Graphics",
      subtitle: "Visual Masterpieces",
      description:
        "Witness stunning visuals and cutting-edge graphics that blur the line between reality and gaming.",
      rating: 4.9,
      category: "AAA",
      icon: <FaStar className="text-2xl" />,
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-[#0000003f] shadow-2xl">
      {/* Main Slider */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-[#00000041] backdrop-blur-sm"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
                <div className="w-11/12 sm:w-10/12 flex flex-col justify-center items-center">
                  {/* Category Badge */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {slide.icon}
                      <span>{slide.category}</span>
                    </span>
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-yellow-400" />
                      <span className="text-white font-semibold">
                        {slide.rating}
                      </span>
                    </div>
                  </div>

                  {/* Title and Subtitle */}
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl text-indigo-300 mb-6 font-medium">
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-lg">
                    {slide.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
                      Explore Reviews
                    </button>
                    <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                      Watch Trailer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#0000005b] border border-black hover:bg-[#000000d4] backdrop-blur-3xl text-white p-2 rounded-full transition-all duration-200 z-20"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-xl" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#0000005b] border border-black hover:bg-[#000000d4] backdrop-blur-3xl text-white p-2 rounded-full transition-all duration-200 z-20"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1 h-1 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-indigo-500 scale-125"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
