const desc = document.querySelector("#descricao");

console.log(desc);

desc.addEventListener("keypress", function(e){
    //console.log("digitou");

    const inputLength = desc.value.length;
    const maxChars = 20;

    if(inputLength >= maxChars){
        e.preventDefault();
        console.log("Maximo aceito 20 caracteres");
    }
});