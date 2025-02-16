// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/szvy/szvy/",
  bare: "/bare/",
  encodeUrl: Ultraviolet.codec.base64.encode,
  decodeUrl: Ultraviolet.codec.base64.decode,
  handler: "/szvy/handler.js",
  client: "/szvy/client.js",
  bundle: "/szvy/bundle.js",
  config: "/szvy/config.js",
  sw: "/szvy/rizz.sw.js",
};
