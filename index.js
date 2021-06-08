/**
 * Rearranges hexadecimal string based on value of endianness
 * @param {string} hexString - hexadecimal string
 * @param {string} endianness - order of hexadecimal bytes needed in output
 * @returns {string} hexadecimal string rearranged based on endianness and data type
 */
const getFormattedEndianness = (hexString, endianness) => {
  let hexArray, mapper;

  if (hexString.length % 2 !== 0) {
    hexString = "0" + hexString;
  }

  hexArray = hexString.match(/.{1,2}/g);

  //apply switch case based on value of endianness to get rearranged hexadecimal string
  if (hexArray.length === 4) {
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
      //For any other case(Eg. Big Endian), we return the string as it is
      default:
        return hexString;
    }
  }
  else {
    return hexString
    // switch (endianness) {
    //   // case "Mid-Little Endian":
    //   //   mapper = [1, 0];
    //   //   return mapper.map((i) => hexArray[i]).join("");

    //   //For any other case(Eg. Big Endian), we return the string as it is
    //   default:
    //     return hexString;
    // }
  }
};

/**
 * @module endianness_formatting
 */
module.exports = { getFormattedEndianness };
