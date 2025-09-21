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
   * @returns {"status": string, "version": string, "date": Date} JSON-object indicating service status.
   *
   * @example
   * {
   *   "status": "ok",
   *   "version": "v1",
   *   "date": "2025-09-15"
   * }
   */
    @Get()
    public async getHealth(): Promise<{status: string, version: string, date: Date}> {
        this.setStatus(200);
        return {"status": "ok", "version": "v1", "date": new Date()};
    }

}