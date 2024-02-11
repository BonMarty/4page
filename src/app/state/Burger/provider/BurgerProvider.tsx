import { ReactNode, useState } from 'react';
import { BurgerContext } from '../context/BurgerContext';

const BurgerProvider = ({ children }: { children: ReactNode }) => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  return (
    <BurgerContext.Provider
      value={{
        isActiveBurger,
        setIsActiveBurger,
      }}>
      {children}
    </BurgerContext.Provider>
  );
};

export default BurgerProvider;
