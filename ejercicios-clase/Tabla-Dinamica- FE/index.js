import { data } from './users.js';
const users =  JSON.parse(data);
// console.log(users);

const table = document.getElementById('table');
users.forEach(element => {
    const file = document.createElement('tr');
    const cellName = document.createElement('td');
    const cellLastName = document.createElement('td');
    const cellCity = document.createElement('td');
    const cellImg = document.createElement('td');

    const img = document.createElement('img');
    img.src = element.picture.thumbnail

    cellName.innerHTML = element.name.first;
    cellLastName.innerHTML = element.name.last;
    cellCity.innerHTML = element.location.city;
    cellImg.appendChild(img) ;

    file.appendChild(cellName);
    file.appendChild(cellLastName);
    file.appendChild(cellCity);
    file.appendChild(cellImg);

    table.querySelector('tbody').appendChild(file);
});



//? funciona
// const list = document.querySelector("ul");
// users.forEach(e => {
//     const usr = `
//     <li>${e.name.first} ${e.name.last} ${e.location.city} <img src="${e.picture.thumbnail}"></li>}
//     `;
//     list.innerHTML += usr;
// });
// for(let i = 0; i < 4; i++){
//     const usr = `
//     <li>${users[i].name.first} ${users[i].name.last} ${users[i].location.city} <img src="${users[i].picture.thumbnail}"></li>
//     `;
//     list.innerHTML += usr;
// }
//?