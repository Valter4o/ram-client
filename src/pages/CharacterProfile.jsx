import React from "react";
import { Query } from "react-apollo";
import GET_SINGLE_CHARACTER from "../queries/getSingleCharacter";
import BaseLoading from "../components/base/BaseLoading";
import BaseError from "../components/base/BaseError";
import BaseGoBackBtn from "../components/base/BaseGoBackBtn";
import styled from "styled-components";

const Name = styled.h1`
  color: ${(props) => props.theme.brown};
`;

const CharacterImage = styled.img`
  border-radius: 30px;
  border: solid 2px ${(props) => props.theme.brown};
  margin-bottom: 30px;
`;

const DataField = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 30px;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.brown};
  padding: 15px;
  box-sizing: border-box;
  border: solid 3px ${(props) => props.theme.brown};
  border-radius: 5px;
  font-size: 30px;
`;

const SingleCharacter = ({
  charData: { name, status, image, location, gender, species, origin },
}) => {
  return (
    <>
      <Name>{name}</Name>
      <CharacterImage src={image} />
      <DataField>Gender: {gender}</DataField>
      <DataField>Species: {species}</DataField>
      <DataField>Status: {status}</DataField>
      <DataField>Location: {location.name}</DataField>
      <DataField>Origin: {origin.name}</DataField>
    </>
  );
};

const CharacterProfile = (props) => {
  const characterId = props.match.params.id;
  return (
    <div>
      <BaseGoBackBtn history={props.history}/>
      <Query query={GET_SINGLE_CHARACTER(characterId)}>
        {({ loading, error, data }) => {
          if (loading) return <BaseLoading />;
          if (error) return <BaseError />;
          return <SingleCharacter charData={data.character} />;
        }}
      </Query>
    </div>
  );
};

export default CharacterProfile;
