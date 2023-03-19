import type { ReactNode } from "react"
import { motion } from "framer-motion"

type Props = {
  delay?: number
  duration?: number
  children: ReactNode
  className?: string
}

export default function IconoAnimado(props: Props) {
  return (
    <motion.div
      className={props.className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5, delay: props.delay }}
    >
      {props.children}
    </motion.div>
  )
}