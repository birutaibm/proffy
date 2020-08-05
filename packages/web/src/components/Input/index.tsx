import React from 'react';

import { Container } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<Props> = ({ name, label, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </Container>
  );
}

export default Input;