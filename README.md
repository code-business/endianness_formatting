# endianness_formatting

A package for rearranging hexadecimal string based on endianness.

**endianness_formatting APIs**

1. _getFormattedEndianness(hexString,endianness)_

   Rearranges hexadecimal string based on endianness.Returns a string.

   **Parameters**

   - hexString: hexadecimal string
   - endianness: order of hexadecimal digits needed in output.It can take the following values:

     1. "Mid-Little Endian": similar to Little Endian but consecutive positions are swapped(eg. 1st swapped with 2nd,3rd swapped with fourth and so on).
     2. "Little Endian": least significant byte/bytes at the start and most significant byte/bytes at the end(ascending order).
     3. "Mid-Big Endian": similar to Big Endian but consecutive positions are swapped(eg. 1st swapped with 2nd,3rd swapped with fourth and so on).
     4. "Big Endian": most significant byte/bytes at the start and least significant byte/bytes at the end(descending order).

   **Example**

   ```
   const { getFormattedEndianness } = require('endianness_formatting');
   //less than or equal to 8 digits
   let hexString_8 = "1326485b";
   //greater than 8 digits but less than or equal to 16 digits
   let hexString_16 = "1326485b83a2742b";
   let endianness = "Little Endian"; //descending order
   let result_8 = getFormattedEndianness(hexString_8, endianness);
   let result_16 = getFormattedEndianness(hexString_16, endianness);
   console.log("result_8 = ",result_8);
   console.log("result_16 = ",result_16);
   ```

   **Output**

   result_8 = 5b482613
   result_16 = 742b83a2485b1326
