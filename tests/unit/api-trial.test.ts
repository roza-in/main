import { describe, it, expect, vi } from "vitest";

// Mock Resend and global fetch
global.fetch = vi.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve("mock-response-text"),
  } as Response)
);

describe("/api/trial", () => {
  it("should reject invalid payload (missing required fields)", async () => {
    const { POST } = await import("@/app/api/trial/route");

    const request = new Request("http://localhost:3000/api/trial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "incomplete" }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it("should accept valid payload", async () => {
    const { POST } = await import("@/app/api/trial/route");

    const request = new Request("http://localhost:3000/api/trial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        phone: "9876543210",
        businessName: "Test Salon",
        plan: "growth",
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.success).toBe(true);
  });

  it("should reject phone numbers with letters", async () => {
    const { POST } = await import("@/app/api/trial/route");

    const request = new Request("http://localhost:3000/api/trial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test",
        email: "test@example.com",
        phone: "abcdefghij",
        businessName: "Salon",
        plan: "growth",
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });
});
