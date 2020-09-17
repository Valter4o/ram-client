import React from "react";
import { Query } from "react-apollo";
import GET_PAGES_EPISODES from "../queries/getPageEpisodes";
import EpisodesList from "../components/presentational/EpisodesList";
import BaseLoading from "../components/base/BaseLoading";
import BaseError from "../components/base/BaseError";
import SeasonsNavigation from "../components/smart/SeasonsNavigation";

const Episodes = () => {
  const [page, setPage] = React.useState(1);

  return (
    <Query query={GET_PAGES_EPISODES(page)}>
      {({ loading, error, data }) => {
        if (loading) return <BaseLoading />;
        if (error) return <BaseError />;

        return (
          <>
            <SeasonsNavigation currentPage={page} setPage={setPage} />
            <EpisodesList data={data} />
          </>
        );
      }}
    </Query>
  );
};

export default Episodes;
