"use strict";

import { Controller, Get, Response, Route, Tags } from "tsoa";
import { IHealthMessage } from "../types";

/**
 * Health check controller
 *
 * Exposes endpoint for checking service health.
 */
@Route("health")
@Tags("Monitoring")
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
    @Response<IHealthMessage>(200, "ok", {
        status: "ok", 
        version: "v1", 
        date: new Date()
    })
    public async getHealth(): Promise<IHealthMessage> {
        this.setStatus(200);
        return {"status": "ok", "version": "v1", "date": new Date()};
    }

}