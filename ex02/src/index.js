// Only change code below this line

class Book{
    constructor(title){
        this.title = title;
    }    
    set title(newTitle) {
        this._title = newTitle;                
    }
    get title(){
    return this._title;
    }


}

// Only change code above this line
const littlePrince = new Book("The Little Prince"); // Change this line
console.log(littlePrince.title); // The Little Prince
littlePrince.title = "Le Petit Prince"; // Change this line
console.log(littlePrince.title); // Le Petit Prince
module.exports = Book;