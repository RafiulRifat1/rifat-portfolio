"use client";
import dynamic from "next/dynamic";
import { GithubSkeleton } from "@/components/skeletons/github-skeleton";

const GithubContributions = dynamic(
  () => import("@/components/github-calendar").then(mod => mod.GithubContributions),
  {
    ssr: false,
    loading: () => <GithubSkeleton />,
  }
);

export default GithubContributions;
