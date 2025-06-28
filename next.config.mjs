import createNextIntlPlugin from "next-intl/plugin";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withNextIntl = createNextIntlPlugin(path.resolve(__dirname, "src/lib/locale/i18n.ts"));

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        domains: ["ljconstrutic.com", "esuntest.com"],
    },
    webpack: (config) => {
        config.resolve = config.resolve || {};
        config.resolve.alias = {
            ...config.resolve.alias,
            "@": path.resolve(__dirname, "src"),
            "@/infra": path.resolve(__dirname, "src/infra"),
            "@/lib": path.resolve(__dirname, "src/lib"),
            "@/presentation": path.resolve(__dirname, "src/presentation"),
        };
        return config;
    },
};

export default withNextIntl(nextConfig);
