import styled from "styled-components";

export const Container = styled.header`
  padding-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .hexLogo {
    margin-right: 0.5rem;
  }

  .searchBarContainer {
    background: rgba(111, 122, 132, 0.08);
    border-radius: 50px;
    width: 16rem;
    height: 2.5rem;
    padding: 0 1rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    > img {
      margin-right: 0.5rem;
    }

    > input {
      background: transparent;
      width: 100%;

      :focus {
        outline: none;
      }
    }
  }
`;
