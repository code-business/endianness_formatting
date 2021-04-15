# endianness_formatting

A package for rearranging hexadecimal string based on endianness and data type.

**endianness_formatting APIs**

1. _getFormattedEndianness(hexString,endianness)_

   Rearranges hexadecimal string based on endianness.Returns a string.

   **Parameters**

   - hexString: hexadecimal string
   - endianness: order of hexadecimal digits needed in output.It can take the following values:

   **Example**

   ```
   const { getFormattedEndianness } = require('endianness_formatting');

   let hexString_F = "1326485b";
   let endianness_F = "Little Endian"; //descending order
   let result_F = getFormattedEndianness(hexString_F, endianness_F);

   console.log("result_F = ",result_F);
   ```

   **Output**

   result_F = 5b482613
