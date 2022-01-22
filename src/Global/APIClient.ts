import APIWrapper from "@Disadus/disadus-plugin-api";
export const APIClient = APIWrapper.getInstance();
window.top?.postMessage(
  JSON.stringify({
    event: "connect",
  }),
  "*",
  []
);
console.log("[APIClient]", "APIClient loaded", APIClient, window.top);
export default APIClient;
