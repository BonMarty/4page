import { Avatar, Heading, Timer } from '../../shared/ui';
import { Burger } from './ui';

const Header = () => {
  return (
    <header className="md:ml-[calc(33.333333%)] lg:ml-[calc(25%)] xl:ml-[calc(20%)] px-6">
      <div className="md:border-b-2 md:border-[#F2F2F2] w-full flex justify-between md:justify-end items-center md:gap-16 py-6">
        <div className="flex md:hidden">
          <Heading>Устройства</Heading>
        </div>
        <div className="hidden md:block">
          <Timer />
        </div>
        <Avatar />
        <Burger />
      </div>
    </header>
  );
};

export default Header;
