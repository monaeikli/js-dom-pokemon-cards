const listEl = document.querySelector('.cards');

const capitalize = (s) => (s && s.length ? s[0].toUpperCase() + s.slice(1) : s);

function createCard(pokemon) {
const li = document.createElement('li');
li.className = 'card';


const h2 = document.createElement('h2');
h2.className = 'card--title';
h2.textContent = capitalize(pokemon.name);


const img = document.createElement('img');
img.width = 256;
img.className = 'card--img';
const art = pokemon?.sprites?.other?.["official-artwork"]?.front_default;
img.src = art || pokemon?.sprites?.front_default || '';
img.alt = `${pokemon.name} artwork`;


const ul = document.createElement('ul');
ul.className = 'card--text';


pokemon.stats.forEach((s) => {
const liStat = document.createElement('li');
const label = s.stat.name.replace(/-/g, ' ').toUpperCase();
liStat.textContent = `${label}: ${s.base_stat}`;
ul.appendChild(liStat);
});


li.append(h2, img, ul);
return li;
}


// Render all cards
(function render() {
if (!Array.isArray(window.data)) return;
const fragment = document.createDocumentFragment();
data.forEach((p) => fragment.appendChild(createCard(p)));
listEl.appendChild(fragment);
})();