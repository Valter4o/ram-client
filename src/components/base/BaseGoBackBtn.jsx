import React from "react";
import styled from "styled-components";

const RedirectBtn = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.brown};
  border: solid 2px ${(props) => props.theme.brown};
  background-color: ${(props) => props.theme.green};
  padding: 10px 15px;
  border-radius: 15px;
  width: fit-content;
  cursor: pointer;
`;

const BaseGoBackBtn = ({ history }) => {
  return (
    <RedirectBtn
      onClick={() => {
        history.goBack();
      }}
    >
      Go back
    </RedirectBtn>
  );
};

export default BaseGoBackBtn;
