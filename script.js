'use strict';
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let key = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        key += characters.charAt(randomIndex);
    }
    return key;
}

const key = generateKey(16, characters);
console.log(key);

