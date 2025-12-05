import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from "@auth0/auth0-react";

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-rtqig617i45ekhpo.us.auth0.com"
      clientId="v9pIMoEfWqo1ihWA02aTsEVV3i6D8eIg"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
)
