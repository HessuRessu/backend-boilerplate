import request from 'supertest';
import createApp from "../app";

const appVersion = process.env.APP_VERSION || "v0";

describe('GET /health', () => {
  it('returns ok', async () => {
    const app = createApp();
    const res = await request(app).get(`/api/${appVersion}/health`);
    expect(res.status).toBe(200);
    expect(res.body.status).toEqual("ok");
  });
});
