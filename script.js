'use strict';
let celkovaCena = Number(0);
let cenaVozu = Number(0);
let cenaBarvy = Number(0);
let cenaDodatecne = Number(0);
let cenaKamer = Number(0);
let cenaKol = Number(0);
let cenaSedacek = Number(0);
let cenaTuningu = Number(0);
let kontrolaCeny = Number(0);

// vyber vozu
document.querySelector('#vyber').addEventListener('click', function () {
    cenaVozu = 0;
    document.querySelector('#celkovaCenaVysledek').textContent = "Vyberte vuz";
});
document.querySelector('#mercedes').addEventListener('click', function () {
    cenaVozu = 1500000;
    prepocet();
});
document.querySelector('#volvo').addEventListener('click', function () {
    cenaVozu = 1200000;
    prepocet();
});
document.querySelector('#audi').addEventListener('click', function () {
    cenaVozu = 1350000;
    prepocet();
});
document.querySelector('#bmw').addEventListener('click', function () {
    cenaVozu = 1400000;
    prepocet();
});

// vyber barvy
document.querySelector('#zaklad').addEventListener('click', function () {
    cenaBarvy = 0;
    prepocet();
});
document.querySelector('#paleny').addEventListener('click', function () {
    cenaBarvy = cenaVozu * 0.05;
    prepocet();
});
document.querySelector('#metalicka').addEventListener('click', function () {
    cenaBarvy = cenaVozu * 0.07;
    prepocet();
});

// vyber dodatecne vybavy
let kamery = document.querySelector('#kamery');
kamery.addEventListener('click', function () {
    if (kamery.checked) {
        cenaKamer = 10000;
        prepocet();
    } else {
        cenaKamer = 0;
        prepocet();
    }
});
let kola = document.querySelector('#kola');
kola.addEventListener('click', function () {
    if (kola.checked) {
        cenaKol = 20000;
        prepocet();
    } else {
        cenaKol = 0;
        prepocet();
    }
});
let sedacky = document.querySelector('#sedacky');
sedacky.addEventListener('click', function () {
    if (sedacky.checked) {
        cenaSedacek = 50000;
        prepocet();
    } else {
        cenaSedacek = 0;
        prepocet();
    }
});
let tuning = document.querySelector('#tuning');
tuning.addEventListener('click', function () {
    if (tuning.checked) {
        cenaTuningu = cenaVozu * 0.2;
        prepocet();
    } else {
        cenaTuningu = 0;
        prepocet();
    }
});

function prepocet() {
    cenaDodatecne = cenaKamer + cenaKol + cenaSedacek + cenaTuningu;
    celkovaCena = cenaVozu + cenaBarvy + cenaDodatecne;
    document.querySelector('#celkovaCenaVysledek').textContent = celkovaCena;
    kontrola();
}

function kontrola() {
    kontrolaCeny = document.querySelector('#ochota').value;
    if (document.querySelector('#ochota').value == "") {
        document.querySelector('#ochota').setAttribute("placeholder", "Zadejte pro kontrolu");
    } else {
        if (kontrolaCeny >= celkovaCena) {
            document.querySelector('#kontrolaVysledek').textContent = "Muzete si to dovolit";
        } else {
            document.querySelector('#kontrolaVysledek').textContent = "Nemuzete si to dovolit";
        }
    }
}

// email
document.querySelector('#odeslatFormular').addEventListener('click', function () {
    let kontakt = document.querySelector('#kontakt').value;
    let kontrolaemailu = kontakt.toString();
    if (!kontrolaemailu.includes("@")) {
        document.querySelector('#odeslani').textContent = "Spatne zadany email.";
    } else {
        document.querySelector('#odeslani').textContent = "V poradku.";
    }
});
