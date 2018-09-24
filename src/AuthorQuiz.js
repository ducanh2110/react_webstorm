import React, {Component} from 'react';
import './App.css';
import './bootstrap-3.3.7-dist/css/bootstrap.min.css'
import PropTypes from 'prop-types';
function Hero() {
    return (
        <div className={"row"}>
            <div className="jumbotron col-md-10 col-md-offset-1">
                <h1>Pham Duc Anh</h1>
                <p>Select the games which  you like</p>
            </div>
        </div>
    );
}
function Book({title, onClick}) {
    return(<div className="answer" onClick={() => onClick(title)}>
        <h4>{title}</h4>
    </div>)
}
function Turn({author, games, highlight, onAnswerSelected}) {
    function highlightToBgColor(highlight) {
        const mapper = {
            'none': 'orange',
            'correct': 'green',
            'wrong': 'red'
        };
        return mapper[highlight];
    }

    return (<div className="row turn" style={{backgroundColor : highlightToBgColor(highlight)}}>
            <div className="col-md-4 col-md-offset-1">
                <img src={author.imageURL} className="authorimage" alt="Author"/>
            </div>
            <div className="col-md-6">
                {games.map((title) => <Book title={title} key={title} onClick={onAnswerSelected}>

                </Book>)}
            </div>
        </div>
    );
}
Turn.propTypes = {
  author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      imageSource: PropTypes.string.isRequired,
      games: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
    games: PropTypes.arrayOf(PropTypes.string,).isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
    highlight:PropTypes.string.isRequired
};
function Continue() {
    return (null);

}

function Footer() {
    return (<div id={"footer"} className="row page-footer">
        <footer className="col-md-12">
            <p className="text-muted credit ">
                All images are from <a href="http://gamek.vn/">GameK </a> and public source in the Internet
            </p>
        </footer>
    </div>)
}
function AuthorQuiz({turnData, highlight, onAnswerSelected}) {
        return (
            <div className="container-fluid">
                <Hero/>
                <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
                <Continue/>
                <Footer/>
            </div>
        );
}

AuthorQuiz.propTypes = {};

export default AuthorQuiz;