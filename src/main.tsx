import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Reset } from "./style/Reset.ts";
import { GlobalStyle } from "./style/GlobalStyled.ts";
import { BrowserRouter } from "react-router-dom";
import { AuthProviders } from "./providers/AuthProvider.tsx";
import { ContactProviders } from "./providers/ContactProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <BrowserRouter>
      <AuthProviders>
        <ContactProviders>
          <App />
        </ContactProviders>
      </AuthProviders>
    </BrowserRouter>
  </React.StrictMode>
);
