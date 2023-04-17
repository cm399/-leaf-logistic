import "./global.scss";
import Routes from "routes";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
