import React, { useRef, InputHTMLAttributes } from 'react';
import { Conteiner, Label } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  description: string;
}

const Input: React.FC<InputProps> = ({ description, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Conteiner>
      <Label>{description}</Label>
      <input ref={inputRef} {...rest} />
    </Conteiner>
  );
};

export default Input;
