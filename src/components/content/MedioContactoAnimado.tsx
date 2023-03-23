import type { ReactNode } from "react"
import { m, LazyMotion, domAnimation } from "framer-motion"

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function MedioDeContactoAnimado(props: Props) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={props.className}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: .5, ease: 'easeOut', delay: props.delay }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        {props.children}
      </m.div>
    </LazyMotion>

  )
}