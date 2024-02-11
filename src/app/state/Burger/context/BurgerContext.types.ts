import { Dispatch, SetStateAction } from 'react';

export type BurgerContextProps = {
  isActiveBurger: boolean;
  setIsActiveBurger: Dispatch<SetStateAction<boolean>>;
};
