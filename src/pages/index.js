import React from "react";
import Link from "gatsby-link";

import tachyons from "tachyons";
import jabberwocky from "../static/images/jabberwocky.jpg";

console.log(jabberwocky);

const IndexPage = () => (
  <div className="flex tc">
    <div
      className="dn db-l contain"
      style={{
        backgroundImage: `url(${jabberwocky})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "50vw"
      }}
    />

    <div
      className="pa4 flex items-center"
      style={{ height: "100vh", width: "50vw" }}
    >
      <div className="">
        <h1 style={{ fontSize: "5rem" }}>Text BLIGHT to (225) 240-4652</h1>
        <p style={{ fontSize: "3rem" }}>or the Jabberwocky will devour you!</p>
      </div>
    </div>
  </div>
);

export default IndexPage;
