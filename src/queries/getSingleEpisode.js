import { gql } from "apollo-boost";

export default function GET_SINGLE_EPISODE(id) {
  return gql`
    query GetSingleEpisode {
      episode(id: ${id}) {
        characters{
            id
        }
      }
    }
  `;
}
