import { gql } from "apollo-boost";

export default function GET_EPISODE_CHARACTERS(ids) {
  return gql`
    query GetEpisodeCharacters {
      charactersByIds(ids: [${ids}]) {
        name
        id
        image
      }
    }
  `;
}
