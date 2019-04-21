import React from 'react'

class SeasonDisplay extends React.Component {
    // Initialise state
    state = {
        season: ''
    }

    // Get season from lat and month
    getSeason = (lat) => {
        const month = new Date().getMonth()
        if (month > 2 && month < 9) {
            return lat > 0 ? 'summer' : 'winter'
        }
        return lat > 0 ? 'winter' : 'summer'
    }

    componentDidMount() {
        this.setState({
            lat: this.getSeason(this.props.lat)
        })
    }

    render() {
        return (
            <div>Season: {this.state.season}</div>
        )
    }
}

export default SeasonDisplay
