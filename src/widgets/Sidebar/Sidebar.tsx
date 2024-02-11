import { FC } from 'react';
import { BurgerState } from '../../app/state';
import { Logo } from '../../shared/ui';
import DevicesSvg from './assets/devices.svg?react';
import ReportsSvg from './assets/reports.svg?react';
import TariffsSvg from './assets/tariffs.svg?react';
import { SidebarItem } from './ui';

const Sidebar: FC = () => {
  const { isActiveBurger } = BurgerState.useBurger();

  return (
    <nav
      className={`fixed p-8 top-0 left-0 z-10 bg-white w-screen md:w-1/3 lg:w-1/4 xl:w-1/5 h-screen border-r-2 border-[#F2F2F2] flex flex-col gap-9 md:-translate-x-0 transition-all duration-500 ${
        isActiveBurger ? '-translate-x-0' : '-translate-x-full'
      }`}>
      <Logo />
      <ul>
        <SidebarItem isActive svg={<DevicesSvg />} title="Устройства" />
        <SidebarItem svg={<TariffsSvg />} title="Тарифы" />
        <SidebarItem svg={<ReportsSvg />} title="Отчеты" />
      </ul>
    </nav>
  );
};

export default Sidebar;
