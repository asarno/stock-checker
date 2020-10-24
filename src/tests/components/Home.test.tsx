import React from "react";
import { render } from "@testing-library/react";
import Home from "../../components/Home";
import { SWRConfig } from "swr";

it("renders without caching", () => {
  render(
    <SWRConfig value={{ dedupingInterval: 0 }}>
      <Home />
    </SWRConfig>
  );
});