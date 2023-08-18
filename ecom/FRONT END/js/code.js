function search_btn(){
    var inputs=document.querySelectorAll('#search_btn');
    for (var i=0;i<inputs.length;i++){
        inputs[i].addEventListener('click',function(){
            document.getElementById('search_box').value='';
        })
    }
}