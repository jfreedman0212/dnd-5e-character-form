import { Component, ReactNode, ErrorInfo } from "react";

type ErrorBoundaryProps = Readonly<{
    children: ReactNode;
}>;

type ErrorBoundaryState = Readonly<{
    error?: any;
}>;

export default class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromError(error: any) {
        return {
            error
        };
    }

    componentDidCatch(error: any, errorInfo: ErrorInfo) {
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
