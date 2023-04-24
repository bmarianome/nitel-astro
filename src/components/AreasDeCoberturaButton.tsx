
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { isCartOpen } from './SlideState';

const AreasDeCoberturaButton = () => {

  const isOpen = useStore(isCartOpen);

  return (
    <>
      <div className=" mt-4 lg:hidden flex items-center justify-center gap-x-6 lg:justify-start">
        <button
          onClick={() => {
            isCartOpen.set(!isOpen)
          }}
          className="w-full text-black text-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:text-lg">
          Ver Áreas de Cobertura
        </button>
      </div>
    </>
  );
}

export default AreasDeCoberturaButton;