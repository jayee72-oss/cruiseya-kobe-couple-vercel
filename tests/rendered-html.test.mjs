import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/cruise") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the cruise landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /부산에서 편안하게 시작하세요/);
  assert.match(html, /2026년 9월 12일/);
  assert.match(html, /1인 980,000원부터/);
  assert.match(html, /CRUISEYA/);
  assert.equal((html.match(/<h1/g) ?? []).length, 1);
});

test("root redirects to the cruise landing page", async () => {
  const response = await render("/");
  assert.equal(response.status, 307);
  assert.equal(response.headers.get("location"), "http://localhost/cruise");
});
