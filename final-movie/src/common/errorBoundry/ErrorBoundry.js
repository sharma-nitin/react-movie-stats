import React, { Component } from 'react'

class ErrorBoundry extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: '',
            errorInfo: '',
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        this.setState({ errorInfo: info });
        return {
            hasError: true
        }
    }


    render() {
        const content= this.state.hasError ? <h2>Something went wrong !!!</h2> : this.props.children;
        return (
            <>
                {content}
            </>
        )
    }
}

export default ErrorBoundry
