import React from "react";
import japanImage from "../../assets/images/japan.jpg";
import Navbar from "../../components/Layout/Navbar";

function Landing() {
  return (
    <>
      <div
        className="heroSection relative w-full h-screen bg-cover bg-center p-5"
        style={{ backgroundImage: `url(${japanImage})` }}
      >
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <Navbar />
        <h1 className="text-9xl font-bold text-white text-center absolute top-1/3 z-20">
          Welcome to Japan
        </h1>
        <p className="text-lg text-white absolute top-1/2 z-20 right-[70%] mt-5 ml-5">
          Discover the Land of the Rising Sun on your next adventure. From the bustling streets of Tokyo to the serene temples of Kyoto, Japan offers a unique blend of tradition and modernity. Explore the rich culture, savor the delicious cuisine, and immerse yourself in the breathtaking landscapes that make Japan a must-visit destination.
        </p>
      </div>
    </>
  );
}

export default Landing;
