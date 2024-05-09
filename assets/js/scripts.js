/* Navbar */

function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

window.addEventListener('scroll', function () {
    var header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
        header.classList.remove('hidden');
        header.classList.add('top_interval');
    } else {
        header.classList.add('hidden');
        header.classList.remove('top_interval');
    }
});


/* Category */
const cardData = [
    {
        title: 'Extension',
        text: 'Toulouse Deck',
        content: 'Nous sommes ravis de vous présenter notre dernier pack : l\'extension du campus à Toulouse !',
    },
    {
        title: 'Prochainement',
        text: 'Nouvelles cartes',
        content: 'Découvrer les toutes nouvelles cartes "Staffs" et "Booster" ',
    },
    {
        title: 'Status',
        text: 'Finish',
        content: 'Mission accomplie, projet terminé pour le moment !',
    }
];

function generateCards(cardData) {
    const categorySection = document.getElementById('category');
    let maxHeight = 0;

    cardData.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('category-card', 'w-full', 'sm:h-auto', 'md:h-1/2', 'hover:shadow-md', 'md:w-1/3', 'p-4', 'h-full', 'rounded-lg', 'm-auto', 'relative', 'flex', 'flex-col', 'gap-5');
        cardElement.style.backgroundAttachment = 'fixed';

        cardElement.style.backgroundImage = "url('../category/holberton_toulouse.png')";

        const titleElement = document.createElement('a');
        titleElement.classList.add('py-3', 'px-5', 'text-xs', 'uppercase', 'tracking-wide', 'mx-4', 'w-min-content', 'self-end', 'rounded-full', 'font-bold', 'bg-black', 'hover:shadow-md', 'text-white', 'leading-5', 'relative', 'z-10', 'justify-end');
        titleElement.textContent = card.title;
        titleElement.style.cursor = 'pointer';

        if (index === 0) {
            titleElement.href = '#cursus';
        } else if (index === 1) {
            titleElement.href = '#other';
        }

        cardElement.appendChild(titleElement);
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('p-10', 'relative', 'bg_category', 'm-4', 'rounded-lg');
        contentDiv.style.zIndex = '1';

        const textElement = document.createElement('h3');
        textElement.classList.add('text-2xl', 'uppercase', 'font-extrabold', 'mb-2', 'text-extensionlinear');
        textElement.textContent = card.text;
        contentDiv.appendChild(textElement);

        const contentElement = document.createElement('p');
        contentElement.classList.add('text-textLight');
        contentElement.textContent = card.content;
        contentDiv.appendChild(contentElement);

        cardElement.appendChild(contentDiv);

        const overlay = document.createElement('div');
        overlay.classList.add('absolute', 'inset-0', 'rounded-lg', 'testbg');
        cardElement.appendChild(overlay);

        categorySection.appendChild(cardElement);

        const cardHeight = cardElement.offsetHeight;
        if (cardHeight > maxHeight) {
            maxHeight = cardHeight;
        }
    });

    const cardElements = document.querySelectorAll('.category-card');
    cardElements.forEach(card => {
        card.style.height = `${maxHeight}px`;
    });
}
generateCards(cardData);


/* Cursus */
const descriptionParagraph = document.querySelector('#descriptionParagraph');

const piscineImage = document.querySelector('#piscineImage');
const fondamentauxImage = document.querySelector('#fondamentauxImage');
const specialisationImage = document.querySelector('#specialisationImage');
const rncpImage = document.querySelector('#rncpImage');

piscineImage.addEventListener('click', () => {
    descriptionParagraph.innerHTML = `<b>La Piscine : Démarrez Fort</b><br>
        Entamez votre voyage avec notre Piscine intensive, un bain de code conçu pour tester vos limites et révéler votre passion pour la programmation. Plongez dans des défis stimulants, apprenez les bases du codage et forgez des amitiés durables avec vos pairs, le tout sous la guidance de nos instructeurs expérimentés.`;
});

fondamentauxImage.addEventListener('click', () => {
    descriptionParagraph.innerHTML = `<b>Les Fondamentaux : Construisez Votre Base</b><br>
        Une fois sorti de la Piscine, consolidez vos acquis avec notre programme de formation axé sur les fondamentaux du développement logiciel. De la maîtrise des langages de programmation à la compréhension des concepts clés de l'informatique, vous renforcerez vos compétences et développerez la confiance nécessaire pour relever les défis à venir.`;
});

specialisationImage.addEventListener('click', () => {
    descriptionParagraph.innerHTML = `<b>La Spécialisation : Explorez Vos Passions</b><br>
        Plongez-vous dans le monde du développement logiciel avec notre programme de spécialisation. Choisissez parmi une gamme de domaines spécialisés, de l'intelligence artificielle à la cybersécurité, et plongez au cœur des technologies de pointe qui façonnent l'avenir de l'informatique.`;
});

rncpImage.addEventListener('click', () => {
    descriptionParagraph.innerHTML = `<b>La Certification RNCP : Atteignez l'Excellence</b><br>
        Couronnez votre parcours avec notre certification RNCP reconnue par l'État, une validation formelle de vos compétences en développement logiciel. Démarquez-vous sur le marché du travail avec ce sceau d'excellence et ouvrez la voie à une carrière réussie dans le domaine de l'informatique.`;
});

/* Gallery */
const galleryItems = document.querySelectorAll('#gallery .gallery-item');
let currentIndex = 0;

function changePhoto(index) {
    const imageSrc = galleryItems[index].getAttribute('data-src');
    document.getElementById('mainImage').src = imageSrc;

    galleryItems.forEach(item => {
        item.classList.remove('active');
    });

    galleryItems[index].classList.add('active');
    currentIndex = index;
}

function scrollGallery(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
    } else if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
    }

    const imageSrc = galleryItems[currentIndex].getAttribute('data-src');
    changePhoto(currentIndex);
    const gallery = document.getElementById('gallery');
    const itemWidth = galleryItems[0].offsetWidth;
    const scrollAmount = currentIndex * itemWidth;
    gallery.scrollLeft = scrollAmount;
}



/* Fade */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(``, { delay: 500 })
sr.reveal(``, { delay: 600 })
sr.reveal(`.left_transition`, { origin: 'left', interval: 100 })
sr.reveal(`.right_transition`, { origin: 'right', delay: 500 })
sr.reveal(`.bottom_interval, .category-card`,  { origin: 'bottom', interval: 200 })
sr.reveal(`.top_interval`, { origin: 'top', interval: 100 })

sr.reveal(``, { interval: 100 })
