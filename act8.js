// Canviar missatge de benvinguda
document.getElementById('changeGreetingBtn').addEventListener('click', function() {
    document.getElementById('salutacions').innerText = "Gaudeix explorant el món animal!";
});

// Canviar la imatge dels animals i estil del text
document.getElementById('pinguinoImg').addEventListener('click', function() {
    document.getElementById('salutacions').innerText = "Benvingut al món dels Pingüins!";
    document.getElementById('estilText').style.color = 'cyan'; // Color per a pingüins
    document.body.style.backgroundColor = 'lightgray'; // Fons relacionat amb pingüins
});

document.getElementById('loroimg').addEventListener('click', function() {
    document.getElementById('salutacions').innerText = "Benvingut al món dels Lloros!";
    document.getElementById('estilText').style.color = 'green'; // Color per a lloros
    document.body.style.backgroundColor = 'lightyellow'; // Fons relacionat amb lloros
});

document.getElementById('conillimg').addEventListener('click', function() {
    document.getElementById('salutacions').innerText = "Benvingut al món dels Conills!";
    document.getElementById('estilText').style.color = 'brown'; // Color per a conills
    document.body.style.backgroundColor = 'lightgreen'; // Fons relacionat amb conills
});

// Canviar estil del text
document.getElementById('BtncanviColor').addEventListener('click', function() {
    document.getElementById('estilText').style.color = 'purple'; // Canviar color de text a morat
});

document.getElementById('BtncanviMida').addEventListener('click', function() {
    document.getElementById('estilText').style.fontSize = '24px'; // Canviar mida del text
});

document.getElementById('BtncanviEstil').addEventListener('click', function() {
    document.getElementById('estilText').style.fontWeight = 'bold'; // Canviar estil a negreta
});

// Canviar color de fons de la pàgina
document.getElementById('BtnCanviarfons').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightcoral'; // Canviar color de fons aleatori
});
