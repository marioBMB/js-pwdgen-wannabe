
const nome = upperCaseFirst(prompt("Inserisci il tuo nome: ").trim());

if (nome == ""){
    alert("Hai inserito un nome vuoto. Riprova");
    window.location.reload();
}

const cognome = upperCaseFirst(prompt("Inserisci il tuo cognome: ").trim());

if (cognome == ""){
    alert("Hai inserito un cognome vuoto. Riprova da capo");
    window.location.reload();
}

let nomeCognome = nome + ' ' + cognome;

document.getElementById('welcome').innerHTML = `Benvenuto <span id="fullname">${nomeCognome}</span>`;
document.getElementById("fav_col_box").style.display = 'block';


function generatePass(){

    const select = document.getElementById('my_fav_col');
    let colPreferito = select.options[select.selectedIndex].value;
    let colPreferitoText = select.options[select.selectedIndex].text.toLowerCase();
    
    const maxNumber = 21;
    let randomNumber = Math.floor(1 + Math.random() * maxNumber); /* numero tra 1 e max */    
    let password = nome.toLowerCase() + cognome.toLowerCase() + colPreferitoText + randomNumber;

    document.getElementById("suggested_psw").innerHTML = `La password che ti è stata fornita è: <span style='color: ${colPreferito} !important;'>${password}</span>`;

    return false;
}


function userConfirm() {

    let answer = confirm("Confermare?");
    if (answer != "" && answer == true) {
        generatePass();
    }
    else {
        return false;
    }
}

function upperCaseFirst(str){
    return str.charAt(0).toUpperCase() + str.substring(1);
}
