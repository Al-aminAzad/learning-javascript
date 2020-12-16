// var arr =  [200,3,50,40,99,23,100];
// arr.sort(function(a,b)
// {
//     return b-a;
// });
// console.log(arr);

var people = [
    {name:'Alamin',age:25},
    {name: 'Chinmoy',age:18},
    {name:'Babli',age:24},
    {name:'Tushar',age:16},
    {name:'Mr x',age:35},
    {name:'Mr y',age:31}
];
// people.sort(function(a,b){
//     return a.age-b.age;
// });
people.sort(function(a,b){
    if(a.name>b.name)
    {
        return 1;
    }else if(a.name<b.name)
    {
        return -1;
    }else
    {
        return 0;
    }
});
console.log(people);