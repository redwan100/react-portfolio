import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;

  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--gray-1)"};
    padding: 0.7rem 2rem;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? "var(--gray-1)" : "black")};
    border-radius: 8px;
    font-family: "Montserrat";
  }

  @media screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;
const Button = ({
  btnLink = "btn  link here",
  btnText = "see my work",
  outline = false,
}) => {
  return (
    <ButtonStyle outline={outline}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
};

export default Button;
