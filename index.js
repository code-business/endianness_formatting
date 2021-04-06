/**
 * Rearranges hexadecimal string based on value of endianness and data type
 * @param {string} hexString - hexadecimal string
 * @param {string} endianness - order of hexadecimal bytes needed in output
 * @param {string} dataType - data type of hexadecimal string
 * @returns {string} hexadecimal string rearranged based on endianness and data type
 */
const getFormattedEndianness = (hexString, endianness, dataType) => {
  let hexArray, mapper;
  //convert string into array of 4 elements(FLOAT) or 2 elements(INT).
  if (hexString.length % 2 !== 0) {
    hexString = "0" + hexString;
  }
  let len = hexString.length;
  if (
    dataType === "FLOAT" ||
    dataType === "DINT" ||
    dataType === "UDINT" ||
    dataType === "DWORD" ||
    dataType === "TOD" ||
    dataType === "DATE" ||
    dataType === "TIME"
  ) {
    for (let i = 0; i < 8 - len; i++) {
      hexString += "0";
    }
    hexArray = hexString.match(/.{1,2}/g);
  } else if (dataType === "REAL" || dataType === "LREAL") {
    for (let i = 0; i < 16 - len; i++) {
      hexString += "0";
    }
    hexArray = hexString.match(/.{1,4}/g);
  } else {
    for (let i = 0; i < 4 - len; i++) {
      hexString += "0";
    }
    hexArray = hexString.match(/.{1,2}/g);
  }

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
  } else {
    switch (endianness) {
      case "Mid-Little Endian":
        mapper = [1, 0];
        return mapper.map((i) => hexArray[i]).join("");

      //For any other case(Eg. Big Endian), we return the string as it is
      default:
        return hexString;
    }
  }
};

/**
 * @module endianness_formatting
 */
module.exports = { getFormattedEndianness };
