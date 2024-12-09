const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(), 
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);

}

const images = [
    'assets/Dépli/PNG/2.png',
    'assets/Dépli/PNG/3.png',
    'assets/Dépli/PNG/4.png',
    'assets/Dépli/PNG/5.png',
    'assets/Dépli/PNG/6.png',
    'assets/Dépli/PNG/1.png'
  ];
  
  let currentImageIndex = 0; // Index de l'image actuelle
  const imageElement = document.getElementById('pli1');
  
  // Gestion du clic
  document.getElementById('wrap-container').addEventListener('click', () => {
    // Passe à l'image suivante
    currentImageIndex = (currentImageIndex + 1) % images.length; // Revient à 0 après la 5e image
  
    // Animation (transition douce)
    imageElement.style.opacity = 0;
  
    setTimeout(() => {
      imageElement.src = images[currentImageIndex]; // Change l'image
      imageElement.style.opacity = 1; // Réapparition
    }, 500); // Durée en ms, correspondant à la transition CSS
  });
  






for(const card of document.querySelectorAll(".card")) {
    card.onmousemove = e => handleOnMouseMove(e);
}

document.addEventListener('mousemove', (event) => {
    // Créer un élément pour la traînée
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';

    // Positionner l'élément au niveau du curseur
    trail.style.left = `${event.pageX}px`;
    trail.style.top = `${event.pageY}px`;

    // Ajouter l'élément au body
    document.body.appendChild(trail);

    // Supprimer l'élément après l'animation pour éviter l'accumulation
    setTimeout(() => {
        trail.remove();
    }, 1000); // Durée correspond à l'animation CSS (1 seconde)
});

let lastTime = 0;
document.addEventListener('mousemove', (event) => {
    const now = Date.now();
    if (now - lastTime < 50) return; // Limite à un point toutes les 50ms
    lastTime = now;

    // Reste du code pour créer la traînée
});

// Interactivité avec le bouton toggle //


    // Sélectionne l'élément checkbox
    const toggle = document.getElementById('toggle');

    // Ajoute un écouteur d'événement pour détecter les changements d'état
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.style.backgroundColor = 'red'; // Fond rouge si activé
        } else {
            document.body.style.backgroundColor = 'blue'; // Fond bleu si désactivé
        }
    });

    // Définit un état initial (au cas où la page recharge avec un état activé)
    if (toggle.checked) {
        document.body.style.backgroundColor = 'red';
    } else {
        document.body.style.backgroundColor = 'blue';
    }

