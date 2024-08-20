import React from "react";
import { useNavigate } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

const ErrorFallback = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Redirect to the home page after a short delay
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-lg mb-4">Redirecting to the home page...</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => navigate("/")}
      >
        Go to Home Now
      </button>
    </div>
  );
};

export default ErrorBoundary;
