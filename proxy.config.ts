const PROXY_CONFIG = [{
  context: [
    "/api",
    "/api/events",
    "/api/events/save"
  ],
  target: "http://localhost:50829",
  secure: false
}]

module.exports = PROXY_CONFIG;
