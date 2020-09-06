// Community section
const recipeLink = document.querySelector('.recipe');
const avoLink = document.querySelector('.avo');
const churroLink = document.querySelector('.churr');
const fullQuasa = document.querySelector('.fullQuasa');
const fullOnion = document.querySelector('.fullOnion');
const fullChurro = document.querySelector('.fullChurro');
const hide = document.querySelector('.exit1');
const hide2 = document.querySelector('.exit2');
const hide3 = document.querySelector('.exit3');

fullQuasa.style.display = 'none';
fullOnion.style.display = 'none';
fullChurro.style.display = 'none';

recipeLink.addEventListener('click', e => {
    e.stopPropagation();
    recipeLink.style.display = 'none';
    fullQuasa.style.display = 'block';
});

avoLink.addEventListener('click', e => {
    e.stopPropagation();
    avoLink.style.display = 'none';
    fullOnion.style.display = 'block';
});

churroLink.addEventListener('click', e => {
    e.stopPropagation();
    churroLink.style.display = 'none';
    fullChurro.style.display = 'block';
});

hide.addEventListener('click', () => {
    recipeLink.style.display = 'block';
    fullQuasa.style.display = 'none';
});

hide2.addEventListener('click', () => {
    avoLink.style.display = 'block';
    fullOnion.style.display = 'none';
});

hide3.addEventListener('click', () => {
    churroLink.style.display = 'block';
    fullChurro.style.display = 'none';
});

// End of Community section


const show = document.querySelector('.member');
const butto = document.querySelector('.but');
const read = document.querySelector('.AboutOne');
const showTwo = document.querySelector('.ReadMoreTwo');

show.style.display = 'none';

butto.addEventListener('click', () => {
    butto.style.display = 'none';
    show.style.display = 'block';
});

show.addEventListener('click', () => {
    show.style.display = 'none';
    butto.style.display = 'block';
});


// Get Involved Section & Pop-ups
const involvedSec = document.querySelector('.involvedSec');
const donate = document.querySelector('.donateBtn');
const volunteer = document.querySelector('.volBtn');
const sponsor = document.querySelector('.sponsBtn');
const volForm = document.querySelector('.register');
const exitVol = document.querySelector('.closeVol');
const donateDetails = document.querySelector('.details');
const exitDon = document.querySelector('.closeBank');
const partners = document.querySelector('.sponsors');
const exitSpons = document.querySelector('.closeSpons');

donateDetails.style.display = 'none';
volForm.style.display = 'none';
partners.style.display = 'none';

// Donate form
donate.addEventListener('click', () => {
    involvedSec.style.display = 'none';
    donateDetails.style.display = 'block';
});

exitDon.addEventListener('click', () => {
    donateDetails.style.display = 'none';
    involvedSec.style.display = 'block';
});

// Volunteer form
volunteer.addEventListener('click', () => {
    involvedSec.style.display = 'none';
    volForm.style.display = 'block';
});

exitVol.addEventListener('click', () => {
    volForm.style.display = 'none';
    involvedSec.style.display = 'block';
});

// Partners logos
sponsor.addEventListener('click', () => {
    involvedSec.style.display = 'none';
    partners.style.display = 'block';
});

exitSpons.addEventListener('click', () => {
    partners.style.display = 'none';
    involvedSec.style.display = 'block';
});

// Gallery

