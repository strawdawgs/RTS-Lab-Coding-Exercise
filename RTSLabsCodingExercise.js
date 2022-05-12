// For the RTS Lab Coding Exercise

/*

1. aboveBelow
   - accepts two arguments
     - An unsorted collection of integers (the list)
     - an integer (the comparison value)
   - returns a hash/object/map/etc. with the keys "above" and "below" with the corresponding count of integers from the list that are above or below the comparison value

   Example usage:

   input: [1, 5, 2, 1, 10], 6

   output: { "above": 1, "below": 4 }

*/

function aboveBelow(intList, compValue){

  if(intList == null || intList.length == 0 || compValue == null)
    return null;

  let map = new Map();
  map.set("above", 0);
  map.set("below", 0);

  for(let i=0; i<intList.length; i++){
      if(compValue > intList[i])
          map.set("below", map.get("below")+1);
      else if(compValue < intList[i])
          map.set("above", map.get("above")+1);
  }

  return map;
}

console.log("Test Cases for problem 1:");
console.log("1. [1,5,2,1,10], 6: ", aboveBelow(new Array(1, 5, 2, 1, 10), 6));
console.log("2. null, 6: ", aboveBelow(null, 6));
console.log("3. [1,5,2,1,10], null: ", aboveBelow(new Array(1, 5, 2, 1, 10), null));
console.log("4. empty, empty: ", aboveBelow());
console.log("5. [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10: ", 
            aboveBelow(new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), 10));

/*

2. stringRotation
   - accepts two arguments
     - a string (the original string)
     - a positive integer (the rotation amount)
   - returns a new string, rotating the characters in the original string to the right by the rotation amount and have the overflow appear at the beginning

   Example usage:

   input: "MyString", 2

   output: "ngMyStri"

*/

function stringRotation(str, num){

  if(str == null || str.length == 0 || num == null)
    return null;

  if(num%str.length==0)
    return str;

  num = str.length - (num%str.length);
  var newStr = "";

  for(let i=0; i<str.length; i++){
    newStr += str[num];
    num++;
    num = num%str.length;
  }

  return newStr;
}

console.log("Test Cases for problem 2:");
console.log("1. myString, 2: ", stringRotation("myString", 2));
console.log("2. null, 2: ", stringRotation(null, 2));
console.log("3. myString, null: ", stringRotation("myString", null));
console.log("4. my, String, 20: ", stringRotation("my, String", 20));
console.log("5. my, String, 23: ", stringRotation("my, String", 23));