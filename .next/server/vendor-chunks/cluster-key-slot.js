/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cluster-key-slot";
exports.ids = ["vendor-chunks/cluster-key-slot"];
exports.modules = {

/***/ "(action-browser)/./node_modules/cluster-key-slot/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/cluster-key-slot/lib/index.js ***!
  \****************************************************/
/***/ ((module) => {

eval("/*\n * Copyright 2001-2010 Georges Menie (www.menie.org)\n * Copyright 2010 Salvatore Sanfilippo (adapted to Redis coding style)\n * Copyright 2015 Zihua Li (http://zihua.li) (ported to JavaScript)\n * Copyright 2016 Mike Diarmid (http://github.com/salakar) (re-write for performance, ~700% perf inc)\n * All rights reserved.\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions are met:\n *\n *     * Redistributions of source code must retain the above copyright\n *       notice, this list of conditions and the following disclaimer.\n *     * Redistributions in binary form must reproduce the above copyright\n *       notice, this list of conditions and the following disclaimer in the\n *       documentation and/or other materials provided with the distribution.\n *     * Neither the name of the University of California, Berkeley nor the\n *       names of its contributors may be used to endorse or promote products\n *       derived from this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND ANY\n * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED\n * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\n * DISCLAIMED. IN NO EVENT SHALL THE REGENTS AND CONTRIBUTORS BE LIABLE FOR ANY\n * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES\n * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\n * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND\n * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS\n * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n/* CRC16 implementation according to CCITT standards.\n *\n * Note by @antirez: this is actually the XMODEM CRC 16 algorithm, using the\n * following parameters:\n *\n * Name                       : \"XMODEM\", also known as \"ZMODEM\", \"CRC-16/ACORN\"\n * Width                      : 16 bit\n * Poly                       : 1021 (That is actually x^16 + x^12 + x^5 + 1)\n * Initialization             : 0000\n * Reflect Input byte         : False\n * Reflect Output CRC         : False\n * Xor constant to output CRC : 0000\n * Output for \"123456789\"     : 31C3\n */\n\nvar lookup = [\n  0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5, 0x60c6, 0x70e7,\n  0x8108, 0x9129, 0xa14a, 0xb16b, 0xc18c, 0xd1ad, 0xe1ce, 0xf1ef,\n  0x1231, 0x0210, 0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6,\n  0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c, 0xf3ff, 0xe3de,\n  0x2462, 0x3443, 0x0420, 0x1401, 0x64e6, 0x74c7, 0x44a4, 0x5485,\n  0xa56a, 0xb54b, 0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d,\n  0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6, 0x5695, 0x46b4,\n  0xb75b, 0xa77a, 0x9719, 0x8738, 0xf7df, 0xe7fe, 0xd79d, 0xc7bc,\n  0x48c4, 0x58e5, 0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823,\n  0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969, 0xa90a, 0xb92b,\n  0x5af5, 0x4ad4, 0x7ab7, 0x6a96, 0x1a71, 0x0a50, 0x3a33, 0x2a12,\n  0xdbfd, 0xcbdc, 0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a,\n  0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03, 0x0c60, 0x1c41,\n  0xedae, 0xfd8f, 0xcdec, 0xddcd, 0xad2a, 0xbd0b, 0x8d68, 0x9d49,\n  0x7e97, 0x6eb6, 0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70,\n  0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a, 0x9f59, 0x8f78,\n  0x9188, 0x81a9, 0xb1ca, 0xa1eb, 0xd10c, 0xc12d, 0xf14e, 0xe16f,\n  0x1080, 0x00a1, 0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067,\n  0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c, 0xe37f, 0xf35e,\n  0x02b1, 0x1290, 0x22f3, 0x32d2, 0x4235, 0x5214, 0x6277, 0x7256,\n  0xb5ea, 0xa5cb, 0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d,\n  0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405,\n  0xa7db, 0xb7fa, 0x8799, 0x97b8, 0xe75f, 0xf77e, 0xc71d, 0xd73c,\n  0x26d3, 0x36f2, 0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634,\n  0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9, 0xb98a, 0xa9ab,\n  0x5844, 0x4865, 0x7806, 0x6827, 0x18c0, 0x08e1, 0x3882, 0x28a3,\n  0xcb7d, 0xdb5c, 0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a,\n  0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0, 0x2ab3, 0x3a92,\n  0xfd2e, 0xed0f, 0xdd6c, 0xcd4d, 0xbdaa, 0xad8b, 0x9de8, 0x8dc9,\n  0x7c26, 0x6c07, 0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1,\n  0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba, 0x8fd9, 0x9ff8,\n  0x6e17, 0x7e36, 0x4e55, 0x5e74, 0x2e93, 0x3eb2, 0x0ed1, 0x1ef0\n];\n\n/**\n * Convert a string to a UTF8 array - faster than via buffer\n * @param str\n * @returns {Array}\n */\nvar toUTF8Array = function toUTF8Array(str) {\n  var char;\n  var i = 0;\n  var p = 0;\n  var utf8 = [];\n  var len = str.length;\n\n  for (; i < len; i++) {\n    char = str.charCodeAt(i);\n    if (char < 128) {\n      utf8[p++] = char;\n    } else if (char < 2048) {\n      utf8[p++] = (char >> 6) | 192;\n      utf8[p++] = (char & 63) | 128;\n    } else if (\n        ((char & 0xFC00) === 0xD800) && (i + 1) < str.length &&\n        ((str.charCodeAt(i + 1) & 0xFC00) === 0xDC00)) {\n      char = 0x10000 + ((char & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);\n      utf8[p++] = (char >> 18) | 240;\n      utf8[p++] = ((char >> 12) & 63) | 128;\n      utf8[p++] = ((char >> 6) & 63) | 128;\n      utf8[p++] = (char & 63) | 128;\n    } else {\n      utf8[p++] = (char >> 12) | 224;\n      utf8[p++] = ((char >> 6) & 63) | 128;\n      utf8[p++] = (char & 63) | 128;\n    }\n  }\n\n  return utf8;\n};\n\n/**\n * Convert a string into a redis slot hash.\n * @param str\n * @returns {number}\n */\nvar generate = module.exports = function generate(str) {\n  var char;\n  var i = 0;\n  var start = -1;\n  var result = 0;\n  var resultHash = 0;\n  var utf8 = typeof str === 'string' ? toUTF8Array(str) : str;\n  var len = utf8.length;\n\n  while (i < len) {\n    char = utf8[i++];\n    if (start === -1) {\n      if (char === 0x7B) {\n        start = i;\n      }\n    } else if (char !== 0x7D) {\n      resultHash = lookup[(char ^ (resultHash >> 8)) & 0xFF] ^ (resultHash << 8);\n    } else if (i - 1 !== start) {\n      return resultHash & 0x3FFF;\n    }\n\n    result = lookup[(char ^ (result >> 8)) & 0xFF] ^ (result << 8);\n  }\n\n  return result & 0x3FFF;\n};\n\n/**\n * Convert an array of multiple strings into a redis slot hash.\n * Returns -1 if one of the keys is not for the same slot as the others\n * @param keys\n * @returns {number}\n */\nmodule.exports.generateMulti = function generateMulti(keys) {\n  var i = 1;\n  var len = keys.length;\n  var base = generate(keys[0]);\n\n  while (i < len) {\n    if (generate(keys[i++]) !== base) return -1;\n  }\n\n  return base;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9jbHVzdGVyLWtleS1zbG90L2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUyxTQUFTO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0aW1vbmlhbC8uL25vZGVfbW9kdWxlcy9jbHVzdGVyLWtleS1zbG90L2xpYi9pbmRleC5qcz9jMDY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAwMS0yMDEwIEdlb3JnZXMgTWVuaWUgKHd3dy5tZW5pZS5vcmcpXG4gKiBDb3B5cmlnaHQgMjAxMCBTYWx2YXRvcmUgU2FuZmlsaXBwbyAoYWRhcHRlZCB0byBSZWRpcyBjb2Rpbmcgc3R5bGUpXG4gKiBDb3B5cmlnaHQgMjAxNSBaaWh1YSBMaSAoaHR0cDovL3ppaHVhLmxpKSAocG9ydGVkIHRvIEphdmFTY3JpcHQpXG4gKiBDb3B5cmlnaHQgMjAxNiBNaWtlIERpYXJtaWQgKGh0dHA6Ly9naXRodWIuY29tL3NhbGFrYXIpIChyZS13cml0ZSBmb3IgcGVyZm9ybWFuY2UsIH43MDAlIHBlcmYgaW5jKVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAqICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XG4gKiAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlXG4gKiAgICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLCBCZXJrZWxleSBub3IgdGhlXG4gKiAgICAgICBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0c1xuICogICAgICAgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgUkVHRU5UUyBBTkQgQ09OVFJJQlVUT1JTIGBgQVMgSVMnJyBBTkQgQU5ZXG4gKiBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFXG4gKiBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgUkVHRU5UUyBBTkQgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZXG4gKiBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFU1xuICogKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTO1xuICogTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EXG4gKiBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVNcbiAqIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbi8qIENSQzE2IGltcGxlbWVudGF0aW9uIGFjY29yZGluZyB0byBDQ0lUVCBzdGFuZGFyZHMuXG4gKlxuICogTm90ZSBieSBAYW50aXJlejogdGhpcyBpcyBhY3R1YWxseSB0aGUgWE1PREVNIENSQyAxNiBhbGdvcml0aG0sIHVzaW5nIHRoZVxuICogZm9sbG93aW5nIHBhcmFtZXRlcnM6XG4gKlxuICogTmFtZSAgICAgICAgICAgICAgICAgICAgICAgOiBcIlhNT0RFTVwiLCBhbHNvIGtub3duIGFzIFwiWk1PREVNXCIsIFwiQ1JDLTE2L0FDT1JOXCJcbiAqIFdpZHRoICAgICAgICAgICAgICAgICAgICAgIDogMTYgYml0XG4gKiBQb2x5ICAgICAgICAgICAgICAgICAgICAgICA6IDEwMjEgKFRoYXQgaXMgYWN0dWFsbHkgeF4xNiArIHheMTIgKyB4XjUgKyAxKVxuICogSW5pdGlhbGl6YXRpb24gICAgICAgICAgICAgOiAwMDAwXG4gKiBSZWZsZWN0IElucHV0IGJ5dGUgICAgICAgICA6IEZhbHNlXG4gKiBSZWZsZWN0IE91dHB1dCBDUkMgICAgICAgICA6IEZhbHNlXG4gKiBYb3IgY29uc3RhbnQgdG8gb3V0cHV0IENSQyA6IDAwMDBcbiAqIE91dHB1dCBmb3IgXCIxMjM0NTY3ODlcIiAgICAgOiAzMUMzXG4gKi9cblxudmFyIGxvb2t1cCA9IFtcbiAgMHgwMDAwLCAweDEwMjEsIDB4MjA0MiwgMHgzMDYzLCAweDQwODQsIDB4NTBhNSwgMHg2MGM2LCAweDcwZTcsXG4gIDB4ODEwOCwgMHg5MTI5LCAweGExNGEsIDB4YjE2YiwgMHhjMThjLCAweGQxYWQsIDB4ZTFjZSwgMHhmMWVmLFxuICAweDEyMzEsIDB4MDIxMCwgMHgzMjczLCAweDIyNTIsIDB4NTJiNSwgMHg0Mjk0LCAweDcyZjcsIDB4NjJkNixcbiAgMHg5MzM5LCAweDgzMTgsIDB4YjM3YiwgMHhhMzVhLCAweGQzYmQsIDB4YzM5YywgMHhmM2ZmLCAweGUzZGUsXG4gIDB4MjQ2MiwgMHgzNDQzLCAweDA0MjAsIDB4MTQwMSwgMHg2NGU2LCAweDc0YzcsIDB4NDRhNCwgMHg1NDg1LFxuICAweGE1NmEsIDB4YjU0YiwgMHg4NTI4LCAweDk1MDksIDB4ZTVlZSwgMHhmNWNmLCAweGM1YWMsIDB4ZDU4ZCxcbiAgMHgzNjUzLCAweDI2NzIsIDB4MTYxMSwgMHgwNjMwLCAweDc2ZDcsIDB4NjZmNiwgMHg1Njk1LCAweDQ2YjQsXG4gIDB4Yjc1YiwgMHhhNzdhLCAweDk3MTksIDB4ODczOCwgMHhmN2RmLCAweGU3ZmUsIDB4ZDc5ZCwgMHhjN2JjLFxuICAweDQ4YzQsIDB4NThlNSwgMHg2ODg2LCAweDc4YTcsIDB4MDg0MCwgMHgxODYxLCAweDI4MDIsIDB4MzgyMyxcbiAgMHhjOWNjLCAweGQ5ZWQsIDB4ZTk4ZSwgMHhmOWFmLCAweDg5NDgsIDB4OTk2OSwgMHhhOTBhLCAweGI5MmIsXG4gIDB4NWFmNSwgMHg0YWQ0LCAweDdhYjcsIDB4NmE5NiwgMHgxYTcxLCAweDBhNTAsIDB4M2EzMywgMHgyYTEyLFxuICAweGRiZmQsIDB4Y2JkYywgMHhmYmJmLCAweGViOWUsIDB4OWI3OSwgMHg4YjU4LCAweGJiM2IsIDB4YWIxYSxcbiAgMHg2Y2E2LCAweDdjODcsIDB4NGNlNCwgMHg1Y2M1LCAweDJjMjIsIDB4M2MwMywgMHgwYzYwLCAweDFjNDEsXG4gIDB4ZWRhZSwgMHhmZDhmLCAweGNkZWMsIDB4ZGRjZCwgMHhhZDJhLCAweGJkMGIsIDB4OGQ2OCwgMHg5ZDQ5LFxuICAweDdlOTcsIDB4NmViNiwgMHg1ZWQ1LCAweDRlZjQsIDB4M2UxMywgMHgyZTMyLCAweDFlNTEsIDB4MGU3MCxcbiAgMHhmZjlmLCAweGVmYmUsIDB4ZGZkZCwgMHhjZmZjLCAweGJmMWIsIDB4YWYzYSwgMHg5ZjU5LCAweDhmNzgsXG4gIDB4OTE4OCwgMHg4MWE5LCAweGIxY2EsIDB4YTFlYiwgMHhkMTBjLCAweGMxMmQsIDB4ZjE0ZSwgMHhlMTZmLFxuICAweDEwODAsIDB4MDBhMSwgMHgzMGMyLCAweDIwZTMsIDB4NTAwNCwgMHg0MDI1LCAweDcwNDYsIDB4NjA2NyxcbiAgMHg4M2I5LCAweDkzOTgsIDB4YTNmYiwgMHhiM2RhLCAweGMzM2QsIDB4ZDMxYywgMHhlMzdmLCAweGYzNWUsXG4gIDB4MDJiMSwgMHgxMjkwLCAweDIyZjMsIDB4MzJkMiwgMHg0MjM1LCAweDUyMTQsIDB4NjI3NywgMHg3MjU2LFxuICAweGI1ZWEsIDB4YTVjYiwgMHg5NWE4LCAweDg1ODksIDB4ZjU2ZSwgMHhlNTRmLCAweGQ1MmMsIDB4YzUwZCxcbiAgMHgzNGUyLCAweDI0YzMsIDB4MTRhMCwgMHgwNDgxLCAweDc0NjYsIDB4NjQ0NywgMHg1NDI0LCAweDQ0MDUsXG4gIDB4YTdkYiwgMHhiN2ZhLCAweDg3OTksIDB4OTdiOCwgMHhlNzVmLCAweGY3N2UsIDB4YzcxZCwgMHhkNzNjLFxuICAweDI2ZDMsIDB4MzZmMiwgMHgwNjkxLCAweDE2YjAsIDB4NjY1NywgMHg3Njc2LCAweDQ2MTUsIDB4NTYzNCxcbiAgMHhkOTRjLCAweGM5NmQsIDB4ZjkwZSwgMHhlOTJmLCAweDk5YzgsIDB4ODllOSwgMHhiOThhLCAweGE5YWIsXG4gIDB4NTg0NCwgMHg0ODY1LCAweDc4MDYsIDB4NjgyNywgMHgxOGMwLCAweDA4ZTEsIDB4Mzg4MiwgMHgyOGEzLFxuICAweGNiN2QsIDB4ZGI1YywgMHhlYjNmLCAweGZiMWUsIDB4OGJmOSwgMHg5YmQ4LCAweGFiYmIsIDB4YmI5YSxcbiAgMHg0YTc1LCAweDVhNTQsIDB4NmEzNywgMHg3YTE2LCAweDBhZjEsIDB4MWFkMCwgMHgyYWIzLCAweDNhOTIsXG4gIDB4ZmQyZSwgMHhlZDBmLCAweGRkNmMsIDB4Y2Q0ZCwgMHhiZGFhLCAweGFkOGIsIDB4OWRlOCwgMHg4ZGM5LFxuICAweDdjMjYsIDB4NmMwNywgMHg1YzY0LCAweDRjNDUsIDB4M2NhMiwgMHgyYzgzLCAweDFjZTAsIDB4MGNjMSxcbiAgMHhlZjFmLCAweGZmM2UsIDB4Y2Y1ZCwgMHhkZjdjLCAweGFmOWIsIDB4YmZiYSwgMHg4ZmQ5LCAweDlmZjgsXG4gIDB4NmUxNywgMHg3ZTM2LCAweDRlNTUsIDB4NWU3NCwgMHgyZTkzLCAweDNlYjIsIDB4MGVkMSwgMHgxZWYwXG5dO1xuXG4vKipcbiAqIENvbnZlcnQgYSBzdHJpbmcgdG8gYSBVVEY4IGFycmF5IC0gZmFzdGVyIHRoYW4gdmlhIGJ1ZmZlclxuICogQHBhcmFtIHN0clxuICogQHJldHVybnMge0FycmF5fVxuICovXG52YXIgdG9VVEY4QXJyYXkgPSBmdW5jdGlvbiB0b1VURjhBcnJheShzdHIpIHtcbiAgdmFyIGNoYXI7XG4gIHZhciBpID0gMDtcbiAgdmFyIHAgPSAwO1xuICB2YXIgdXRmOCA9IFtdO1xuICB2YXIgbGVuID0gc3RyLmxlbmd0aDtcblxuICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY2hhciA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjaGFyIDwgMTI4KSB7XG4gICAgICB1dGY4W3ArK10gPSBjaGFyO1xuICAgIH0gZWxzZSBpZiAoY2hhciA8IDIwNDgpIHtcbiAgICAgIHV0ZjhbcCsrXSA9IChjaGFyID4+IDYpIHwgMTkyO1xuICAgICAgdXRmOFtwKytdID0gKGNoYXIgJiA2MykgfCAxMjg7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgKChjaGFyICYgMHhGQzAwKSA9PT0gMHhEODAwKSAmJiAoaSArIDEpIDwgc3RyLmxlbmd0aCAmJlxuICAgICAgICAoKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4RkMwMCkgPT09IDB4REMwMCkpIHtcbiAgICAgIGNoYXIgPSAweDEwMDAwICsgKChjaGFyICYgMHgwM0ZGKSA8PCAxMCkgKyAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4MDNGRik7XG4gICAgICB1dGY4W3ArK10gPSAoY2hhciA+PiAxOCkgfCAyNDA7XG4gICAgICB1dGY4W3ArK10gPSAoKGNoYXIgPj4gMTIpICYgNjMpIHwgMTI4O1xuICAgICAgdXRmOFtwKytdID0gKChjaGFyID4+IDYpICYgNjMpIHwgMTI4O1xuICAgICAgdXRmOFtwKytdID0gKGNoYXIgJiA2MykgfCAxMjg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHV0ZjhbcCsrXSA9IChjaGFyID4+IDEyKSB8IDIyNDtcbiAgICAgIHV0ZjhbcCsrXSA9ICgoY2hhciA+PiA2KSAmIDYzKSB8IDEyODtcbiAgICAgIHV0ZjhbcCsrXSA9IChjaGFyICYgNjMpIHwgMTI4O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1dGY4O1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIGludG8gYSByZWRpcyBzbG90IGhhc2guXG4gKiBAcGFyYW0gc3RyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG52YXIgZ2VuZXJhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdlbmVyYXRlKHN0cikge1xuICB2YXIgY2hhcjtcbiAgdmFyIGkgPSAwO1xuICB2YXIgc3RhcnQgPSAtMTtcbiAgdmFyIHJlc3VsdCA9IDA7XG4gIHZhciByZXN1bHRIYXNoID0gMDtcbiAgdmFyIHV0ZjggPSB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHRvVVRGOEFycmF5KHN0cikgOiBzdHI7XG4gIHZhciBsZW4gPSB1dGY4Lmxlbmd0aDtcblxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIGNoYXIgPSB1dGY4W2krK107XG4gICAgaWYgKHN0YXJ0ID09PSAtMSkge1xuICAgICAgaWYgKGNoYXIgPT09IDB4N0IpIHtcbiAgICAgICAgc3RhcnQgPSBpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2hhciAhPT0gMHg3RCkge1xuICAgICAgcmVzdWx0SGFzaCA9IGxvb2t1cFsoY2hhciBeIChyZXN1bHRIYXNoID4+IDgpKSAmIDB4RkZdIF4gKHJlc3VsdEhhc2ggPDwgOCk7XG4gICAgfSBlbHNlIGlmIChpIC0gMSAhPT0gc3RhcnQpIHtcbiAgICAgIHJldHVybiByZXN1bHRIYXNoICYgMHgzRkZGO1xuICAgIH1cblxuICAgIHJlc3VsdCA9IGxvb2t1cFsoY2hhciBeIChyZXN1bHQgPj4gOCkpICYgMHhGRl0gXiAocmVzdWx0IDw8IDgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdCAmIDB4M0ZGRjtcbn07XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBtdWx0aXBsZSBzdHJpbmdzIGludG8gYSByZWRpcyBzbG90IGhhc2guXG4gKiBSZXR1cm5zIC0xIGlmIG9uZSBvZiB0aGUga2V5cyBpcyBub3QgZm9yIHRoZSBzYW1lIHNsb3QgYXMgdGhlIG90aGVyc1xuICogQHBhcmFtIGtleXNcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlTXVsdGkgPSBmdW5jdGlvbiBnZW5lcmF0ZU11bHRpKGtleXMpIHtcbiAgdmFyIGkgPSAxO1xuICB2YXIgbGVuID0ga2V5cy5sZW5ndGg7XG4gIHZhciBiYXNlID0gZ2VuZXJhdGUoa2V5c1swXSk7XG5cbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBpZiAoZ2VuZXJhdGUoa2V5c1tpKytdKSAhPT0gYmFzZSkgcmV0dXJuIC0xO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/cluster-key-slot/lib/index.js\n");

/***/ })

};
;