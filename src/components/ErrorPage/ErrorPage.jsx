import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>Oops !!!</h2>
      <h3>{error.status}</h3>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>Page not found</h3>
          <Link to={`/`}>Home</Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
