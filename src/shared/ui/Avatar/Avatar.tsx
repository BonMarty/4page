import { FC } from 'react';
import avatarSrc from './assets/avatar.png';

const Avatar: FC = () => {
  return (
    <div className="relative w-fit">
      <img src={avatarSrc} alt="avatar" className="rounded-full" />
      <span className="block w-3 h-3 bg-[#ED2E2E] rounded-full absolute top-0 right-0 border border-white" />
    </div>
  );
};

export default Avatar;
