import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Uncomment to enable R2 cache,
  // It should be imported as:
  // `import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";`
  // See https://opennext.js.org/cloudflare/caching for more details
  // incrementalCache: r2IncrementalCache,
  
  // Make D1 bindings available to the application
  bindings: {
    // Define the D1 binding available in the wrangler.jsonc
    DB: {
      type: "d1",
    },
  },
});
