import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this page doesn&apos;t exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
