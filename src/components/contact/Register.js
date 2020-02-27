import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

//연락처 추가 폼

const RegisterBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  margin-top: 2rem;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1.5rem;
  }
  ${props =>
    props.search &&
    css`
      csspadding-top: 1rem;
      padding-bottom: 0.75rem;
      width: 100%;
      margin-top: -2rem;
    `}
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

//버튼 재스타일링
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  contacts: "연락처",
  register: "추가하기"
};

const Register = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <RegisterBlock>
      <h3>{text}</h3>
      {type === "register" && (
        <form onSubmit={onSubmit}>
          <StyledInput
            autoComplete="username"
            name="username"
            placeholder="이름"
            onChange={onChange}
            value={form.username}
          />
          <StyledInput
            autoComplete="phone"
            name="phone"
            placeholder="전화번호"
            onChange={onChange}
            value={form.phone}
          />
          <ButtonWithMarginTop fullWidth>{text}</ButtonWithMarginTop>
        </form>
      )}
      {type === "contacts" && (
        <StyledInput
          search
          autoComplete="search"
          name="search"
          placeholder="검색"
          onChange={onChange}
          value={form.search}
        />
      )}
      <Footer>
        {type === "contacts" ? (
          <Link to="/register">추가하기</Link>
        ) : (
          <Link to="/">연락처</Link>
        )}
      </Footer>
    </RegisterBlock>
  );
};

export default Register;
