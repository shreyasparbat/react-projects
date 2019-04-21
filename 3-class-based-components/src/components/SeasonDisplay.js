import React from 'react'

class SeasonDisplay extends React.Component {
    // Initialise state
    state = {
        seasonText: ''
    }

    // Find season
    static getSeason(lat) {
        const month = new Date().getMonth()
        if (month > 2 && month < 9) {
            return lat > 0 ? 'summer' : 'winter'
        }
        else {
            return lat > 0 ? 'winter' : 'summer'
        }
    }

    componentDidMount() {
        this.setState({
            seasonText: SeasonDisplay.getSeason(this.props.lat) === 'summer' ? 'Let\'s hit the beach!' : 'It\'s chilly!'
        })

    }

    render() {
        return (
            <div>
                <h1>{this.state.seasonText}</h1>
            </div>
        )
    }
}

export default SeasonDisplay
