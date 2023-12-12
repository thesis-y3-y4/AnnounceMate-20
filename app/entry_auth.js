// Import the MSAL library
import * as msal from "msal";

// Create a new instance of the MSAL PublicClientApplication
const msalConfig = {
  auth: {
    clientId: "3c49ca8c-2a37-431e-b328-7371a6d35772",
    authority: "https://login.microsoftonline.com/caloocan.sti.edu.ph",
    redirectUri: "http://localhost:8080",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

// Define the scopes you want to request
const loginRequest = {
  scopes: ["user.read"],
};

// Sign in the user
msalInstance
  .loginPopup(loginRequest)
  .then((response) => {
    // Handle the successful login
    console.log("Login successful");
    console.log(response);
  })
  .catch((error) => {
    // Handle the error
    console.error("An error occurred during login");
    console.error(error);
  });
