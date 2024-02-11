import { FC } from 'react';
import { BurgerState } from '../../../../app/state';

const Burger: FC = () => {
  const { isActiveBurger, setIsActiveBurger } = BurgerState.useBurger();

  return (
    <button
      className="md:hidden w-6 h-4 relative flex flex-col justify-between items-center z-20"
      onClick={() => setIsActiveBurger(!isActiveBurger)}>
      <span
        className={`block w-full h-1 bg-black rounded-full transition-all duration-300 ${
          isActiveBurger ? 'rotate-45 translate-y-1.5' : ''
        }`}
      />
      <span
        className={`block w-full h-1 bg-black rounded-full transition-all duration-300 ${
          isActiveBurger ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`block w-full h-1 bg-black rounded-full transition-all duration-300 ${
          isActiveBurger ? '-rotate-45 -translate-y-1.5' : ''
        }`}
      />
    </button>
  );
};

export default Burger;
