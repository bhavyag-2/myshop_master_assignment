import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

//Navigation
import NavBar from "./components/smart/NavBar/NavBar";

//Always import these at last:: Pages
const HomePage = lazy(() => import("./pages/Home.page"));
const OrderDetailsPage = lazy(() => import("./pages/OrderDetails.page"));

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/orderdetails" component={OrderDetailsPage}></Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
