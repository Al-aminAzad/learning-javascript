function name(firstname, lastname, gender)
{
    var output;
    if(gender === 'male')
    {
        output = 'Mr.' + ' ' + firstname + ' ' + lastname;
    }else if(gender ==='female')
    {
        output = 'Ms.' + ' ' + firstname + ' ' + lastname;
    }
    return output;
}
var result = name('Alamin','Azad','male');
console.log(result);
function example() {
  return {
    name: "Alamin",
    skill: ["PHP", "Javascript"],
    print: function () {
      console.log(this.name, this.skill);
    },
  };
}
var obj = example();
console.log(obj.print());
