var debounce = (function(){
    var timeout;
    var counter = 0;
    return function(callback,time) {
        return function(){
            clearTimeout(timeout);
            timeout = setTimeout(callback,time);
        //console.log(timeout);   
        }
    }
}());


/*debounce();
debounce();
debounce();
*/
var my_debounce = debounce(function(){console.log('true')}, 500);
my_debounce();
my_debounce();
my_debounce();
my_debounce();
my_debounce();

setTimeout(function(){ 
    my_debounce(); 
}, 1000);
