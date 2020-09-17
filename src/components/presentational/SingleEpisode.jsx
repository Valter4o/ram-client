import React from "react";
import styled from "styled-components";
import BaseRedirectButton from "../base/BaseRedirectButton";

const EpisodeContainer = styled.div`
  width: 280px;
  height: 400px;
  border: solid 3px ${(props) => props.theme.brown};
  border-radius: 30px;
  background-color: ${(props) => props.theme.skin};
  color: ${(props) => props.theme.brown};
`;

const Name = styled.h1`
  height: 100px;
  color: ${(props) => props.theme.brown};
`;

const EpisodeNumber = styled.h3`
  color: ${(props) => props.theme.yellow};
`;

const ReleaseDate = styled.p`
  color: ${(props) => props.theme.yellow};
  margin-bottom:60px;
`;

const SingleEpisode = ({ episodeData: { name, episode, air_date, id } }) => {
  return (
    <EpisodeContainer>
      <Name>{name}</Name>
      <EpisodeNumber>{episode}</EpisodeNumber>
      <ReleaseDate>{air_date}</ReleaseDate>
      <BaseRedirectButton path={`/characters/${id}`} value="See characters" />
    </EpisodeContainer>
  );
};

export default SingleEpisode;
