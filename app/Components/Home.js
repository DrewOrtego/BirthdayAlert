var React = require('react');
var Button = require('./Button');
var Question = require('./Question');
var Answer = require('./Answer');

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month: null,
            day: null,
            targetMonth: 3,
            targetDay: 15,
            toggle: true
        };
    }

    changeStuff() {
        this.setState(function() {
            return {
                toggle: !this.state.toggle
            }
        })
        console.log("toggle is now " + this.state.toggle)
    }

    componentDidMount() {
        this.setMonthAndDay();
        {this.state.month ? this.checkDate() : console.log('date not set yet') }
    }

    // Set the month and day attributes
    setMonthAndDay() {
        var today = new Date();
        this.setState(function() {
            return {
                month: today.getMonth() + 1,
                day: today.getDate()
            }
        });
    }

    // Debugging tool for checking that the date is correct
    checkDate() {
        console.log("Today's month: " + this.state.month)
        console.log("Today's date: " + this.state.day)
    }
    
    render() {
        var yesOrNo = this.state.month === this.state.targetMonth && this.state.day === this.state.targetDay
        return (
            <div>
                <Question />
                <Answer yesOrNo={yesOrNo}/>
                <Button yesOrNo={yesOrNo} changeHomeState={this.changeStuff.bind(this)}/>
            </div>
        )
    }
}

module.exports = Home;