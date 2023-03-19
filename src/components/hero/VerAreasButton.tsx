import type { ReactNode } from "react"
import { motion } from "framer-motion"

type Props = {

}

export default function VerAreasButton(props: Props) {
  return (
    <motion.a
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .25, delay: .375 }}
      href="#AreasDeCobertura"
      className="text-sm font-semibold leading-6 text-white hover:underline"
    >
      Ver áreas de cobertura 
      <span aria-hidden="true"> →</span>
    </motion.a>
  )
}