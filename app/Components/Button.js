var React = require('react');

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {yesOrNo: null};
    }

    clickHandler() {
        if (this.state.yesOrNo) {
            console.log('yerp');
        } else {
            console.log('nope')
        }
    }

    // changeHomeState = (params) => {
    //     this.props.changeState(params);
    // }

    render() {
        return (
            <button 
                className="button"
                type="submit"
                onClick={() => {this.props.changeHomeState()}}>
                    {! this.state.yesOrNo ? "But what if it was...  ?" : "Back to today's date" }
            </button>
        )
    }
}

module.exports = Button;