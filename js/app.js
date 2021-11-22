const objects = [{
        name: 'agave',
        imgUrl: 'img/agave.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'camera',
        imgUrl: 'img/camera.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'colors',
        imgUrl: 'img/colors.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'concert',
        imgUrl: 'img/concert.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'waterfall',
        imgUrl: 'img/waterfall.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'work',
        imgUrl: 'img/work.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'coffee',
        imgUrl: 'img/coffee.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'nissan',
        imgUrl: 'img/nissan.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'beach',
        imgUrl: 'img/beach.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'tim hortons',
        imgUrl: 'img/hortons.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'food',
        imgUrl: 'img/food.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'girl',
        imgUrl: 'img/girl.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'skater',
        imgUrl: 'img/skater.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'roads',
        imgUrl: 'img/roads.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'snow',
        imgUrl: 'img/snow.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'fire',
        imgUrl: 'img/fire.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
    {
        name: 'forrest',
        imgUrl: 'img/forrest.jpg',
        rank: 0,
        wins: 0,
        games: 0
    },
];

const count = objects.length;
const numberOfItems = 2

function generateId(i, j) {
    const id = [];
    while (id.length < j) {
        nId = Math.floor((Math.random() * i));
        if (id.indexOf(nId) == -1) {
            id.push(nId);
        }
    }
    return id;
}

function ranking () {
    objects.sort((a, b) => b.rank - a.rank);
}

function buildRank() {
    const ranks = document.querySelector('OL');
    ranks.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const li = document.createElement('LI');
        const p = document.createElement('P');
        p.innerText = `${objects[i].name.toUpperCase()}`;
        const div = document.createElement('DIV');
        div.className = 'line';
        li.appendChild(p);
        li.appendChild(div);
        ranks.appendChild(li);
    }
}

function calculateRank(w) {
    items = document.querySelectorAll('.item');
    for(let i = 0; i < items.length; i++) {
    let result = '';
    if (items[i].firstChild.dataset.name === w) {
        result = objects.find( ({name}) => name === items[i].firstChild.dataset.name);
        result.wins++;
        result.rank = result.wins / result.games;
        } else { 
            result = objects.find( ({name}) => name === items[i].firstChild.dataset.name);
            result.rank = result.wins / result.games;
         }
    }
}

function loadPage() {
    let items = generateId(count, numberOfItems);
    const itemContainer = document.getElementById('items');
    itemContainer.innerHTML = '';
    for (let i = 0; i < numberOfItems; i++) {
        const item = document.createElement('DIV');
        item.className = 'item';
        const img = document.createElement('IMG');
        img.dataset.name = objects[items[i]].name;
        img.src = objects[items[i]].imgUrl;
        objects[items[i]].games++;
        img.addEventListener('click', (e) =>{
            calculateRank(e.target.dataset.name);
            loadPage();
        })
        item.appendChild(img);
        itemContainer.appendChild(item);
        ranking();
        buildRank();
        console.log(objects);
    }
}

loadPage();
