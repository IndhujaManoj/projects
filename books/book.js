let books=document.querySelectorAll('.my-books')
let purchased=[]

//console.log(books)
books.forEach(book=>{
    book.addEventListener('click',()=>{
        bookimg=book.innerHTML;
        console.log(bookimg)
        if(!purchased.includes(bookimg)){
            purchased.push(bookimg)
            book.innerHTML=''
        }
document.getElementById('purchase').innerHTML=purchased;

    })

})