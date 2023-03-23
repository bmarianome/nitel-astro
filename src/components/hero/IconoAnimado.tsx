import type { ReactNode } from "react"
import { m, domAnimation, LazyMotion } from "framer-motion"

type Props = {
  delay?: number
  duration?: number
  children: ReactNode
  className?: string
}

export default function IconoAnimado(props: Props) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={props.className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .5 }}
      >
        {props.children}
      </m.div>
    </LazyMotion>
  )
}