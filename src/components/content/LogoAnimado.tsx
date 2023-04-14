import type { ReactNode } from "react";
import { motion, m, LazyMotion, domAnimation } from "framer-motion"

const LogoAnimado = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      // className={}
      transition={{ duration: .5, ease: 'linear' }}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        scale: [.5, 1],
        // rotate: [0, 360],
      }}
    >
      {children}
    </motion.div>
  );
}

export default LogoAnimado;