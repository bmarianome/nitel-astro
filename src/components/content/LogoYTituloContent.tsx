import type { ReactNode } from "react";
import LogoAnimado from "./LogoAnimado";
import { isCartOpen } from "../SlideState";
import { useStore } from "@nanostores/react";

const LogoYTituloContent = ({ children }: { children: ReactNode }) => {

  const isOpen = useStore(isCartOpen);
  
  return (
    // IF ISOPEN OPACITY 0, ALSO LG: OPACITY 100 ALWAYS
    <div className={`${isOpen ? "opacity-0" : "opacity-100"} duration-200 lg:opacity-100`}>
      <LogoAnimado>
        {children}
      </LogoAnimado>

      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-6 lg:mt-8">
        Contáctate y nosotros te asesoramos para que tengas el plan que necesitas
      </h2>

    </div>
  );
}

export default LogoYTituloContent;