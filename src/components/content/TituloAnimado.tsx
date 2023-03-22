import type { ReactNode } from "react"
import { motion } from "framer-motion"

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function TituloAnimado(props: Props) {
  return (
    <motion.div
      className={props.className}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: .5, ease: 'easeOut', delay: props.delay }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      {props.children}
    </motion.div>
  )
}