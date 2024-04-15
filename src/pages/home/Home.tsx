
import "./Home.css";
import mainImage from "../../assets/main-image.webp";
import additionalImage from "../../assets/additional-image.webp";
import Marquee from "../../components/Marquee/Marquee";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const transition = { duration: 0.65, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = () => {
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
          src={mainImage}
          alt="Birthday person"
          className="select-none cursor-pointer rounded-xl"
          style={{ width: "300px", height: "auto" }} // Adjust the size of the image
        />
      </Link>

      {/* Additional Image */}
      <Link
        className="w-48 md:w-72 overflow-hidden rounded-xl hidden md:block"
        to={"/judy"}
        onClick={(e) => e.preventDefault()} // Prevent navigation on image click
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={transition}
          src={additionalImage} // Add additional image
          alt="Additional Image"
          className="select-none cursor-pointer rounded-xl"
          style={{ width: "300px", height: "auto" }} // Adjust the size of the image
        />
      </Link>

      {/* Let's Start Button */}
      <motion.div
        className="absolute bottom-0 mb-12 text-center w-full"
      >
        <Link
          className="inline-block rounded-xl bg-blue-500 text-white py-2 px-4 mt-4"
          to={"/judy"}
        >
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
      <Marquee
        transition={{ ...transition }}
        message="Happy Birthday."
        small={false}
      />

      {/* Date and Time */}
     
    </main>
  );
};

export default Home;
