import { FC } from 'react';
import { Device } from '../../entities';
import { Heading } from '../../shared/ui';
import { Header, Sidebar } from '../../widgets';

const Home: FC = () => {
  return (
    <>
      <Header />
      <main className="relative">
        <Sidebar />
        <section className="md:ml-[calc(33.333333%)] lg:ml-[calc(25%)] xl:ml-[calc(20%)] p-6 flex flex-col gap-7 bg-[#F2F2F2] md:bg-white">
          <Heading className="hidden md:flex">Устройства</Heading>
          <ul className="md:bg-[#F2F2F2] rounded-xl md:p-8 w-fit grid mx-auto md:mx-0 grid-cols-1 lg:grid-cols-2 gap-8">
            <Device title="Устройство #1" enegryConsumption={13.3} />
            <Device title="Устройство #1" enegryConsumption={13.3} />
            <Device title="Устройство #1" enegryConsumption={13.3} />
            <Device title="Устройство #1" enegryConsumption={13.3} />
            <Device title="Устройство #1" enegryConsumption={13.3} />
            <Device title="Устройство #1" enegryConsumption={13.3} />
            <Device title="Устройство #1" enegryConsumption={13.3} />
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;
