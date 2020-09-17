import React from "react";
import { Query } from "react-apollo";
import GET_EPISODE_CHARACTERS from "../queries/getEpisodeCharacters";
import GET_SINGLE_EPISODE from "../queries/getSingleEpisode";
import BaseLoading from "../components/base/BaseLoading";
import BaseGoBackBtn from "../components/base/BaseGoBackBtn";
import BaseError from "../components/base/BaseError";
import SingleListCharacter from "../components/presentational/SingleListCharacter";
import styled from "styled-components";

const CharactersContainer = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const CharactersList = (props) => {
  const episodeId = props.match.params.id;
  return (
    <Query query={GET_SINGLE_EPISODE(episodeId)}>
      {({ loading, error, data }) => {
        if (loading) return <BaseLoading />;
        if (error) return <BaseError />;

        const charactersIds = data.episode.characters.map(({ id }) =>
          Number(id)
        );

        return (
          <>
            <Query query={GET_EPISODE_CHARACTERS(charactersIds)}>
              {({ loading, error, data }) => {
                if (loading) return <BaseLoading />;
                if (error) return <BaseError />;

                return (
                  <>
                    <BaseGoBackBtn history={props.history} />
                    <CharactersContainer>
                      {data.charactersByIds.map((characterData) => {
                        return (
                          <SingleListCharacter
                            key={characterData.id}
                            characterData={characterData}
                          />
                        );
                      })}
                    </CharactersContainer>
                  </>
                );
              }}
            </Query>
          </>
        );
      }}
    </Query>
  );
};

export default CharactersList;
