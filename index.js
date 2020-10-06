exports.handler = async (event, context, callback) => {
    // TODO implement
    console.log(event)
    const reversedKey = event.key1.split("").reverse().join("")
    let result
    if (reversedKey === event.key1) {
         result = true
    } else {
         result = false
    }; 
    console.log(result); 
    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return response;
};


//In amazon lambda go to "configure test events" and add

{
    "key1": "value"
    //your value will be what you are testing. We were testing whether or not
    //something was a palindrome in this case so you can insert
    //"racecar" or "hannah" or "radar" for 'true' test cases
    //and "popcorn" or "supercalifragalisticexpialidocious" for 'false' test cases
    
}