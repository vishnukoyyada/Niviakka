import "./Home.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Marquee from "../../components/Marquee/Marquee";
import mainImage1 from "../../assets/sampleData/mainmage.jpg";
import mainImage2 from "../../assets/sampleData/mainimage2.jpg";
import mainImage3 from "../../assets/sampleData/3.jpg";
import mainImage4 from "../../assets/sampleData/4.jpg"
import mainImage5 from "../../assets/sampleData/5.jpg";
import mainImage6 from "../../assets/sampleData/6.jpg";
import mainImage7 from "../../assets/sampleData/7.jpg";
import mainImage8 from "../../assets/sampleData/8.jpg";
import mainImage9 from "../../assets/sampleData/9.jpg";
import mainImage10 from "../../assets/sampleData/10.jpg";

// Add more image imports as needed

const transition = { duration: 0.65, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = () => {
  const images = [mainImage1, mainImage2, mainImage3,mainImage4,mainImage5,mainImage3,mainImage6,mainImage7,mainImage8,mainImage9,mainImage10]; // Add more images here

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Change transition speed here (1000ms = 1s)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="main-wrapper h-screen w-screen flex flex-col justify-center items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute top-0 mt-12 text-center"
      >
        <span>"From the Heaven, My dearest, charming, and beautiful princess,luminous pearl my precious akka..."</span>

        <p>Niveditha</p>
      </motion.div>

      {/* Main Image */}
      <Link
        className="w-48 md:w-72 overflow-hidden rounded-xl md:hidden"
        to={"/judy"}
        onClick={(e) => e.preventDefault()} // Prevent navigation on image click
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={transition}
          src={images[currentImageIndex]}
          alt="Birthday person"
          className="select-none cursor-pointer rounded-xl"
          style={{ width: "600px", height: "auto" }} // Adjust the size of the image
        />
      </Link>

      {/* Let's Start Button */}
      <motion.div className="absolute bottom-0 mb-12 text-center w-full">
        <Link className="inline-block rounded-xl bg-blue-500 text-white py-2 px-4 mt-4" to={"/judy"}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={transition}
            className="select-none cursor-pointer"
          >
            Let's Start
          </motion.button>
        </Link>
      </motion.div>

      {/* Marquee */}
      <Marquee transition={{ ...transition }} message="Happy Birthday." small={false} />
    </main>
  );
};

export default Home;
