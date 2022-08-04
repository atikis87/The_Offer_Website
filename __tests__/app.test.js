import { request } from 'express';
import app from '../app.js'


describe("server running test", () => {
  it("should respod with a 200 status code", async () => {
    const response = await request(app).use("/").send({

    });
    expect(response.statusCode).toBe(200)
  });
});

  