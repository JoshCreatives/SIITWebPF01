import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const PresidentBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -50px 0px" });

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [lastInView, setLastInView] = useState(false);

  useEffect(() => {
    if (isInView && !lastInView) {
      setShouldAnimate(true);
    }
    if (!isInView) {
      setShouldAnimate(false);
    }
    setLastInView(isInView);
  }, [isInView, lastInView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full h-auto flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-[400px] md:h-[600px]">
        <img
          src="./p15.png"
          alt="School President with Students"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section (Animated) */}
      <div
        ref={ref}
        className="w-full md:w-1/2 h-auto md:h-[600px] bg-green-700 flex flex-col justify-center p-8 md:p-16 text-center md:text-left"
      >
        <motion.span
          className="text-yellow-300 text-4xl md:text-6xl font-semibold uppercase"
          variants={textVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          SCHOOL
        </motion.span>

        <motion.h2
          className="text-white text-6xl md:text-9xl font-bold italic mt-2"
          variants={textVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          PRESIDENT
        </motion.h2>

        <motion.p
          className="text-white text-2xl md:text-5xl mt-2"
          variants={textVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          ATTY. FRANCISCO 'LALO' MATUGAS
        </motion.p>

        <motion.a
          href="/about/president"
          className="mt-6 md:mt-8 bg-yellow-300 text-green-800 px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl font-bold hover:bg-yellow-400 transition-all w-fit mx-auto md:mx-0"
          variants={textVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        >
          Learn More
        </motion.a>
      </div>
    </div>
  );
};

export default PresidentBanner;
