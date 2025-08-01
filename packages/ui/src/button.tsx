'use client';

import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  className,
  appName,
  onClick,
  type = 'button',
}: ButtonProps) => {
  const handleClick =
    onClick || (() => alert(`Hello from your ${appName} app!`));

  return (
    <button type={type} className={className} onClick={handleClick}>
      {children}
    </button>
  );
};
