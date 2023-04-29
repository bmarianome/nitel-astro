import type { ReactNode } from "react"
import { m, LazyMotion, domAnimation } from "framer-motion"

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function TituloAnimado(props: Props) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={props.className}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: .5, ease: 'linear' }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        {props.children}
      </m.div>
    </LazyMotion>
  )
}