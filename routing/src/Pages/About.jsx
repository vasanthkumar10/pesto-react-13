import { Link, useParams } from "react-router-dom";

import React from "react";

function About() {
  const params = useParams();
  console.log("params", params);

  return (
    <div>
      <h1>
        About page - {params.id} {params.name}
      </h1>
      <Link to="/">
        <button> Home link</button>
      </Link>
    </div>
  );
}

export default About;
