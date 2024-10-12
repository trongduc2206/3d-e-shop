import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  {
    // Target all JavaScript files
    files: ["**/*.{js,mjs,cjs,jsx}"],

    // Specify language options (e.g., for browser globals like window, document)
    languageOptions: {
      globals: globals.browser,
    },

    // Enable the recommended rules from eslint-plugin-react
    rules: {
      ...pluginReact.configs.recommended.rules,
    },
  },
];
