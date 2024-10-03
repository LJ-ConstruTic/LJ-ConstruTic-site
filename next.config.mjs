import createNextIntlPlugin from "next-intl/plugin";
import { resolve } from "path";

const withNextIntl = createNextIntlPlugin(resolve("./src/lib/locale/i18n.ts"));

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
