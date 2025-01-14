import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
      "@next/next/no-head-element": "off",
      "@next/next/google-font-display": "off",
      "@next/next/google-font-preconnect": "off",
      "@next/next/next-script-for-ga": "off",
      "@next/next/no-sync-scripts": "off",
      "@next/next/no-css-tags": "off",
      "@next/next/no-page-custom-font": "off",
      "@next/next/no-title-in-document-head": "off",
      "@next/next/no-typos": "off",
      "@next/next/no-unwanted-polyfillio": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars":"off",
      "@typescript-eslint/no-unused-expressions":"off"
    }
  }
];

export default eslintConfig;