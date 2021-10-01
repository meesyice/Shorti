import { Route, Switch } from "react-router-dom";

import UrlShortner from "./pages/UrlShortner";
import NumberOfClicks from "./pages/NumberOfClicks";
import ReportUrl from "./pages/ReportUrl";
import Contact from "./pages/Contact";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <UrlShortner />
        </Route>
        <Route path="/ClickTracker" exact>
          <NumberOfClicks />
        </Route>
        <Route path="/ReportUrl" exact>
          <ReportUrl />
        </Route>
        <Route path='/Contact'>
          <Contact />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
