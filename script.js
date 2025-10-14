function generateNumber(){
    const primeiro = Math.ceil(document.querySelector('.primeiro-input').value) // 
    const segundo = Math.floor(document.querySelector('.segundo-input').value)

    if(primeiro >= segundo){
        alert('este número precisa ser menor')

    }
    else{
    const result = Math.floor(Math.random() * (segundo - primeiro + 1)) + primeiro;
    alert(result)


    }




} 