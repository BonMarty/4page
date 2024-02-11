import { FC } from 'react';
import { ToggleProps } from './Toggle.types';

const Toggle: FC<ToggleProps> = ({ checked, onChange }) => {
  return (
    <input
      checked={checked}
      onChange={onChange}
      type="checkbox"
      className="appearance-none cursor-pointer w-12 h-6 rounded-full relative transition-all duration-300 before:absolute before:w-6 before:h-6 before:bg-white before:rounded-full before:border-2 before:border-[#9FC0FB] before:transition-all before:duration-300 before:top-0 before:left-0 bg-[#9FC0FB] checked:bg-[#0E62F5] checked:before:border-[#0E62F5] checked:before:left-6"
    />
  );
};

export default Toggle;
