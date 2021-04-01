# endianness_formatting

A package for rearranging hexadecimal string based on endianness.

**endianness_formatting APIs**

1. _getFormattedEndianness(hexString,endianness,dataType)_

   Rearranges hexadecimal string based on endianness and data type.Returns a string.

   **Parameters**

   - hexString: hexadecimal string
   - dataType: data type of hexadecimal string
   - endianness: order of hexadecimal digits needed in output.It can take the following values:

   dataType: "FLOAT":

   1. "Mid-Little Endian": similar to Little Endian but consecutive positions are swapped(eg. 1st swapped with 2nd,3rd swapped with fourth and so on).
   2. "Little Endian": least significant byte/bytes at the start and most significant byte/bytes at the end(ascending order).
   3. "Mid-Big Endian": similar to Big Endian but consecutive positions are swapped(eg. 1st swapped with 2nd,3rd swapped with fourth and so on).

   dataType: "INT":

   1. "Mid Little Endian": least significant byte/bytes at the start and most significant byte/bytes at the end(ascending order).

   **Note** : hexString length limit is 8 digits for "FLOAT" dataType and 4 digits for "INT" dataType

   **Example**

   ```
   const { getFormattedEndianness } = require('endianness_formatting');
   //data type: "FLOAT"
   let hexString_F = "1326485b";
   let endianness_F = "Little Endian"; //descending order
   let result_F = getFormattedEndianness(hexString_F, endianness_F,"FLOAT");
   //data type: "INT"
   let hexString_I = "13b5";
   let endianness_I = "Mid-Little Endian";
   let result_I = getFormattedEndianness(hexString_I, endianness_I,"INT");
   console.log("result_F = ",result_F);
   console.log("result_I = ",result_I);
   ```

   **Output**

   result_F = 5b482613
   result_I = b513
