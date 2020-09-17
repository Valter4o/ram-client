import { gql } from "apollo-boost";

export default function GET_SINGLE_CHARACTER(id) {
  return gql`
    query GetEpisodeCharacters {
      character(id:${id}){
        name
        status
        species
        gender
        origin{
          name
          dimension
        }
        location{
          name
          dimension
        }
        image
      }
    }
  `;
}
