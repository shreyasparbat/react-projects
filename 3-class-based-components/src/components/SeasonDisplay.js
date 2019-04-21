import React from 'react'
import './SeasonDisplay.css'

class SeasonDisplay extends React.Component {
    // Initialise state
    state = {
        season: '',
        seasonText: '',
        iconName: ''
    }

    // Specify season config properties
    seasonConfig = {
        summer: {
            seasonText: 'Let\'s hit the beach!',
            iconName: 'sun'
        },
        winter: {
            seasonText: 'It\'s chilly!',
            iconName: 'winter'
        }
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
        const season = SeasonDisplay.getSeason(this.props.lat)
        this.setState({
            season,
            seasonText: this.seasonConfig[season].seasonText,
            iconName: this.seasonConfig[season].iconName
        })
    }

    render() {
        return (
            <div className={'season-display ' + this.state.season}>
                <i className={this.state.iconName + ' icon massive icon-left'} />
                <h1>{this.state.seasonText}</h1>
                <i className={this.state.iconName + ' icon massive icon-right'} />
            </div>
        )
    }
}

export default SeasonDisplay
