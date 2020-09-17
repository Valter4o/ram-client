import React from "react";
import RingLoader from "react-spinners/RingLoader";

const BaseLoading = () => {
  const loaderStyles = {
    margin: "auto",
    marginTop: "10%",
  };
  return <RingLoader color="brown" size={200} css={loaderStyles} />;
};

export default BaseLoading;
