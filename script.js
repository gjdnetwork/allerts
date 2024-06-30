// Esempio di funzione per mostrare/nascondere il widget in base alle allerte attive
function mostraWidgetAllerta(attiva) {
    var widget = document.querySelector('.alert-widget');
    if (attiva) {
        widget.classList.add('alert-active');
    } else {
        widget.classList.remove('alert-active');
    }
}

// Esempio di chiamata alla funzione per mostrare il widget se ci sono allerte attive
var allerteAttive = true; // Cambia questo valore in base alla presenza di allerte attive
mostraWidgetAllerta(allerteAttive);
