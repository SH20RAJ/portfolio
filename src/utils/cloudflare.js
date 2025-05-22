/**
 * Cloudflare D1 Database Utility Functions
 * 
 * This file contains helper functions for working with Cloudflare D1 database
 * in different environments.
 */

/**
 * Check if we're running in a Cloudflare Workers environment
 * @returns {boolean}
 */
export function isCloudflareEnvironment() {
  return (
    typeof process !== 'undefined' && 
    process.env.NEXT_RUNTIME === 'edge' && 
    typeof globalThis.caches !== 'undefined'
  );
}

/**
 * Get the Cloudflare environment from the request
 * @param {Request} request - The incoming request object
 * @returns {object} The Cloudflare environment object or an empty object
 */
export function getCloudflareEnv(request) {
  // In Cloudflare Workers, the environment is available on the request
  if (isCloudflareEnvironment() && request?.cf) {
    return request.cf.env || {};
  }
  
  // In development or other environments, return an empty object
  return {};
}

/**
 * Safe D1 database query wrapper with error handling
 * @param {D1Database} db - The D1 database instance
 * @param {string} query - SQL query to execute
 * @param {Array<any>} params - Parameters to bind to the query
 * @returns {Promise<Object>} Query result or error object
 */
export async function safeDbQuery(db, query, params = []) {
  try {
    if (!db) {
      throw new Error('Database not available');
    }
    
    const stmt = db.prepare(query);
    const result = await stmt.bind(...params).run();
    return { success: true, data: result };
  } catch (error) {
    console.error('D1 database error:', error);
    return { 
      success: false, 
      error: error.message || 'Database operation failed'
    };
  }
}
