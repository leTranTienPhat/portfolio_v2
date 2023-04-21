import { motion, AnimatePresence } from "framer-motion"

type Props = {
  children: React.ReactElement
  index: number
  variants: any
  className?: string
}

export default function AnimatedPage({ children, index, variants, className }: Props) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={index}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}