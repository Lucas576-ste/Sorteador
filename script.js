function generateNumber(){
    const primeiro = Math.ceil(document.querySelector('.primeiro-input').value) // 
    const segundo = Math.floor(document.querySelector('.segundo-input').value)

    const result = Math.floor(Math.random() * (segundo - primeiro + 1)) + primeiro;

    alert(result)


} 