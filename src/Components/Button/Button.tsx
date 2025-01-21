import React from 'react';
import clsx from 'clsx';
import { Button } from '../ui/button';

interface ButtonProps {
    text: string;
    color?:string;
    padding?: string;
}

export default function ButtonComponent({text, color ="blue", padding ="px3 py-2"}: ButtonProps) {
  return (
    <button 
    className={clsx(
      `absolute rounded text-white hover:opacity-90 transition duration-200`,
      `bg-${color}-500`, // Dynamic color
      padding // Direct padding
    )}
    >
        {text}
    </button>
  );
}
