import { useRouteError} from "react-router-dom";
import Header from "./Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header className="mb-4">
        <Header/>
      </header>

      <main>
        <div id="error-page" className="container text-center">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </main>

      <footer></footer>
    </>
  );
}