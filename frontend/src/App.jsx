import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global/global.scss";

import Layout from "./layout/layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Layout />
      <Toaster />
    </>
  );
}

export default App;