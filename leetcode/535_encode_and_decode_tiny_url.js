//https://leetcode.com/problems/encode-and-decode-tinyurl/

const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHUJKLMNOPQRSTUVWXYZ';
const url = 'https://tinyurl.com/';

const codeMap = new Map();
const urlMap = new Map();

function generateCode() {
  return url + new Array(6)
    .fill("")
    .map(_ => chars.charAt(~~(Math.random() * 62)))
    .join("")
}

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl) {
  if (urlMap.has(longUrl)) {
    return urlMap.get(longUrl);
  }

  let code = generateCode();

  codeMap.set(code, longUrl)
  urlMap.set(longUrl, code)

  return code;
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl) {
  return codeMap.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */


/**
 * Test
 */

// let tiny = encode("https://leetcode.com/problems/design-tinyurl");
// let long = decode(tiny);
// console.log({ tiny, long })
