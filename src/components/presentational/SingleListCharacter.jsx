import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CharacterBox = styled.div`
  width: fit-content;
  cursor: pointer;
  margin: auto;

  & :hover {
    transform: scale(1.1);
  }
`;

const Name = styled.div`
  display: table-cell;
  vertical-align: middle;
  font-size: 40px;
  background-color: ${(props) => props.theme.brown};
  color: ${(props) => props.theme.yellow};
  width: 300px;
  height: 150px;
`;

const CharacterImg = styled.img`
  max-width: 300px;
  max-height: 300px;
`;

const SingleListCharacter = ({ characterData: { name, image, id } }) => {
  const history = useHistory();

  function redirectToCharacter(id) {
    history.push("/character/" + id);
  }

  return (
    <CharacterBox>
      <div onClick={() => redirectToCharacter(id)}>
        <CharacterImg src={image} />
        <Name>{name}</Name>
      </div>
    </CharacterBox>
  );
};

export default SingleListCharacter;
