const { getFormattedEndianness } = require("hex_formatting");
let hexString = "1326485b83a2742b";
let endianness = "Little Endian";

let result = getFormattedEndianness(hexString, endianness);
console.log(result);
