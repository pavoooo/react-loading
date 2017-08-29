import React, {Component} from 'react'
import PropTypes from 'prop-types'

import LoadingCircle from './LoadingCircle'

export default class LoadingContainer extends Component {
    static propTypes = {
        className: PropTypes.string,
        loading: PropTypes.bool,
        loadingText: PropTypes.string,
        showCircle: PropTypes.bool,
        children: PropTypes.any
    }

    static defaultProps = {
        loading: false,
        loadingText: 'is loading...',
        showCircle: true,
        className: 'circle-container'
    }

    constructor(props) {
        super(props)
    }

    getChildren() {
        function resolveChild(child) {
            if(Array.isArray(child)) {
                return child.map(resolveChild)
            }else if(typeof child === 'function') {
                return child()
            }else{
                return child
            }
        }
        return resolveChild(this.props.children)
    }

    render() {
        const {loading, loadingText, showCircle, className} = this.props
        return (
            <div className={className}>
                {
                    loading ?
                    showCircle && 
                    <div className="circle-wrapper">
                        <LoadingCircle className="rotate-circle"/>
                        <h2 className="loading-text">{loadingText}</h2>
                    </div> :
                    this.getChildren()
                }
            </div>
        )
    }
}