import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.brown};
  border: solid 2px ${(props) => props.theme.brown};
  background-color: ${(props) => props.theme.green};
  padding: 10px 15px;
  border-radius: 15px;
`;

const BaseRedirectButton = ({ path, value }) => {
  return <StyledLink to={path}>{value}</StyledLink>;
};

export default BaseRedirectButton;
