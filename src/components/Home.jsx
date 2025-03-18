import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TypingText from "./TypingText"; // Import the TypingText component

const Home = () => {
  // Carousel settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 600, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-play the carousel
    autoplaySpeed: 3000, // Auto-play speed in milliseconds
    arrows: false, // Hide navigation arrows
  };

  return (
    <div className="container mt-5">
      {/* Carousel Section */}
      <div style={{ position: "relative" }}>
        <Slider {...settings} className="mb-5">
          {/* Slide 1 */}
          <div>
            <img
              src="\src\assets\greg-pappas-rUc9hVE-L-E-unsplash.jpg"
              alt="Slide 1"
              className="carousel-image" // Add a class for custom CSS
            />
          </div>

          {/* Slide 2 */}
          <div>
            <img
              src="\src\assets\fernando-cferdophotography-6x2iKGi6SPU-unsplash.jpg"
              alt="Slide 2"
              className="carousel-image" // Add a class for custom CSS
            />
          </div>

          {/* Slide 3 */}
          <div>
            <img
              src="/src/assets/national-cancer-institute-NFvdKIhxYlU-unsplash.jpg"
              alt="Slide 3"
              className="carousel-image" // Add a class for custom CSS
            />
          </div>

          {/* Slide 4 */}
          <div>
            <img
              src="\src\assets\pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg"
              alt="Slide 4"
              className="carousel-image" // Add a class for custom CSS
            />
          </div>

          {/* Slide 5 */}
          <div>
            <img
              src="\src\assets\lily-banse--YHSwy6uqvk-unsplash.jpg"
              alt="Slide 5"
              className="carousel-image" // Add a class for custom CSS
            />
          </div>

          {/* Slide 6 */}
          <div>
            <img
              src="\src\assets\anh-nguyen-fdXnVBurIvU-unsplash.jpg"
              alt="Slide 6"
              className="carousel-image" // Add a class for custom CSS
            />
          </div>
        </Slider>

        {/* Typing Text Animation */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
            zIndex: 1,
          }}
        >
          <TypingText />
        </div>
      </div>

      {/* Jumbotron Section */}
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to Medlytics</h1>
        <p className="lead">Empowering Health Choices for a Vibrant Life</p>
        <hr className="my-4" />
        <p>Your Trusted Partner in Health and Wellness</p>
        <a className="btn btn-primary btn-lg" href="/services" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Home;