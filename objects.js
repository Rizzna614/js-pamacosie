let masina = {marka: "toyota", modelis: "camry", gads: 2010};

console.log(masina.marka);
//console.log(masina[0]);  sitais nestradas
//console.log(masina[marka]);   sitais ari nestradas
console.log(masina["marka"]);    //sitais gan stradas, ja lieto bracket notation vajag ari pedinas laikam.



if (masina.gads > 2015) 
{
       console.log("Auto ir jaunāks par 10 gadiem")
} else 
{
       console.log("Auto ir vecāks par 10 gadiem")
};
