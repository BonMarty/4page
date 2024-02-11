import { FC } from 'react';
import { Typography } from '..';
import { HeadingProps } from './Heading.types';

const Heading: FC<HeadingProps> = ({ children, className }) => {
  return (
    <div className={`flex items-stretch gap-2 font-extrabold ${className ? className : ''}`}>
      <span className="block w-3 bg-[#0E62F5]" />
      <Typography variant="h1" weight="extrabold" className="text-base md:text-3xl uppercase">
        {children}
      </Typography>
    </div>
  );
};

export default Heading;
