import { FC, useState } from 'react';
import { Toggle, Typography } from '../../shared/ui';
import { DeviceProps } from './Device.types';
import DeviceSvg from './assets/device-image.svg?react';
import EnergySvg from './assets/energy.svg?react';

const Device: FC<DeviceProps> = ({ title, enegryConsumption }) => {
  const [checked, setChecked] = useState(false);

  return (
    <li
      className={`${
        checked ? 'bg-white' : 'bg-[#D9D9D980] opacity-75'
      } roundex-xl flex flex-col sm:flex-row items-center gap-8 p-5 rounded-xl transition-all duration-300`}>
      <div
        className={`${
          checked ? 'bg-[#0E62F5B2]' : 'bg-[#9D9D9D]'
        } w-fit h-fit rounded-full transition-all duration-300 relative after:absolute after:bottom-0 after:right-0 after:w-6 after:h-6 after:rounded-full after:border-4 after:border-white after:transition-all after:duration-300 ${
          checked ? 'after:bg-[#52C234]' : 'after:bg-[#ED2E2E]'
        }`}>
        <DeviceSvg />
      </div>
      <div>
        <Typography variant="h2" size="xl" weight="normal">
          {title}
        </Typography>
        <div className="flex items-center gap-1">
          <EnergySvg />
          <Typography variant="h3" size="sm" weight="normal">
            {checked ? enegryConsumption : '--'} кВт/ч
          </Typography>
        </div>
      </div>
      <Toggle checked={checked} onChange={() => setChecked(!checked)} />
    </li>
  );
};

export default Device;
