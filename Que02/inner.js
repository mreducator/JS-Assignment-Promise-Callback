let string = "hello, world";

function mainupulateString(str,logString){
    let upperCase = str.toUpperCase();
    return logString(upperCase)
}
mainupulateString(string, logStrings)
function logStrings(str){
    console.log(str)
}