"use strict";

import { Controller, Get, Route, Tags, Response, Example } from "tsoa";
import client from "prom-client"


client.collectDefaultMetrics({prefix: "app_"});

// Initializing custom metrics for the service.
const httpRequestCounter = new client.Counter({
    name: "http_requests_total",
    help: "Total number of HTTP requests",
    labelNames: ["method", "route", "status"]
});

const healthGauge = new client.Gauge({
    name: "overall_health_status",
    help: "Overall service heath status (1=ok, 0=not ok)"
});

/**
 * Prometheus metrics controller
 *
 * Exposes endpoint for prometheus metrics
 */
@Route("metrics")
@Tags("Monitoring")
export class MetricsController extends Controller {

   /**
   * Returns metrics of the service
   */
    @Get()
    @Response<string>(200, 'Prometheus metrics')
    @Example(`# HELP http_requests_total Total number of HTTP requests
# TYPE http_requests_total counter
http_requests_total{method="GET",route="/api/health",status="200"} 5`)
    public async getMetrics(): Promise<string> {

        // TODO: Apply various checks such as DB check etc.
        const isHealthy = true;
        healthGauge.set(isHealthy ? 1 : 0);

        this.setStatus(200);
        return client.register.metrics();
    }
}

export { httpRequestCounter, healthGauge }