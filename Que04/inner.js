const listOfBooksWithDetails = [
    {
      title:"Zanith",
      author:"George Orwell",
      year:1949
    },
    {
        title:"Pride and Prejudice",
        author:"Jane Austen",
        year:1813
    },
    {
        title:"The Catcher in the Rye",
        author:"J.D Salinger",
        year:1951
    },
    {
        title:"The Great and Gatsby",
        author:"Scott",
        year:1925
    }
]

function listOfBook(bookList,arrInAlphabet){
     let titleOfTheBook = bookList.map((books)=>{
        return books.title
    })
    
   arrInAlphabet(titleOfTheBook)
    
}
listOfBook(listOfBooksWithDetails,arrangeInAlphabetOrder)

function arrangeInAlphabetOrder(titleOfTheBook){

    console.log(titleOfTheBook.sort())
 
}