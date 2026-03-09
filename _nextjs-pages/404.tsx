import React from "react";

import { Layout } from "@components";

export default function NotFound() {
  const title = "NOT FOUND";
  return (
    <Layout
      title={title}
      sidebar={false}
      as={undefined}
      description={undefined}
    >
      <h1>{title}</h1>
      <div className="markdown">
        You just hit a route that doesn’t exist… the sadness.
      </div>
    </Layout>
  );
}
