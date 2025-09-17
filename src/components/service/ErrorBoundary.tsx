import { PureComponent, type ErrorInfo, type ReactNode } from "react";


export class ErrorBoundary extends PureComponent<{
  children: ReactNode;
  externalError?: boolean;
}> {
  state: { hasError: boolean; error: any } = {
    hasError: false,
    error: undefined,
  };
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {

    console.log('render', ErrorBoundary.name);
    if (this.state.hasError || this.props.externalError) {
      return <h2>Something went wrong: {this.state.error}</h2>;
    }
    return this.props.children;
  }
}
