import type { ReactNode } from "react"
import { motion } from "framer-motion"

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function MedioDeContactoAnimado(props: Props) {
  return (
    <motion.div
      className={props.className}
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: .5, ease: 'easeOut', delay: props.delay }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      {props.children}
    </motion.div>
  )
}