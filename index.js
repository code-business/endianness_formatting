/**
 * Rearranges hexadecimal string based on value of endianness
 * @param {string} hexString - hexadecimal string
 * @param {string} endianness - order of hexadecimal bytes needed in output
 * @returns {string} hexadecimal string rearranged based on endianness
 */
const getFormattedEndianness = (hexString, endianness) => {
  let hexArray, mapper;
  //If length of string is greater than 8, we make array with each element consisting of 4 digits(2 bytes) of the hexadecimal string.Else each element of array consists of 2 digits(1 byte).
  if (hexString.length > 8) {
    hexArray = hexString.match(/.{1,4}/g);
  } else {
    hexArray = hexString.match(/.{1,2}/g);
  }

  //apply switch case based on value of endianness to get rearranged hexadecimal string
  switch (endianness) {
    case "Mid-Little Endian":
      mapper = [2, 3, 0, 1];
      return mapper.map((i) => hexArray[i]).join("");
    case "Little Endian":
      mapper = [3, 2, 1, 0];
      return mapper.map((i) => hexArray[i]).join("");
    case "Mid-Big Endian":
      mapper = [1, 0, 3, 2];
      return mapper.map((i) => hexArray[i]).join("");
    case "Big Endian":
      mapper = [0, 1, 2, 3];
      return mapper.map((i) => hexArray[i]).join("");
  }
};

/**
 * @module - endianness_formatting
 */
module.exports = { getFormattedEndianness };
