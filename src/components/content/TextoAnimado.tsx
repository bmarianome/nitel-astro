import type { ReactNode } from "react"
import { motion } from "framer-motion"

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function TextoAnimado(props: Props) {
  return (
    <motion.div
      className={props.className}
      initial={{ opacity: 0 }}
      transition={{ duration: .5, ease: 'easeOut', delay: props.delay }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      {props.children}
    </motion.div>
  )
}