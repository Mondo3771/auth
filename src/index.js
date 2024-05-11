import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-1ycr2f4brea4mqn0.us.auth0.com"
    clientId="Lmhx5Qe8d2S2P4AOHTt0xB8NYj9zht2j"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
