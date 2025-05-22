// Cloudflare Environment Interface
interface CloudflareEnv {
  DB: D1Database;
  ENVIRONMENT: string;
}

// Extend the global Request object to include env
declare global {
  interface Request {
    env?: CloudflareEnv;
  }
}
