import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-primary mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-6 text-2xl font-semibold">Page Not Found</h2>

      <div className="mb-8 max-w-md">
        <p className="text-muted-foreground mb-6">
          The page you are looking for doesn't exist or has been moved. Please
          check the URL or navigate back to the homepage.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          to="/"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 py-2 transition-colors"
        >
          Back to Home
        </Link>

        <Link
          to="/works"
          className="border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md border px-6 py-2 transition-colors"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
