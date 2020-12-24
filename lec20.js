(function demo(){
    console.log('Hello world');
})();

var sum = (function(){
    return 10+20;
})();

var controller = (function(){
    var a= {
        name:'Alamin Azad',
        uid:2015160104
    };
    return a;
})();
var interface = (function(){
    return 'Hello '+ controller.name;
})();

{
    let a=10;
    let b=5;
    const pi=3.1416;
    console.log(a+b+pi);
}
//console.log(b);