const startGameBtn = document.getElementById('start-game-btn');

const person = {
    name: 'Max',
    greet: function greet() {
        console.log('Hello There!');
    }
};
startGameBtn.addEventListener('click', function () {//Anonymous Function
    console.log('Game is starting..');
})