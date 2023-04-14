import { useRef } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactElement
}

export default function Drag({ children }: Props) {
  const constraintsRef = useRef(null);

  return (
    <motion.div ref={constraintsRef}>
      <motion.div drag dragConstraints={constraintsRef} className="relative">
        {children}
      </motion.div>
    </motion.div>
  );
};
