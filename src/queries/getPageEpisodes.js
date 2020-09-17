import { gql } from "apollo-boost";

export default function GET_PAGES_EPISODES(page) {
  return gql`
    query GetPageEpisodes{
        episodes(page: ${page}) {
            results {
                name
                id
                air_date
                episode
                characters {
                    name
                    id
                    image
                }
        }
    }
}
`;
}
