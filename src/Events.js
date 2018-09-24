import React, {Component} from 'react';
class Reloader extends Component {
    constructor(props) {
        super(props);
        this.state = { content : ""};
        this.onChar = this.onChar.bind(this);
        this.onGoTime= this.onGoTime.bind(this);
    }
    onChar(event) {
        this.setState({content: event.target.value})
    }
    onGoTime(event) {
        if (this.state.content !== 'reload') {
            event.preventDefault();
        }
    }
    render() {
        return(
            <form onSubmit={this.onGoTime}>
                <input type="text" value={this.state.content} onChange={this.onChar}/>
                <input type="submit" value="Go Time"/>
                <span>{this.state.content}</span>
            </form>
        )
    }
}
class EvenCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {click : 0};
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(event) {
        const clicksNew = this.state.click + 1;
        this.setState({click: clicksNew});
        if (clicksNew % 3 === 0) {
            this.props.onEvenClick(clicksNew);
        }
    }
    render() {
        return (<div onClick={this.clickHandler}>
            This div has been clicked {this.state.click} times
        </div>);
    }
}
export {
    EvenCounter, Reloader
};