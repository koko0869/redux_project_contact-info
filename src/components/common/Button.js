import React from "react";
import styled, { css } from "styled-components";

const StyleButton = styled.button`
  ${props =>
    props.fullWidth &&
    css`
      csspadding-top: 1rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      width: 45%;
      font-size: 1.125rem;
    `}
`;

const Button = props => <StyleButton {...props} />;

export default Button;
