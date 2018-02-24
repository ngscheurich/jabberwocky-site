import React from "react";
import Link from "gatsby-link";

import tachyons from "tachyons";
import jabberwocky from "../static/images/jabberwocky.jpg";

const IndexPage = () => (
  <div className="flex">
    <div
      className="dn db-l contain"
      style={{ backgroundImage: jabberwocky, height: "100vh" }}
    />

    <div>
      <h1>Text BLIGHT to (225) 123-4567</h1>
      <p>or the Jabberwocky will devour you!</p>
    </div>
  </div>
);

export default IndexPage;
