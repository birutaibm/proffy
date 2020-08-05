import React from 'react';

import { Container } from './styles';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<Props> = ({ name, label, options, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <select id={name} value="" {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
}

export default Select;