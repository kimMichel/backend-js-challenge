import { handlePageView } from "./http/page-view.ts";
import { executionTimeMiddleware } from "./middleware/execution-time-middleware.ts";

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const { pathname } = new URL(request.url)

    if (pathname.startsWith('/pageview/')) {
      const key = pathname.substring('/pageview/'.length)
      const response = await executionTimeMiddleware(request, async () => {
        return await handlePageView(request, key, env)
      })

      return response
    }

    return new Response("Hello, world!")
  },
};