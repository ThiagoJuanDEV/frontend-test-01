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

export const SearchBarContainer = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  .box {
    width: 50px;
    height: 3rem;
    background: rgba(111, 122, 132, 0.08);
    transition: 0.5s;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -10px 11px 30px -12px rgba(0, 0, 0, 0.3);
  }

  .box > label {
    width: 50px;
    height: 50px;
    padding-right: 1.5rem;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
    color: gray;
    transition: 0.5s;
  }

  .box > label:hover {
    transform: scale(1.1);
  }

  .box input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    border-radius: 30px;
    font-size: 1rem;
    padding-left: 25px;
    color: gray;
    transition: 0.5s;
    opacity: 0;
  }

  .box input::placeholder {
    color: gray;
  }

  #check:checked + .box {
    width: 500px;
    box-shadow: -10px 11px 40px -15px rgba(0, 0, 0, 0.25);
  }

  #check:checked + .box > input {
    opacity: 1;
  }
`;
