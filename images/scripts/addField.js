//procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)

function cloneField(){
    //duplicar os campos 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //colocar na pagina

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field){
        field.value = "";
    })
    document.querySelector('.schedule-item').appendChild(newFieldContainer)

}