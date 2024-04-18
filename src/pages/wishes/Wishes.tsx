import "./Wishes.css";

import { useNavigate, useParams } from "react-router-dom";

import { motion } from "framer-motion";
import { usePalette } from "@roylee1997/react-palette";

import Progress from "../../components/Progress/Progress";
import MusicCard from "../../components/MusicCard/MusicCard";
import TMessagesData from "../../typings/MessagesData";

// albumArts
import vishnuimage from "../../assets/sampleData/vishnu.jpg";
import hariimage from "../../assets/sampleData/hari.jpg";
import suhasimage from "../../assets/sampleData/suhas.jpg";
import himajaimage from "../../assets/sampleData/4.jpg";
import krushaimage from "../../assets/sampleData/krusa.jpg";
import inshaimage from "../../assets/sampleData/insa.jpg";
import kaivalyaimage from "../../assets/sampleData/kaivalya.jpg";


// musicFilePaths
import firstMusic from "../../assets/sampleData/music/chinni.mp3";
import secondMusic from "../../assets/sampleData/music/almost-nothing.mp3";

// framer transition and variants
const commonTransition = {
  ease: [0.43, 0.13, 0.23, 0.96],
  duration: 0.5,
};

const messageContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
      duration: 0.5,
    },
  },
};

const messages = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

/* Each message must have music details (can be fetched through an API) with Album Art to be must) and message itself in multiple p tags (if possible) */
// Sample Data
const sampleMessagesDataArray: TMessagesData[] = [
  {
    albumArt: vishnuimage,
    musicName: "Chinnichinni  aasa",
    messageInParas: [
      "Hello Akka it's your birthday! Wishing you the happiest of birthdays filled with all the things you love and cherish the most.",
      "May this year be filled with lots of laughter, love, and unforgettable memories. I hope you get to spend your special day surrounded by the people you care about, doing all the things that make you happy.",
      "Whether it's eating cake, opening presents, or just chilling out, I hope you have the best time ever. Here's to another year of being awesome, slaying the game, and living your best life.",
      "You're a true gem, Akka, and I feel lucky to know you. Happy birthday and cheers to a fantastic year ahead!",
      "Warm regards",
      "vishnu",
    ],
    musicFilePath: firstMusic,
  },
  {
    albumArt: hariimage,
    musicName: 'Almost nothing - "Death Stranding" Ending Song',
    messageInParas: [
      "Happy  Birthday Niveditha! On this special day, I hope that all of your dreams come true and that you are surrounded by love and happiness. You are a wonderful person who deserves nothing but the best, and I feel honored to be able to celebrate this special day with you.",
      "As you reflect on the past year and look forward to the next, I hope that you remember all of the amazing things that you have accomplished and the obstacles that you have overcome. Your determination and hard work inspire those around you, and I am grateful to have you in my life.",
      "May this birthday be just the beginning of a happy journey that will lead you to an even more amazing future. Enjoy your day to the fullest, and know that you are loved and appreciated by so many.",
      "Once again, happy birthday, Niveditha! Cheers to another year of laughter, love, and wonderful memories.",
      "Warm regards,",
      "Hari",
    ],
    musicFilePath: secondMusic,
  },
  {
    albumArt: suhasimage,
    musicName: "Night City - R E L's Version",
    messageInParas: [
      "Happy Birthday to the most wonderful girl I know! On this special day, I want to remind you of just how amazing you are.",
      " Your presence lights up every room, and your kindness touches everyone's hearts. May this year be filled with all the love, joy, and success you deserve.",
       "Here's to many more adventures and beautiful memories together. Enjoy your day to the fullest!",
       "Warm regards,",
       "suhas",
    ],
    musicFilePath: firstMusic,
  },
  {
    albumArt: himajaimage,
    musicName: "Night City - R E L's Version",
    messageInParas: [
      "Wishing the happiest of birthdays to a truly remarkable Niveditha! Your strength, grace, and determination inspire me every day. You have a way of making everyone around you feel loved and valued.",
      "I admire your passion for life and your unwavering positivity. May your birthday be as bright and beautiful as you are, and may all your dreams come true. Cheers to another year of being extraordinary!",
      "Warm regards,",
      "Himaja",
    ],
    musicFilePath: firstMusic,
  },
  {
    albumArt: krushaimage,
    musicName: "Night City - R E L's Version",
    messageInParas: [
      "Happy Birthday, my dear friend Niveditha! From the moment we met, I knew you were someone special. Your laughter is infectious, your spirit is contagious, and your friendship means the world to me.",
      "Today, let's celebrate all the wonderful moments we've shared and all the adventures that lie ahead. Here's to another year of laughter, love, and unforgettable memories. Cheers to you, the most amazing Niveditha I know!",
      "Warm regards,",
      "krusaa",
    ],
    musicFilePath: firstMusic,
  },
  {
    albumArt: inshaimage,
    musicName: "Night City - R E L's Version",
    messageInParas: [
      "Sending heartfelt birthday wishes to Niveditha, who brings so much joy and happiness into my life! Your presence is a gift, and I am incredibly grateful to have you in my life.",
      " Thank you for always being there for me, for your unwavering support and encouragement, and for being the incredible person that you are. ",
      "May your birthday be filled with love, laughter, and all the things that make you happiest. Here's to another year of friendship and endless blessings!",
      "Warm regards,",
      "insha",
    ],
    musicFilePath: firstMusic,
  },
  {
    albumArt: kaivalyaimage,
    musicName: "Night City - R E L's Version",
    messageInParas: [
      "Happy Birthday to Niveditha, who is destined for greatness! Your ambition, determination, and drive inspire me to reach for the stars. On your special day, I want to encourage you to chase your dreams fearlessly and embrace all the possibilities that life has to offer.",
      " You are capable of achieving anything you set your mind to, and I believe in you wholeheartedly. ",
      "May this year be filled with exciting opportunities, meaningful experiences, and boundless success. Here's to your brightest future yet!",
      "Warm regards,",
      "kaivalya",
    ],
    musicFilePath: firstMusic,
  },
];

const Wishes = () => {
  const navigate = useNavigate();
  const { id = 0 } = useParams();

  if (Number(id) < 0 || sampleMessagesDataArray[Number(id)] == undefined) {
    return <p>Invalid Wish Message Id</p>;
  }

  const {
    data: colorData,
    loading: colorDataIsLoading,
    error,
  } = usePalette(sampleMessagesDataArray[Number(id)].albumArt);

  if (error) {
    return <h1>Invalid Wish Message Id</h1>;
  }

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      className="wishes-wrapper h-screen w-screen flex flex-col justify-between items-center"
    >
      <Progress
        primaryColor={colorData?.vibrant}
        secondaryColor={colorData?.darkVibrant}
        messageDataArrayLength={sampleMessagesDataArray.length}
      />
      <motion.div
        className="lg:w-11/12 rounded-t-2xl md:rounded-t-xl flex md:flex-row flex-col-reverse"
        style={{
          backgroundColor: colorDataIsLoading ? "#fff" : colorData?.vibrant,
        }}
        initial={{ y: "1000px" }}
        animate={{ y: "0px" }}
        exit={{ y: "1000px" }}
        transition={commonTransition}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={(_, info) => {
          if (info.offset.x > 50) {
            if (Number(id) > 0 && Number(id) < sampleMessagesDataArray.length) {
              navigate(`/wishes/${Number(id) - 1}`);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          } else if (info.offset.x < -50) {
            if (
              Number(id) >= 0 &&
              Number(id) < sampleMessagesDataArray.length - 1
            ) {
              navigate(`/wishes/${Number(id) + 1}`);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          } else {
            console.log(null);
          }
        }}
      >
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          animate="show"
          variants={messageContainer}
        >
          {sampleMessagesDataArray[Number(id)].messageInParas.map(
            (eachPara, index) => {
              return (
                <motion.p
                  className="p-8 message text-3xl"
                  variants={messages}
                  key={index + 2045}
                >
                  {eachPara}
                </motion.p>
              );
            }
          )}
        </motion.div>
        <div className="md:w-1/2 h-1/2 md:h-auto flex justify-center items-center">
          <MusicCard
            albumArt={sampleMessagesDataArray[Number(id)].albumArt}
            primaryColor={colorData?.vibrant}
            musicName={sampleMessagesDataArray[Number(id)].musicName}
            musicFilePath={sampleMessagesDataArray[Number(id)].musicFilePath}
          />
        </div>
      </motion.div>
    </motion.main>
  );
};

export default Wishes;
