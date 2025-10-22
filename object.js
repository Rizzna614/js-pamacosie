let book = {grāmata: {title: "Mazais Princis", author: "Antoine de Saint-Exupéry", pages: 96}};





console.log(book.grāmata.title);

//book.grāmata.pages = 100  ---------ar dot notation

//console.log(book.grāmata.pages)    -------------- ar dot notation

book["grāmata"]["pages"] = 100;        // ------------------ ar bracket notation

console.log(book["grāmata"]["pages"]); // ---------------------- ar bracket notation


if (book.grāmata.pages > 300) 
{
     console.log("grāmata ir garāka par 300 lapaspusēm")
} else 
{
      console.log("grāmata nav garāka par 300 lapaspusēm")
};


