let books=document.querySelectorAll('.my-books')
let purchased=[]
books.forEach(book=>{
    book.addEventListener('click',()=>{
        bookimg=book.innerHTML;//clicked img
        
        if(!purchased.includes(bookimg)){
            purchased.push(bookimg)
            book.innerHTML=''
        }
        
        
            
        
document.getElementById('purchase').innerHTML=purchased;

    })

})

l