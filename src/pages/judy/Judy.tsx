import "./Judy.css";
import Marquee from "../../components/Marquee/Marquee";
import mainImage1 from "../../assets/sampleData/1.jpg";
import mainImage2 from "../../assets/sampleData/2.jpg";
import mainImage3 from "../../assets/sampleData/3.jpg";
import mainImage4 from "../../assets/sampleData/4.jpg";
import mainImage5 from "../../assets/sampleData/5.jpg";
import mainImage6 from "../../assets/sampleData/6.jpg";
import mainImage7 from "../../assets/sampleData/7.jpg";
import mainImage8 from "../../assets/sampleData/8.jpg";
import mainImage9 from "../../assets/sampleData/9.jpg";
import mainImage10 from "../../assets/sampleData/10.jpg";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

const images = [
  mainImage1,
  mainImage2,
  mainImage3,
  mainImage4,
  mainImage5,
  mainImage6,
  mainImage7,
  mainImage8,
  mainImage9,
  mainImage10,
];

const Judy = () => {
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
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      className="main-wrapper h-screen w-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
        className="absolute h-full w-full"
      >
        <motion.img
          src={images[currentImageIndex]}
          alt="Birthday person"
          className="select-none rounded-xl h-full object-cover"
          style={{ objectPosition: "50% 35%" }}
          transition={transition}
        />
      </motion.div>

      {/* Wishes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
        className="absolute top-0 left-32 mt-12 text-center hidden md:flex flex-col justify-around h-32 "
      >
        <p className="text-xl">Please accept wishes from all of us.</p>
        <div className="flex flex-col text-left">
          <Link to={"/wishes"} className="hover:underline">
            Our Wishes
          </Link>
        </div>
      </motion.div>

      {/* Marquee for Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
        className="absolute top-0 mt-12 text-center md:hidden w-full"
      >
        <Marquee
          transition={{ ...transition }}
          message="Niveditha."
          small={true}
        />
      </motion.div>

      {/* Wishes for Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
        className="absolute bottom-0 mb-12 text-center md:hidden w-full underline flex flex-col"
      >
        <Link to={"/wishes"}>Our Wishes</Link>
      </motion.div>

      {/* Marquee */}
      <Marquee
        transition={{ ...transition }}
        message="Happy Birthday."
        small={false}
      />
    </motion.main>
  );
};

export default Judy;
