// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';


var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
//I: function takes unidentified value as param
//O: function returns into value
//C: none
//E: none
//init function with one param
_.identity = function(value){
    //return input value
    return value;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
//I: function takes one unidentified value 
//O: function returns type of value as a string
//C: none
//E: none 

_.typeOf = function(value){
    //create conditional stmt to determine type
    if( typeof value === 'string'){
        return 'string';
    }
    if(Array.isArray(value) === true){
        return 'array';
    }
    if(typeof value === 'object' && Array.isArray(value) === false && value !== null && value instanceof Date === false){
        return 'object';
    } 
    if( typeof value === 'undefined'){
        return 'undefined';
    }
    if( typeof value === 'number'){
        return 'number';
    }
    if( typeof value === 'boolean'){
        return 'boolean';
    }
     if(value === null){
        return 'null';
     }
     if( typeof value === 'function'){
        return 'function';
    }
    if(value instanceof Date === true){
        return 'date';
    }

};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
//I: function takes an array and a number as param
//O: function returns empty array if array is not an array,If <number> is not given or not a number, return just the first element in <array>.
// Otherwise, return the first <number> items of <array>
//C: none
//E: negative numbers, number is greater than array length 

_.first = function(array, num){
    // create conditional stmts to determine if array param  is empty
    if(Array.isArray(array) === false){
        return []; //return empty array
    };
    //if num is neg return empty array
    if(typeof num === 'number' && num < 0){
        return [];
    };
    //create conditional stmts to return first element in array if num is not a num or not given
    if(typeof num !== 'number' && num === undefined){
        return array[0];// return first index of the array
    };
        //else return the number of items that matches num
    if(typeof num === 'number'){
            return array.slice(0, num );
        };

    //if number is larger than array return the full array
    if(num > array.length){
        return array;
    }
     
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
//I: function takes an array and a number as param
//O: function returns empty array if array is not an array,If <number> is not given or not a number, return just the last element in <array>.
// Otherwise, return the last <number> items of <array>
//C: none
//E: negative numbers, number is greater than array length 

_.last = function(array, num){
       // create conditional stmts to determine if array param  is empty
       if(Array.isArray(array) === false){
        return []; //return empty array
    };
    //if num is neg return empty array
    if(typeof num === 'number' && num < 0){
        return [];
    };
    //create conditional stmts to return last element in array if num is not a num or not given
    if(typeof num !== 'number' && num === undefined){
        return array[array.length - 1];// return last index of the array
    };
    //else return the number of items that matches num
    if(typeof num === 'number'){
            return array.slice(- num)
        };

    //if number is larger than array return the full array
    if(num > array.length){
        return array;
    }
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//I: function takes two params an array and a value
//O: return the index of array(number) that is the first occurance of value, return -1 if value is not in the array
//C: Do not use [].indexOf()!
//E: What if <array> has multiple occurances of val? What if <val> isn't in <array>?

_.indexOf = (array, value) => {
    // create conditional stmt to determine if the value is in the array
    if(array.includes(value)){
        //iterate over the array
        for(let i = 0; i < array.length; i++){
            //create conditional stmt to return the index of the first occurence of an element
            if( value === array[i]){
                return i; 
        }
    } 
}else{ // if array does not include value return -1
        return -1;
}

}
   

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
// I: function takes an array and a value as the params
//O: return true if input array contains input value, returns false if input array does not contain input value
//C: must use ternary ? operator
//E: no value given, or === is used 
_.contains = (array, value) =>  {return  array.includes(value) ? true : false;};
    //return the value of true or false based on if input value is included in the array
   
    

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
//I: function takes a collection and a function as it's params
//O: input function is called with each element or property
//C: none
//E: none
// determine if collection is array or object
_.each = (collection, func) => {
    if(Array.isArray(collection)){
        // iterate over array
            for(let i = 0; i < collection.length; i++){
                // call input function
                func(collection[i], i, collection);
            }

        } else{ 
               // iterate ove the colection object
                for(let key in collection){
                    //invoke input function
                    func(collection[key], key, collection);
             }
    
};

}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
//I: function takes an array as param
//O: return new array with duplicates from the input array removed
//C: must use indexof
//E:none
_.unique = (array) => {
    //init variable assigned to empty array
    const output = [];
 // iterate over the array to isolate elements
 for( let i = 0; i < array.length; i++){
    // set up conditional statement to compare indexes of array[i] to results of invoking function
    if(_.indexOf(array, array[i]) === i){
        // push element into the new arrat
      output.push(array[i]);
    }
}
//return output
return output;
}
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
//I: function takes two params an array and function
//O: function returns a new array of elements which calling function = true
//C: none
//E: what if input function does not return true or false 
_.filter = function(array, func){
    //declare output array and initilize as empty
    const output = [];
        //init for loop to iterate over the input array
        for(let i = 0; i < array.length; i++){
            //create conditional stmt to determine if passing each element passed into the callback is  true or false
            if(func(array[i], i, array)){
                //push true items into array
                output.push(array[i]);
            }
           
        }//return output
        return output;
        console.log(_.filter(['alex', 'aaron','carter'], function(str){
            return str(0);
        }))
                
    
    };


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
//I: function takes two params an array and function
//O: function returns a new array of elements which calling function = false
//C: none
//E: what if input function does not return true or false 
_.reject = (array, func) => {
    //declare output array and initilize as empty
    const output = [];
        //init for loop to iterate over the input array
        for(let i = 0; i < array.length; i++){
            //create conditional stmt to determine if passing each element passed into the callback is  true or false
            if(!func(array[i], i, array)){
                //push true items into array
                output.push(array[i]);
            }
           
        }//return output
        return output;
    
        };
                
    



/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
//I: function that takes an array and a function as its params
//O: return an array made up of two sub arrays that has truthy values in one array and falsey values in the other array
//C: none
//E: This is going to return an array of arrays.
_.partition = (array, func) => {

// create the output array
const output = []; 
// create to subarray holders
let subArray1 = [];
let subArray2 = [];
//declare output array and initilize as empty

for(let i = 0; i < array.length; i++){
    //create conditional stmt to determine if passing each element passed into the callback is  true or false
    func(array[i], i, array) ? subArray1.push(array[i]) : subArray2.push(array[i])
    //push true items into array
}
//push subArray1 and push subArray1 to output
output.push(subArray1, subArray2);

  //return output
 return output;
    };
   

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
//I: function takes a collecion and a function as params
//O: return new array containing results of invoking the callback on each item
//C:none
//E: make sure it works for objects
_.map = function (collection, func){
    // declare var and init as empty array
    const output = [];
    // determine if it is an array
        if(Array.isArray(collection)){
        // iterate over array
            for(let i = 0; i < collection.length; i++){
                //push the results from invoking the callback funtion into the output array
                output.push(func(collection[i], i, collection));
            }

        } else{ 
               // iterate ove the colection object
                for(let key in collection){
                    //push the results from invoking the callback funtion into the output array
                    output.push(func(collection[key], key, collection));
             }
    }
        return output;
};



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given? evaluate results to see if the result is truthy or falsey
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
//I: function takes two params collection(either object or array), function
//O: return true if every element is true, return false if one element is false, return true or false if callback  is not provided or if function returns are not a boolean
//C:none
//E: callback function doesn't return a boolean,callback function is not given
_.every = function(collection, func){
// determine if collection is array or object
    if(Array.isArray(collection)){
        // nested if determine if there is a callback
        if(func === undefined){
            //iterate over collection 
            for(let i = 0; i < collection.length; i++){
                if(!collection[i]){ 
                    return false;
                }else{
                return true;
                }
            }
        
        }else {// callback function is present iterate over collection 
            for(let i = 0; i < collection.length; i++){
                // create conditional stmt invoke callback function to see if results are true or false
                 if(!func(collection[i], i, collection)){
                    return false
                }   
                } return true;
            
        } 
    } else{//collection is object
        if(func === undefined){//determine if there is a callback was
            //iterate over collection 
                for(let key in collection){
                    if(!collection[key]){ 
                        return false;
                    }else{
                        return true;
                }
            }

        }else {// callback function is present iterate over collection 
            for(let key in collection){
                // create conditional stmt invoke callback function to see if results are true or false
                if(!func(collection[key], key , collection)){
                    return false
                }
            } return true
        }
    }
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
//I: function takes two params collection(either object or array), function
//O: return true if one element is true, return false if every element is false, return true or false if callback  is not provided or if function returns are not a boolean
//C:none
//E: callback function doesn't return a boolean,callback function is not given
_.some = function(collection, func){
    // determine if collection is array or object
        if(Array.isArray(collection)){
            // nested if determine if there is a callback
            if(func === undefined){
                //iterate over collection 
                for(let i = 0; i < collection.length; i++){
                    if(collection[i]){ 
                        return true;
                    }else{
                    return false;
                    }
                }
            
            }else {// callback function is present iterate over collection 
                for(let i = 0; i < collection.length; i++){
                    // create conditional stmt invoke callback function to see if results are true or false
                     if(func(collection[i], i, collection)){
                        return true;
                    }   
                    } return false;
                
            } 
        } else{//collection is object
            if(func === undefined){//determine if there is a callback was
                //iterate over collection 
                    for(let key in collection){
                        if(collection[key]){ 
                            return true;
                        }else{
                            return false;
                    }
                }
    
            }else {// callback function is present iterate over collection 
                for(let key in collection){
                    // create conditional stmt invoke callback function to see if results are true or false
                    if(func(collection[key], key , collection)){
                        return true
                    }
                } return false
            }
        }
    }


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
// is the equivalent 
//_.extend = (target,...objects) =>{

//};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}