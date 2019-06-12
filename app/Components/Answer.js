var React = require('react');
var PropTypes = require('prop-types');

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {yesOrNo: null};
    }

    render() {
        if (this.yesOrNo) {
            return (
                <div className="words">Yes!</div>
            )
        } else {
            return (
                <div className="words">No.</div>
            )
        }
    }
}

Answer.propTypes = {
    yesOrNo: PropTypes.bool.isRequired,
};

module.exports = Answer;