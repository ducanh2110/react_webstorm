import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import {EvenCounter,Reloader} from './Events'
import {shuffle, sample} from 'underscore';
const authors = [
    {
        name : 'Dendi',
        imageURL: 'image/dendi.jpg',
        imageSource: 'Google Commons 1',
        games: ['Dota2', 'Warcraft 3: Frozen Throne 1', 'CrossFire 1 ', 'PlayerUnknown Battleground 1']
    },
    {
        name : 'Sumail',
        imageURL: 'image/sumail.jpeg',
        imageSource: 'Google Commons 2',
        games: ['Dota 3', 'Warcraft 3: Frozen Throne 2', 'CrossFire 2', 'PlayerUnknown Battleground 3']
    },
    {
        name : 'Mushi',
        imageURL: 'image/mushi.jpg',
        imageSource: 'Google Commons 3',
        games: ['Dota 4', 'Warcraft 3: Frozen Throne 3', 'CrossFire 3', 'PlayerUnknown Battleground 3']
    },
    {
        name : 'Kemlove',
        imageURL: 'image/kemlove.jpg',
        imageSource: 'Google Commons',
        games: ['Dota 5', 'Warcraft 3: Frozen Throne 4 ', 'CrossFire 4', 'PlayerUnknown Battleground 4']
    },
    {
        name : 'Misa',
        imageURL: 'image/misa.jpg',
        imageSource: 'Google Commons 4',
        games: ['Dota 6', 'Warcraft 3: Frozen Throne 5', 'CrossFire 5', 'PlayerUnknown Battleground 5']
    }
];

function getTurnData(authors) {
    const allGame = authors.reduce(function (p, c, i) {
        return p.concat(c.games)
    }, []);
    const randomGames = shuffle(allGame).slice(0, 4);
    const answer = sample(randomGames);

    return {
        games : randomGames,
        author: authors.find((author) => author.games.some((title) => title === answer))
    }
}
const state = {
    turnData :getTurnData(authors),
    highlight: ''
};
/*
ReactDOM.render(<AuthorQuiz {...state}/>, document.getElementById('root'));*/
/*function Events() {

    const clickHandler = console.log;

    return (
        <div>
            <button onClick={clickHandler}>Make An Event</button>
        </div>
    );
}
ReactDOM.render(<Events />, document.getElementById('root'));*/
// ReactDOM.render(<Reloader/>, document.getElementById('root'));
class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
function onAnswerSelected(answer) {
    const correct = state.turnData.author.games.some((game) => game === answer);
    state.highlight = correct ? 'correct' : 'wrong';
    render();
}
function render () {
    ReactDOM.render(<Main>
        <EvenCounter onEvenClick={ (data) => {
            if (data % 2 === 0) {
                console.log(`even ${data};`)
            } else {
                console.log(`odd ${data};`)
            }
        }}/>
        <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected}/>
    </Main>, document.getElementById('root'));
}
render();
registerServiceWorker();

