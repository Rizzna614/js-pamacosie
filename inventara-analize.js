
let izpardosanaAtlaid = [];
let eletrnoikaFunc = [];
let kopejaVertiba = 0;
let precuSaraksts = 
{
  1: {nosaukums: "Krekls", kategorija: "Apģērbs", cena: 20, noliktavas_daudzums: 5},
  2: {nosaukums: "Bikses", kategorija: "Apģērbs", cena: 25, noliktavas_daudzums: 3},
  3: {nosaukums: "Televizors", kategorija: "Elektronika", cena: 300, noliktavas_daudzums: 4},
  4: {nosaukums: "Telefons", kategorija: "Elektronika", cena: 200, noliktavas_daudzums: 9},
  5: {nosaukums: "Mazais Princis", kategorija: "Grāmata", cena: 50, noliktavas_daudzums: 6},
  6: {nosaukums: "Veļasmašīna", kategorija: "Elektronika", cena: 500, noliktavas_daudzums: 2},
  7: {nosaukums: "Enciklopēdija", kategorija: "Grāmata", cena: 60, noliktavas_daudzums: 7},
  8: {nosaukums: "Zeķes", kategorija: "Apģērbs", cena: 5, noliktavas_daudzums: 20},

};

for (let i = 1; i <= Object.keys(precuSaraksts).length; i++) 
{
  
  kopejaVertiba = precuSaraksts[i].cena * precuSaraksts[i].noliktavas_daudzums + kopejaVertiba

      if (precuSaraksts[i].kategorija == "Elektronika") 
    {
            eletrnoikaFunc = precuSaraksts[i].nosaukums + "; " + eletrnoikaFunc
    }

    if (precuSaraksts[i].noliktavas_daudzums < 5 && precuSaraksts[i].kategorija != "Grāmata") 
    {
           izpardosanaAtlaid = precuSaraksts[i].nosaukums + "; " + izpardosanaAtlaid
    }

  }

  console.log("Kopējā preču vērtība: " + kopejaVertiba);
  console.log("Elektronika: " + eletrnoikaFunc)
  console.log("Izpārdošanas atlaide tiks piemērota: " + izpardosanaAtlaid)
  



