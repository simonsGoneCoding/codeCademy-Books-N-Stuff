class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // --------- getters:
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  //----------- setters:
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  //----------- methods:
  toggleCheckOutStatus() {
    return (this._isCheckedOut = !this._isCheckedOut);
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce((a, b) => a + b);
    const lengthOfArray = this.ratings.length;
    return ratingsSum / lengthOfArray;
  }

  addRating(rating) {
    return this.ratings.push(rating);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  //getters:
  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
}

const historyOfEverything = new Book(
  "A Short History of Nearly Everything",
  "Bill Boryson",
  544
);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
