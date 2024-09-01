import { MLCEngineWorkerHandler } from "https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.46/+esm";

const handler = new MLCEngineWorkerHandler();

self.onmessage = (msg) => {
  handler.onmessage(msg);
};
