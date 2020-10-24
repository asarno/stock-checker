import React from "react";
import { render } from "@testing-library/react";
import App from "../../components/App";
import { SWRConfig } from "swr";

it("renders without caching", () => {  
  render(
    <SWRConfig value={{ dedupingInterval: 0 }}>
      <App />
    </SWRConfig>
  );
});