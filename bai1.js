let inputPonitOfPhysics;
let inputPointOfMaths;
let inputPointOfChemistry;
inputPonitOfPhysics = prompt("Enter the pointofphysics:");
inputPointOfMaths = prompt("Enter the pointofmaths:");
inputPointOfChemistry =prompt("Enter the pointofchemistry:");
let pointOfPhysics =parseInt(inputPonitOfPhysics);
let pointOfMaths = parseInt(inputPointOfMaths);
let pointOfChemistry = parseInt(inputPointOfChemistry);
let averageofsubjects = (pointOfPhysics + pointOfMaths + pointOfChemistry) /3 ;
let totalscore = pointOfPhysics+ pointOfMaths + pointOfChemistry
alert('Total score is :' + totalscore);
alert("Average of subjects is : " + averageofsubjects)


