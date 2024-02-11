import { FC } from 'react';
import { Typography } from '..';
import ClockSvg from './assets/clock.svg?react';

const Timer: FC = () => {
  return (
    <div className="flex items-center gap-2">
      <ClockSvg />
      <Typography variant="p" size="base" weight="bold">
        15:41
      </Typography>
    </div>
  );
};

export default Timer;
