class Book {
  constructor(titlu, autor, editura, an) {
    this.titlu = titlu;
    this.autor = autor;
    this.editura = editura;
    this.an = an;
  }
}

let book1 = new Book("Beginning HTML and CSS", "Rob Larsen", `"Wrox"`, 2013);
let book2 = new Book("Jump Start PHP", "Callum Hopkins", `"SitePoint"`, 2013);
let book3 = new Book(
  "Build Your Own Website",
  "Ian Lloyd",
  `"SitePoint"`,
  2008
);
let book4 = new Book(
  "Head First HTML and CSS, 2nd Edition",
  "E.Robson, E.Freeman",
  `"O'Reilly Media"`,
  2012
);
let book5 = new Book(
  "Learning PHP, MySQL, JavaScript, CSS & HTML5, 3rd Edition",
  "Robin Nixon",
  `"O'Reilly Media"`,
  2014
);
let booksArray = [book1, book2, book3, book4, book5];

console.log(booksArray);

// const paragrafCarte1 = document.getElementById("paragraf-carte1");
// const paragrafCarte2 = document.getElementById("paragraf-carte2");
// const paragrafCarte3 = document.getElementById("paragraf-carte3");

const paragrafCarti = document.querySelectorAll("p");

// paragrafCarte1.innerHTML =
//   booksArray[0].titlu + ", " + booksArray[0].autor + ", " + booksArray[0].an;

// paragrafCarte2.innerHTML =
//   booksArray[1].titlu + ", " + booksArray[1].autor + ", " + booksArray[1].an;

// paragrafCarte3.innerHTML =
//   booksArray[2].titlu + ", " + booksArray[2].autor + ", " + booksArray[2].an;

for (i = 0; i < booksArray.length; i++) {
  paragrafCarti[i].innerHTML =
    booksArray[i].titlu +
    ", " +
    booksArray[i].autor +
    ", " +
    booksArray[i].editura +
    ", " +
    booksArray[i].an;
}

const changeBtn = document.getElementById("change-btn");

let verificare = 0;
changeBtn.addEventListener("click", function () {
  if (verificare === 0) {
    for (i = 0; i < booksArray.length; i++) {
      paragrafCarti[i].innerHTML =
        booksArray[i].an +
        ", " +
        booksArray[i].titlu +
        ", " +
        booksArray[i].autor +
        ", " +
        booksArray[i].editura;
    }
    verificare = 1;
  } else {
    for (i = 0; i < booksArray.length; i++) {
      paragrafCarti[i].innerHTML =
        booksArray[i].titlu +
        ", " +
        booksArray[i].autor +
        ", " +
        booksArray[i].editura +
        ", " +
        booksArray[i].an;
    }
    verificare = 0;
  }
});
