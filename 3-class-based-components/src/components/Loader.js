import React from 'react'

export default class Loader extends React.Component {
    render() {
        return (
            <div className={'ui active dimmer'}>
                <div className={'ui big text loader'}>
                    {this.props.loadText}
                </div>
            </div>
        )
    }
}

// Set default props for Loader
Loader.defaultProps = {
    loadText: 'Loading'
}
