import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const StyleButton = styled.button`
  ${props =>
    props.fullWidth &&
    css`
      csspadding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
`;

const Button = props => <StyleButton {...props} />;

export default Button;
