import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100vw;
  }
`;

export const Form = styled.form`
  margin-top: 3.2rem;

  label {
    color: var(--color-text-in-primary);
  }

  div:not(:first-of-type) {
    margin-top: 1.4rem !important;

    @media (min-width: 700px) {
      margin-top: 0 !important;
    }
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const Content = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    max-width: 740px;
    padding: 3.2rem 0;
    margin: 0 auto;
  }
`;
