import { useState } from "react";
import LineaEnContenido from "./content/LineaEnContenido";
import TituloAnimado from "./content/TituloAnimado";

const AreasDeCoberturaButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="mt-4 lg:hidden flex items-center justify-center gap-x-6 lg:justify-start">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-black text-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:text-lg">
          Ver Áreas de Cobertura
        </button>
          <div
            className={`bg-gray-900 absolute w-screen px-6 pb-16 pt-12 sm:pb-32 lg:py-16 lg:px-8 lg:inline-block
              ${isOpen ? "translate-y-0" : "-translate-y-full"} duration-200 top-0
            `}
            id="AreasDeCobertura"
          >
            <div>
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <TituloAnimado delay={0.3}>
                    <h2 className="text-3xl font-bold tracking-tight text-white">Áreas de cobertura</h2>
                  </TituloAnimado>
                </div>
                <div className="mx-auto mt-8 sm:mt-16 grid max-w-2xl grid-cols-2 gap-8 text-base leading-7 sm:gap-y-16 lg:mx-0 lg:max-w-none">
                  <div>
                    <h3 className="pl-6 font-semibold text-white relative">
                      Zona Sur
                      <span className="inline-block absolute top-0 left-0 h-full w-[1px] gradient"></span>
                    </h3>
                    <address className="pt-2 pl-6 not-italic text-gray-500 relative">
                      <LineaEnContenido duration={1} />

                      <p>Los Cedros</p>
                      <p>Villa Rivadavia</p>
                      <p>Ruta N°5</p>
                      <p>Ferreyra</p>
                      <p>Manantiales</p>
                      <p>Ruta N°19</p>
                      <p>Distrito Sur</p>
                    </address>
                  </div>
                  <div>
                    <h3 className="pl-6 font-semibold text-white relative">
                      Zona Norte
                      <span className="inline-block absolute top-0 left-0 h-full w-[1px] gradient"></span>
                    </h3>
                    <address className="pt-2 pl-6 not-italic text-gray-500 relative">
                      <LineaEnContenido duration={2} />

                      <p>Salsipuedes</p>
                      <p>Rio Ceballos</p>
                      <p>Villa Silvina</p>
                      <p>Unquillo</p>
                      <p>Mendiolaza</p>
                      <p>Villa Allende</p>
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default AreasDeCoberturaButton;