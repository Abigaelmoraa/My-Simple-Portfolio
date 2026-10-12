import { createFileRoute, redirect } from "@tanstack/react-router";

// The portfolio is a plain HTML/CSS page served from /portfolio/index.html.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/portfolio/" });
  },
  component: () => null,
});
