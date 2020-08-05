import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  label {
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }


  &:not(:first-of-type) {
    margin-top: 0;

    @media (min-width: 700px) {
      margin-top: 1.4rem;
    }
  }

  &:focus-within::after {
    position: absolute;
    bottom: 0;
    left: 1.6rem;
    right: 1.6rem;
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: var(--color-primary-light);
  }
`;
