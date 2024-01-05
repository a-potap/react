import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
import { Outlet} from "react-router-dom";
import { getContacts } from "../contacts";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

function Root() {
  return (
    <>
      <header className="mb-4">
        <Header/>
      </header>

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default Root;
