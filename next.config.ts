import type { NextConfig } from "next";
import createWithMakeswift from "@makeswift/runtime/next/plugin";

const withMakeswift = createWithMakeswift();

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {},
};

export default withMakeswift(nextConfig);
