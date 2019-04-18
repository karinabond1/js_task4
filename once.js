var once = function(callback){
    var runned = false;
    return function(){
        if(runned){
            return ;
        }
        runned =  true;
        return callback();
        
     }
};

var once1 = once(function(){console.log('true')});
once1();
once1();
once1();
