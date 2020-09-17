import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 20px;
  margin-top: 20px;
  display: flex;
  gap: 20px;
  place-content: center;
`;

const NavButton = styled.a`
  cursor: pointer;
  background-color: ${(props) => props.theme.skin};
  padding: 10px 50px;
  border-radius: 5px;
  box-sizing: border-box;
  display: ${(props) => props.display};
`;

const CurrentPage = styled.div`
  width: 50px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.green};
  border-radius: 4px;
`;

const SeasonsNavigation = ({ currentPage, setPage }) => {
  const isFirstPage = currentPage === 1 ? "none" : "block";
  const isLastPage = currentPage === 3 ? "none" : "block";

  return (
    <Nav>
      <NavButton display={isFirstPage} onClick={() => setPage(currentPage - 1)}>
        {"<"}
      </NavButton>
      <CurrentPage>{currentPage}</CurrentPage>
      <NavButton display={isLastPage} onClick={() => setPage(currentPage + 1)}>
        {">"}
      </NavButton>
    </Nav>
  );
};

export default SeasonsNavigation;
