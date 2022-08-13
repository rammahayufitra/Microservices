const json = '{"user1": "John", "user2":"Kate", "user3":"Peter"}';
const map = new Map(Object.entries(JSON.parse(json)));
const jsonFromMap = JSON.stringify(Object.fromEntries(map));
let h1 = document.getElementsByTagName('h1')[0]
h1.innerHTML = `${jsonFromMap}`;



// for (const key of map.values()) {
//     console.log(key)
//     let h1 = document.getElementsByTagName('h1')[0]
//     h1.innerHTML = `${key}`;
    
// }

