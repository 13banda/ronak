import React from "react";
import { Auth0Provider } from "auth0";
import authConfig from "auth0/config.json";
import { useHistory } from "react-router-dom";

function BlankLayout({ children }) {
  console.log("updated reloaded")
   const history = useHistory();
  const onRedirectCallback = appState => {
    console.log(appState)
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    ); 
  };
  return (
    <Auth0Provider
      domain={authConfig.domain}
      client_id={authConfig.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <div className="main-container">{children}</div>
    </Auth0Provider>
  );
}
export default BlankLayout;
