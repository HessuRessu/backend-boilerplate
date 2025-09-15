"use strict";

import { Controller, Get, Route } from "tsoa";

/**
 * Health check controller
 *
 * Exposes endpoint for checking service health.
 */
@Route("health")
export class HealthController extends Controller {

   /**
   * Returns status of the service
   *
   * @returns {"status": string} JSON-object indicating service status.
   *
   * @example
   * {
   *   "status": "ok"
   * }
   */
    @Get()
    public async getHealth(): Promise<{status: string}> {
        this.setStatus(200);
        return {"status": "ok"};
    }
}