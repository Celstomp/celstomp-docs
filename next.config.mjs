import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const config = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  allowedDevOrigins: ['100.124.44.113'],
};

const withMDX = createMDX({
  // configPath: 'source.config.ts',
});

export default withMDX(config);
