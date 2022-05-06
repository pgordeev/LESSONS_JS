const myFavoriteFilm = {
  name: 'Достучаться до небес',
  prodDate: new Date(97, 0),
  director: 'Томас Ян',
  prodCountry: 'Германия',
};
myFavoriteFilm.fee = '$5710';
myFavoriteFilm.printName = () => {
  console.log(myFavoriteFilm.name);
};
// delete myFavoriteFilm.prodDate;
