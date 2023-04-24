
import { useStore } from '@nanostores/react';
import { isCartOpen } from '../SlideState';

const VerAreasButton = () => {

  const isOpen = useStore(isCartOpen);
  
  return (
    <button id='VerAreasButton'
      className="text-sm font-semibold leading-6 text-white hover:underline translate-x-[-100px] opacity-0"
      onClick={() => {
        isCartOpen.set(!isOpen)
      }}
    >
      Ver áreas de cobertura 
      <span aria-hidden="true"> →</span>
    </button>
  );
}

export default VerAreasButton;