import { describe, it, expect } from "vitest";
import { escapeHtml } from "@/lib/security/sanitize";

describe("escapeHtml", () => {
  it("should escape < and >", () => {
    expect(escapeHtml("<script>alert('xss')</script>")).toBe(
      "&lt;script&gt;alert(&#039;xss&#039;)&lt;/script&gt;"
    );
  });

  it("should escape quotes", () => {
    expect(escapeHtml('He said "hello"')).toBe("He said &quot;hello&quot;");
  });

  it("should escape ampersands", () => {
    expect(escapeHtml("A & B")).toBe("A &amp; B");
  });

  it("should not modify clean strings", () => {
    expect(escapeHtml("John Doe")).toBe("John Doe");
  });
});
