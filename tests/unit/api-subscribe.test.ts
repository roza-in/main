import { describe, it, expect, vi } from "vitest";

// Mock global fetch
global.fetch = vi.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve("mock-response-text"),
  } as Response)
);

describe("/api/subscribe", () => {
  it("should reject invalid email", async () => {
    const { POST } = await import("@/app/api/subscribe/route");

    const request = new Request("http://localhost:3000/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "not-an-email" }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it("should accept valid email", async () => {
    const { POST } = await import("@/app/api/subscribe/route");

    const request = new Request("http://localhost:3000/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "user@example.com" }),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
  });
});
