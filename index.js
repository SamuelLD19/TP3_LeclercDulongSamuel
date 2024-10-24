


//Function pour le formulaire de billets sur l'accueil
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formBillets").addEventListener("submit", function(event) {
        event.preventDefault(); 

        let nombreBillets = parseInt(document.getElementById("billets").value);
        let prixUnitaire = 150; 
        let total = nombreBillets * prixUnitaire;

        if (nombreBillets >= 8) {
            total *= 0.95; 
        }

        document.getElementById("result").innerText = `Total à payer : ${total.toFixed(2)} $`;
    });
});


//Function pour la suite de timeline dans Notre Histoire
document.querySelector('#btn-suite button').addEventListener('click', toggleSection);

function toggleSection() {
    let section = document.getElementById('timeline-suite');
    let button = document.querySelector('#btn-suite button');

    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block'; 
        button.textContent = 'Voir moins'; 
    } else {
        section.style.display = 'none'; 
        button.textContent = 'Voir plus'; 
    }
}
