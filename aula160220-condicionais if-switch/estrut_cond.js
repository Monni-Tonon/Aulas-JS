//Estruturas de condição

let lang = "pt"; // pt, es, en

if(lang === "pt"){
    console.log("Olá, mundo!");
} else if(lang === "es"){
    console.log("Hola, mundo!");
} else if(lang ==="en"){
    console.log("Hello, World!");
} else{
    console.log("Não há suporte para esse idioma. :'( Desculpe.");
}

// uma forma de realizar essa verificação, usando o SWITCH - CASE. usado mais para comparações e nao condições, como da pra usar no IF.
switch(lang){
    case "pt":
        console.log("Olá, mundo!");
        break;
    case "es":
        console.log("Hola, mundo!");
        break;
    case "en":
        console.log("Hello, world!");    
        break;
    default:
        console.log("Não há suporte para o idioma " + lang);
}