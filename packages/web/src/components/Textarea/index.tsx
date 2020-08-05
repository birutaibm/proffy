import React from 'react';

import { Container } from './styles';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<Props> = ({ name, label, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </Container>
  );
}

export default Textarea;