import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface Props {
  isClient: boolean;
}

export const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem 2rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  max-width: 28rem;

  img {
    width: 2.5rem;
    margin-right: 1.5rem;
  }

  p {
    font-size: 2.25rem;
    /* color: #3a3a3a; */
    line-height: 3.5rem;
  }

  @media (max-width: 420px) {
    img {
      width: 2.5rem;
    }

    p {
      font-size: 2rem;
      /* color: #3a3a3a; */
      line-height: 2rem;
    }
  }

  @media (max-width: 350px) {
    img {
      width: 2rem;
    }

    p {
      font-size: 1.5rem;
      /* color: #3a3a3a; */
    }
  }
`;

export const CheckClient = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;

  input {
    width: 2rem;
    height: 1.5rem;
  }

  label {
    margin: 0 3rem 0 1rem;
  }

  @media (max-width: 420px) {
    input {
    width: 1.5rem;
    height: 1rem;
  }

    label {
      margin: 0 1.5rem 0 0.7rem;
    }
  }

  @media (max-width: 360px) {
    label {
      margin: 0 0.5rem 0 0.5rem;
      font-size: 0.9rem
    }
  }
`;


export const Form = styled.form`
  margin-top: 2rem;
  max-width: 43rem;

  div {
    display: flex;
    margin-bottom: 1rem;

    input {
      flex: 1;
      height: 4rem;
      padding: 0 1.5rem;
      border: 0;
      border-radius: 5px 0 0 5px;
      color: #3a3a3a;
      border: 2px solid #fff;
      border-right: 0;

      &::placeholder {
        color: #a8a8b3;
      }
    }

    button {
      width: 13rem;
      height: 4rem;
      background: #04d361;
      border-radius: 0 5px 5px 0;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#04d361')};
      }
    }
  }
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
      font-size: 1.5rem;
    }

  select {
    margin-top: 0.5rem;
    height: 3rem;
    padding: 0 1.5rem;
    border-radius: 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    width: 100%;
    font-size: 1rem;
  }
`;

export const SearchButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  max-width: 40rem;

  button {
    width: 13rem;
    height: 4rem;
    background: #017da2;
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#017da2')};
    }

    & + button {
      background: #04d361;
      &:hover{
        background: ${shade(0.2, '#04d361')};
      }
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
`;


export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 0.5rem;
`;
