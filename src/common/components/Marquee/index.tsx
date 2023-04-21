import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: [0, -2550],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear",
      },
    },
  },
};

export default function Marquee() {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="text-[60px] font-bold text-white whitespace-nowrap uppercase"
        variants={marqueeVariants}
        animate="animate"
      >
        <p>
          💻 FRONT-END WEB DEVELOPER 💻 FRONT-END WEB DEVELOPER 💻 FRONT-END WEB DEVELOPER 💻 FRONT-END WEB DEVELOPER
        </p>
      </motion.div>
    </div>
  );
};
