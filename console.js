// console.js

// List of emojis
const emojis = ['😀', '😂', '🥳', '😎',  '🤖', '👻', '🐱', '🌟'];

// Function to display emojis
function displayEmojis(emojiList) {
    console.log('Current Emojis:', emojiList.join(' '));
}

// Function to shuffle emojis randomly
function shuffleEmojis(emojiList) {
    for (let i = emojiList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [emojiList[i], emojiList[j]] = [emojiList[j], emojiList[i]];
    }
    return emojiList;
}

// Function to add a random emoji
function addRandomEmoji(emojiList) {
    const randomEmoji = String.fromCodePoint(0x1F600 + Math.floor(Math.random() * 80));
    emojiList.push(randomEmoji);
    return emojiList;
}

// Function to remove a random emoji
function removeRandomEmoji(emojiList) {
    if (emojiList.length > 0) {
        const randomIndex = Math.floor(Math.random() * emojiList.length);
        console.log(`Removing emoji: ${emojiList[randomIndex]}`);
        emojiList.splice(randomIndex, 1);
    } else {
        console.log('No emojis left');
    }
    return emojiList;
}

// Main program
console.log('Welcome to the random emoji generator try it!! its actually fun');
let currentEmojis = [...emojis];
displayEmojis(currentEmojis);

// Perform random actions
const actions = [shuffleEmojis, addRandomEmoji, removeRandomEmoji];
setInterval(() => {
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    currentEmojis = randomAction(currentEmojis);
    displayEmojis(currentEmojis);
}, 2000);
