
import { useStore } from '@nanostores/react';
import { isCartOpen } from '../SlideState';

const VerAreasButton = () => {

  const isOpen = useStore(isCartOpen);

  function OpenAreasDeCobertura() {
    setTimeout(() => {
      isCartOpen.set(!isOpen)
    }, 250);
    const element = document.getElementById('AreasDeCobertura');
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  return (
    <button
      id='VerAreasButton'
      className="text-sm font-semibold leading-6 text-white hover:underline translate-x-[-100px] opacity-0"
      onClick={() => OpenAreasDeCobertura()}
    >
      Ver áreas de cobertura
      <span aria-hidden="true"> →</span>
    </button>
  );
}

export default VerAreasButton;