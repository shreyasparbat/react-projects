// Library imports
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// Component imports
import SeasonDisplay from './components/SeasonDisplay'
import Loader from './components/Loader'

class App extends Component {
    // Initialise state
    state = {
        lat: null,
        errMsg: ''
    }

    componentDidMount() {
        // Get approximate latitude of browser
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({
                lat: position.coords.latitude
            }),
            (err) => this.setState({
                errMsg: err.message
            })
        )
    }

    render() {
        // If received lat without errors
        if (this.state.lat && !this.state.errMsg) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        // If error occurs
        if (!this.state.lat && this.state.errMsg) {
            return <div>Error: {this.state.errMsg}</div>
        }

        // If still waiting for browser reply
        return <Loader />
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
