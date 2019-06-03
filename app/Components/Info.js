var React = require('react');

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month: null,
            day: null
        };
    }

    // Get the month and day to set the state
    componentDidMount() {
        this.setMonthAndDay();
        {this.state.month ? this.checkDate() : console.log('date not set yet') }
    }

    // Set the month and day attributes
    setMonthAndDay () {
        var today = new Date();
        this.setState(function () {
            return {
                month: today.getMonth() + 1,
                day: today.getDate()
            }
        });
    }

    // Debugging tool for checking that the date is correct
    checkDate () {
        console.log("Today's month: " + this.state.month)
        console.log("Today's date: " + this.state.day)
    }

    
    render() {
        return (
            <ul>
                <li className="words">Is today Drew's Birthday?</li>
                {this.state.month === 3 && this.state.day === 15 ? <li className="words">Yes!</li> : <li className="words">No.</li> }
            </ul>
        )
    }
}

module.exports = Info;