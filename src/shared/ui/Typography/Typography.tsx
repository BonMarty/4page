import { FC } from 'react';
import { TypographyProps } from './Typography.types';

const Typography: FC<TypographyProps> = ({ variant, size, weight, children, className }) => {
  if (variant === 'p')
    return (
      <p
        className={`${size ? `text-${size}` : ''} ${weight ? `font-${weight}` : ''} ${
          className ? className : ''
        }`}>
        {children}
      </p>
    );

  if (variant === 'h1')
    return (
      <h1
        className={`${size ? `text-${size}` : ''} ${weight ? `font-${weight}` : ''} ${
          className ? className : ''
        }`}>
        {children}
      </h1>
    );

  if (variant === 'h2')
    return (
      <h2
        className={`${size ? `text-${size}` : ''} ${weight ? `font-${weight}` : ''} ${
          className ? className : ''
        }`}>
        {children}
      </h2>
    );

  if (variant === 'h3')
    return (
      <h3
        className={`${size ? `text-${size}` : ''} ${weight ? `font-${weight}` : ''} ${
          className ? className : ''
        }`}>
        {children}
      </h3>
    );

  if (variant === 'h4')
    return (
      <h4
        className={`${size ? `text-${size}` : ''} ${weight ? `font-${weight}` : ''} ${
          className ? className : ''
        }`}>
        {children}
      </h4>
    );

  if (variant === 'h5')
    return (
      <h5
        className={`${size ? `text-${size}` : ''} ${weight ? `font-${weight}` : ''} ${
          className ? className : ''
        }`}>
        {children}
      </h5>
    );

  if (variant === 'h6')
    return (
      <h6
        className={`${size ? `text-${size}` : ''} ${weight ? `font-${weight}` : ''} ${
          className ? className : ''
        }`}>
        {children}
      </h6>
    );
};

export default Typography;
