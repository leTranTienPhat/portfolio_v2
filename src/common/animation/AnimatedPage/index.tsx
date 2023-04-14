import { motion, AnimatePresence } from "framer-motion"

type Props = {
  children: React.ReactElement
  index: number
  variants: any
}

export default function AnimatedPage({ children, index, variants }: Props) {
  console.log(index)
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={index}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}