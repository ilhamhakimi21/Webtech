
var people = [
{name: ['Alyssa', 'P.', 'Hacker'], age: 26},
{name: ['Ben', 'L.','Bitdiddle'], age: 34},
{name: ['Eva','Lu', 'Ator'], age: 40},
{name: ['Lem', 'E.','Tweakit'], age: 45},
{name: ['Louis','M.','Reasoner'], age: 21},
{name: [ 'Shahan','Haig','Krakirian'], age: 26}
];

let namelistbtn = document.getElementById("all");
let getagebtn = document.getElementById("age-button");
let nameinput = document.getElementById("name-input");

namelistbtn.addEventListener('click', fullNamelist);
getagebtn.addEventListener('click', getAgefunction);

function fullNamelist() {
  let s = " ";

  for(let i=0;i<people.length;i++){
s += i+1+"- ";
    for(let j=0;j<3;j++){
s += people[i].name[j]+' ';
}
s += "<br/>";
}

document.getElementById("solution").innerHTML = s ;
}

function getAgefunction() {
for (let i = 0; i<people.length; i++) {
  if(nameinput.value == people[i].name[0]){
  document.getElementById("solution1").innerHTML = people[i].age ;
  }
}


}


// document.getElementById("solution").innerHTML = s;


// 4. Create function getAgefunction to retrieve the age by input the first name.
// 5. Create an event listener for the two buttons to retrieve the result as below
// Tips: Use nested loop for “Print All People Details”
