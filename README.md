# endianness_formatting

A package for rearranging hexadecimal string based on endianness.

**hex_formatting APIs**

1. _getFormattedEndianness(hexString,endianness)_

   Rearranges hexadecimal string based on endianness.Returns a string.

   **Parameters**

   - hexString: hexadecimal string
   - endianness: order of hexadecimal digits needed in output.It can take the following values:

     1. "Mid-Little Endian": similar to Little Endian but 1st position is swapped with 2nd position and 3rd position is swapped with 4th position.
     2. "Little Endian": least significant byte at the start and most significant byte at the end(ascending order).
     3. "Mid-Big Endian": similar to Big Endian but 1st position is swapped with 2nd position and 3rd position is swapped with 4th position.
     4. "Big Endian": most significant byte at the start and least significant byte at the end(descending order).

   **Example**

   ```
   const { getFormattedEndianness } = require('hex_formatting');

   let hexString = "1326485b";
   let endianness = "Little Endian";
   let result = getFormattedEndianness(hexString, endianness);
   console.log(result);
   ```

   **Output**

   5b482613
