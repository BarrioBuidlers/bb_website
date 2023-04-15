sha1 = require("js-sha1");
export function sha1(digest) {
  const hash = sha1.create();
  hash.update(digest);
  return hash.hex();
}
