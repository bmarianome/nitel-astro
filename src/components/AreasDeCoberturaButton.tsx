
import { useStore } from '@nanostores/react';
import { isCartOpen } from './SlideState';

const AreasDeCoberturaButton = () => {

  const isOpen = useStore(isCartOpen);

  return (
    <button
      onClick={() => isCartOpen.set(!isOpen)}
      className="mt-4 lg:hidden w-full text-black text-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold">
      Ver Áreas de Cobertura
    </button>
  );
}

export default AreasDeCoberturaButton;