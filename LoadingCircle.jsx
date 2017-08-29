import React, {Component} from 'react'
import './loading.css'

export default class LoadingCircle extends Component {
    static defaultProps = {
        size: 32,
        borderWidth: 4,
        loadingName: 'circle'
    }

    render() {
        const {size, borderWidth, className, loadingName} = this.props
        return (
            <div className={className}>
                <div className={loadingName} style={{width: size, height: size, borderWidth}}></div>
            </div>
        )
    }
}