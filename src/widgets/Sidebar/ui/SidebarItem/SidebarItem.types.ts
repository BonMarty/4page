import { ReactElement } from 'react';

export type SidebarItemProps = {
  isActive?: boolean;
  svg: ReactElement;
  title: string;
};
