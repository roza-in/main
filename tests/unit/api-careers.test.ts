import { describe, it, expect, vi } from "vitest";
import { POST } from "@/app/api/careers/route";

// Mock Resend and global fetch
global.fetch = vi.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve("mock-response-text"),
  } as Response)
);

describe("/api/careers", () => {
  it("should reject invalid payload (missing required fields)", async () => {
    const request = new Request("http://localhost:3000/api/careers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "J" }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it("should accept valid payload", async () => {
    const request = new Request("http://localhost:3000/api/careers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Aarav Mehta",
        email: "aarav@example.in",
        phone: "9876543210",
        jobSlug: "senior-frontend-engineer",
        resumeUrl: "https://drive.google.com/file/d/123",
        portfolioUrl: "https://linkedin.com/in/aaravmehta",
        coverLetter: "I want to build the booking and billing platform for local commerce at Rozx.",
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.success).toBe(true);
  });

  it("should reject invalid urls", async () => {
    const request = new Request("http://localhost:3000/api/careers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Aarav Mehta",
        email: "aarav@example.in",
        phone: "9876543210",
        jobSlug: "senior-frontend-engineer",
        resumeUrl: "not-a-valid-url",
        coverLetter: "I want to build the booking and billing platform for local commerce at Rozx.",
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });
});
