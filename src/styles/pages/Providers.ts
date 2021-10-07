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

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 2.5rem;
    margin-right: 1.5rem;
  }

  p {
    font-size: 2.25rem;
    line-height: 3.5rem;
  }

  a {
    font-size: 1.25rem;
    font-weight: bold;
    text-decoration: none;
    color: #383a59;

    &:hover {
      color: #8257e6;
    }
  }

  @media (max-width: 420px) {
    img {
      width: 2.5rem;
    }

    p {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  @media (max-width: 350px) {
    img {
      width: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

export const ProviderInfo = styled.section`
  margin-top: 2rem;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 1rem;
    /* display: block; */
    text-decoration: none;

    display: flex;
    /* flex-direction: column; */
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    div {
      align-items: center;
      flex: 1;

      span {
        font-size: 1.1rem;
        color: #a8a8b3;
        margin-left: 1rem;
      }

      ul {
        padding: 8px 0;
        display: flex;
        list-style: none;

        li + li {
            margin-left: 0.5rem;
        }

        span {
          color: #3d3d4d;
        }
      }
    }

  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

