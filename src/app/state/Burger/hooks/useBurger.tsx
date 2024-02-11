import { useContext } from 'react';
import { BurgerContext } from '../context/BurgerContext';

const useBurger = () => {
  const { isActiveBurger, setIsActiveBurger } = useContext(BurgerContext);

  return {
    isActiveBurger,
    setIsActiveBurger,
  };
};

export default useBurger;
