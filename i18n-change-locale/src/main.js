import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import "./style.css";
import App from "./App.vue";

(async () => {
  const locales = import.meta.glob("./locales/*.json");
  const events = import.meta.glob(`./events/2023tennis/*.json`);

  let messages = {};
  for (const path in locales) {
    const l = await locales[path]();
    if (path.includes("ja")) {
      messages = { ...messages, ja: l.default };
    }
  }

  for (const path in events) {
    const e = await events[path]();
    if (path.includes("ja")) {
      messages = { ...messages, ja: { ...messages.ja, ...e.default } };
    }
  }

  const i18n = createI18n({
    locale: "ja",
    fallbackLocale: "en",
    messages,
  });

  createApp(App).use(i18n).mount("#app");
})();
