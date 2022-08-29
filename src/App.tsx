import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { getUser } from "./services/AuthUtils";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Create from "./pages/Create/Create";
import Ideas from "./pages/Ideas/Ideas";
import DreamsPage from "./pages/Dreams/Dreams";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useEffect, useState } from "react";

setupIonicReact();

type User = {
  token: String;
};

function App() {
  const [currentUser, setCurrentUser] = useState<User>({
    token: "",
  });

  useEffect(() => {
    async function loadUser() {
      const user: any = await getUser();
      setCurrentUser(user.access_token);
    }
    loadUser();
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/create">
            {currentUser ? <Create /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/create/ideas">
            {currentUser ? <Ideas /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/create/dreams">
            {currentUser ? <DreamsPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/create/memories">
            {currentUser ? <DreamsPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/create/thoughts">
            {currentUser ? <DreamsPage /> : <Redirect to="/" />}
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
