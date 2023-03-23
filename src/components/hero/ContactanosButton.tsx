import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { m, domAnimation, LazyMotion } from "framer-motion"

type Props = {

}

export default function ContactanosButton(props: Props) {
  return (
    <LazyMotion features={domAnimation}>
      <m.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .5, delay: undefined }}
        href="https://wa.me/+543516472777/?text=Hola, quiero realizar una consulta" 
        className="relative z-10 gradient w-max rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
      >
        Contactanos
      </m.a>
    </LazyMotion>
  )
}