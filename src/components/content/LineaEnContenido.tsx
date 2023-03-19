import type { ReactNode } from "react"
import { motion } from "framer-motion"

type Props = {
  delay?: number
  duration?: number
}

export default function LineaEnContenido(props: Props) {
  return (
    <motion.div
      className="inline-block absolute top-0 left-0 w-[1px] bg-white"
      initial={{ height: "0%" }}
      whileInView={{ height: '100%' }}
      transition={{ duration: props.duration, ease: 'easeOut', delay: props.delay }}
      viewport={{ once: true }}
    >
    </motion.div>
  )
}