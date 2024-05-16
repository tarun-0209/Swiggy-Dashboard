import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Error = () => {
  const location = useLocation();
  const [error, setError] = useState({
    status: "404",
    statusText: "Not Found",
  });

  useEffect(() => {
    if (location.state && location.state.error) {
      setError(location.state.error);
    } else {
      setError({ status: "404", statusText: "Not Found" });
    }
  }, [location]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-700 text-lg mb-4">
          We encountered an error while processing your request.
        </p>
        <p className="text-red-500 text-xl font-semibold mb-4">
          Error {error.status}: {error.statusText}
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Please try again later or contact support if the issue persists.
        </p>
      </div>
    </div>
  );
};

export default Error;
