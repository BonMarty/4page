import { FC } from 'react';
import { Typography } from '../../../../shared/ui';
import { SidebarItemProps } from './SidebarItem.types';

const SidebarItem: FC<SidebarItemProps> = ({ isActive, svg, title }) => {
  if (isActive) {
    return (
      <li className="w-full bg-[#0E62F5] text-white flex items-center gap-2 rounded-xl p-3 cursor-pointer">
        {svg}
        <Typography variant="p" size="base" weight="medium">
          {title}
        </Typography>
      </li>
    );
  }

  return (
    <li className="w-full text-black flex items-center gap-2 rounded-xl p-3 cursor-pointer">
      {svg}
      <Typography variant="p" size="base" weight="medium">
        {title}
      </Typography>
    </li>
  );
};

export default SidebarItem;
