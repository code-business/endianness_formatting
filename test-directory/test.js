const { getFormattedEndianness } = require("hex_formatting");
let hexString = "1326485b83a2742b1";
let endianness = "Little Endian";

let result = getFormattedEndianness(hexString, endianness);
console.log(result);
