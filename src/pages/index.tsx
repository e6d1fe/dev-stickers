import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout title="Welcome to Devstickers ✨">
      <div></div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
