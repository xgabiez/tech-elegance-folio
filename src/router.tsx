import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // Base URL do Vite (ex.: "/tech-elegance-folio/" no GitHub Pages, "/" no Lovable).
  // O TanStack Router precisa do basepath sem a barra final.
  const base = import.meta.env.BASE_URL ?? "/";
  const basepath = base.replace(/\/$/, "") || "/";

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath: basepath === "/" ? undefined : basepath,
  });

  return router;
};
