import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: absolute;
  inset: 0 0 0 0;

  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);

  .modalBox {
    position: absolute;
    z-index: 2;
    inset: 50% 50%;

    width: 39.5rem;
    height: 20rem;

    transform: translate(-50%, -50%);
    background: #f4f4f4;

    border-radius: 25px;
  }
`;

export const HeaderGradient = styled.header`
  width: 100%;
  height: 3rem;
  border-radius: 25px 25px 0 0;
  background: linear-gradient(269.62deg, #25beff 0%, #ff54d9 100%);

  display: flex;
  align-items: center;
  padding: 0 1rem;

  > h4 {
    margin: auto;
    color: #f4f4f4;
  }

  > div {
    width: 2rem;
    height: 2rem;
    border: 4px solid #f4f4f4;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: border-color ease-in-out 0.25s;

    > span {
      color: #f4f4f4;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      justify-self: end;
      font-weight: bolder;
      font-size: 0.85rem;

      transition: color ease-in-out 0.25s;
    }

    :hover {
      border-color: red;

      > span {
        color: red;
      }
    }
  }
`;

export const CreateForm = styled.form`
  padding: 2rem 3.25rem;

  display: flex;
  flex-direction: column;

  > button {
    margin-top: 2rem;
    align-self: flex-end;
  }

  label {
    display: block;
    font-size: 0.85rem;
    color: #6f7a84;
    font-weight: 600;
  }

  input {
    background: rgba(111, 122, 132, 0.08);
    border-radius: 6px;
    height: 2rem;
    padding: 0.5rem;

    :focus {
      outline: none;
      border: 1.85px solid rgb(111, 122, 132);
    }
  }

  .formBoxContainer {
    display: flex;

    label {
      display: block;
    }

    div:first-child {
      margin-right: 2rem;
    }
  }

  .nameInput {
    width: 20.25rem;
  }

  .checkboxBg {
    height: 2rem;
    width: 10.75rem;
    border-radius: 6px;
    background: rgba(111, 122, 132, 0.08);

    display: flex;
    align-items: center;
    justify-content: center;

    > input {
      width: 1.5rem;
      height: 1.5rem;

      background-color: green;
    }
  }

  .questionsBox {
    margin-top: 2rem;

    input {
      width: 10rem;
    }
  }
`;
