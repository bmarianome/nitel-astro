import type { ReactNode } from "react";
import { motion, m, LazyMotion, domAnimation } from "framer-motion"


const LogoAnimado = ({ children }: { children: ReactNode }) => {
  
  return (
    <motion.div
      // className={}
      // transition={{ duration: 0.1 }}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        scale: [.5, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default LogoAnimado;