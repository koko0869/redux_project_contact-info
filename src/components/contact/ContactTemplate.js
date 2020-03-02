import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";
// 연락처추가, 메인화면 레이아웃 담당

const ContactTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display: flex;
  fiex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spaceing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 2px;
`;

const ContactTemplate = ({ children }) => {
  return (
    <ContactTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">연락처</Link>
        </div>
        <Link to="/favorite">즐겨찾기</Link>
        {children}
      </WhiteBox>
    </ContactTemplateBlock>
  );
};

export default ContactTemplate;
