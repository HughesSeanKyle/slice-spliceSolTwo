/*
Basic Algorithm Scripting: Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs

*/

//Solution Two

function frankenSplice(arr1, arr2, n) {                   //1
  // It's alive. It's alive!
  let localArr = arr2.slice();                            //2
  localArr.splice(n, 0, ...arr1);                         //3
  return localArr;                                        //4
}


console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
//Output           = [ 4, 1, 2, 3, 5, 6 ]


//Notes
/*
//1

A function that takes in three arguments:
Arg1: Array
Arg2: Array
Arg3: Integer

//2

Creates a copy of arr2 via the slice method and stores it in a variable. 
As the slice method has no argments the array will be 'sliced' in it's complete form. Therefore making a copy of the entire array.

//3

The splice method will now allow mutation of the localArr (Copy of arr2). 
The splice method has three arguments:
Arg1: At which postition to add new elements
Arg2: At which point should items in the localArr be removed
Arg3: What elements should be added/mutated into the localArr

As 'n' is 1 in this scenario the first addition of new elements will be inserted after 4 in localArr

No items will be deleted as indicated by the 0

The `...` is the spread operator which will make it possible to use each element in the arr1 array as an argument. This makes it possible to add in the 1, 2, 3 in its original sequence after the 4 in localArr. 

//4

The local array is returned with all mutated elements
//Output           = [ 4, 1, 2, 3, 5, 6 ]
*/

