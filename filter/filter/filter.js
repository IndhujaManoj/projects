const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');
const searchbox = document.querySelector('#search');
//search product by text box
searchbox.addEventListener('keyup', (e) => {
    searchText = e.target.value.toLowerCase().trim()
    boxes.forEach((box) => {
        const data = box.dataset.item
        if (data.includes(searchText)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none'
        }
    })
    buttons.forEach((button)=>{
        button.classList.remove('btn_clicked')
    })

    buttons[0].classList.add('btn_clicked')

})

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault()
        setActiveBtn(e);
        const btn_filter=e.target.dataset.filter;
        boxes.forEach((box=>{
            if(btn_filter=='all'){
                box.style.display='block';
            }else{
                const box_filter=box.dataset.item;
                if(btn_filter==box_filter){
                    box.style.display='block';
                }
                else{
                    box.style.display='none';

                }
            }
        }))
    })
})
function setActiveBtn(e){
    buttons.forEach((button)=>{
        button.classList.remove('btn_clicked')
    })
    e.target.classList.add('btn_clicked')
}