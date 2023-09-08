import React from "react";
import App from "./App.jsx";
import store from "./store";
import i18next from "i18next";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </I18nextProvider>
);
