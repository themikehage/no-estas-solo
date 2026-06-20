import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-neural-black text-hospital-white">
          <div className="text-center max-w-md px-6">
            <h1 className="font-display text-4xl mb-4">Algo salió mal</h1>
            <p className="font-body text-hospital-white/60 mb-8">
              Por favor, recarga la página o intenta más tarde.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-synapse-green text-neural-black font-body"
            >
              Recargar página
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
