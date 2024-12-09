// Interactivité avec le bouton toggle //


    // Sélectionne l'élément checkbox
    const switch = document.getElementById('switch');

    // Ajoute un écouteur d'événement pour détecter les changements d'état
    toggle.addEventListener('change', () => {
        if (switch.checked) {
            document.body.style.backgroundColor = 'red'; // Fond rouge si activé
        } else {
            document.body.style.backgroundColor = 'blue'; // Fond bleu si désactivé
        }
    });

