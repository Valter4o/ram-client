import React from "react";
import SingleEpisode from "./SingleEpisode";
import styled from "styled-components";

const EpisodesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  place-content:center;
  gap:50px;
  margin:0 auto;
  max-width:1000px;
`;

const EpisodesList = ({ data }) => {
  return (
    <EpisodesContainer>
      {data.episodes.results.map((episodeData) => {
        return <SingleEpisode key={episodeData.id} episodeData={episodeData} />;
      })}
    </EpisodesContainer>
  );
};

export default EpisodesList;
