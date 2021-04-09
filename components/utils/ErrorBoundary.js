import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromError(error) {
        return {
            error
        };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error);
        console.error(errorInfo);
    }

    render() {
        if (this.state.error) {
            return (
                <pre>
                    <code>{JSON.stringify(this.state.error, null, 2)}</code>
                </pre>
            );
        }
        return this.props.children;
    }
}
