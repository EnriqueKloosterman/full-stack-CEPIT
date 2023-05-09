import fs from 'fs'
// const ul = document.querySelector('ul');

const dataUsers = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));
// alert("HELLO");


let usuarios = dataUsers.forEach(element => {
    console.log(element.name.first);
});
// console.log(dataUsers.name);
for(let i = 0; i < 4; i++ ){
    // console.log(dataUsers[i].name);
    // const li = document.createElement('li')
    // li.innerText = dataUsers[i].name
    // ul.appendChild(li);
}

