
let primeiro = document.querySelectorAll("td")[0];
let segundo = document.querySelectorAll("td")[1];
let terceiro = document.querySelectorAll("td")[2];
let quarto = document.querySelectorAll("td")[3];
let quinto = document.querySelectorAll("td")[4];
let sexto = document.querySelectorAll("td")[5];
let setimo = document.querySelectorAll("td")[6];
let oitavo = document.querySelectorAll("td")[7];
let nono = document.querySelectorAll("td")[8];


let marcados = [];

function marcar(e) {
    
    if(marcados.length == 8){
        rodarSwitch(e);
    }else{
        rodarSwitch(e);
        maquinaMarcar();
    }
    
}

function maquinaMarcar(){

    let numero = gerarNumeroAleatorio();
    document.querySelectorAll("td")[numero].innerHTML = "O";

}

function gerarNumeroAleatorio(){

    let numero = Math.floor(Math.random() * (8 - 0 + 1) + 0);

    
    while(marcados.includes(numero)){
        console.log("while")
        numero = Math.floor(Math.random() * (8 - 0 + 1) + 0);
    }

    marcados.push(numero);
    return numero;
}






function rodarSwitch(e){

    switch(e.target.id){

        case'primeiro':
            primeiro.innerHTML = "x";
            primeiro.style.color = 'red';
            marcados.push(0);
        break;
        case'segundo':
            segundo.innerHTML = "x";
            segundo.style.color = 'red';
            marcados.push(1);
        break;
        case'terceiro':
            terceiro.innerHTML = "x";
            terceiro.style.color = 'red';
            marcados.push(2);
        break;
        case'quarto':
            quarto.innerHTML = "x";
            quarto.style.color = 'red';
            marcados.push(3);
        break;
        case'quinto':
            quinto.innerHTML = "x";
            quinto.style.color = 'red';
            marcados.push(4);
        break;
        case'sexto':
            sexto.innerHTML = "x";
            sexto.style.color = 'red';
            marcados.push(5);
        break;
        case'setimo':
            setimo.innerHTML = "x";
            setimo.style.color = 'red';
            marcados.push(6);
        break;
        case'oitavo':
            oitavo.innerHTML = "x";
            oitavo.style.color = 'red';
            marcados.push(7);
        break;
        case'nono':
            nono.innerHTML = "x";
            nono.style.color = 'red';
            marcados.push(8);
        break;
    }
}