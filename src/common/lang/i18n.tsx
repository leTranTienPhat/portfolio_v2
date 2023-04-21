import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const getCurrentHost =
  import.meta.env.MODE === "development"
    ? "http://localhost:5173"
    : "https://portfolio-lttp.vercel.app";

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${getCurrentHost}/locales/{{lng}}.json`,
    },
  });

export default i18n;