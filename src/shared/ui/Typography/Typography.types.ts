import { ReactNode } from 'react';

export type TypographyProps = {
  variant: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'sm' | 'base' | 'xl' | '3xl';
  weight?: 'normal' | 'medium' | 'bold' | 'extrabold';
  className?: string;
  children: ReactNode;
};
