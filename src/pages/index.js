import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
      <h1>Index</h1>
      <Link to="/about">About</Link>
    </div>
  </Layout>
);
export default IndexPage;