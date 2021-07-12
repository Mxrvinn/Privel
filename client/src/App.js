import React from 'react';
import Home from './components/pages/Home/homepage';
import Dashboard from "./components/pages/dashboard/dashboard"
import "./text.css"

import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Login from "./components/pages/login/login"
import Register from "./components/pages/register/register"
import MyDocs from "./components/pages/dashboard/mydocs/mydocs"
import CreateNewDoc from "./components/pages/dashboard/mydocs/createnew/createnewdoc"
import TextEditor from "./components/pages/texteditor/TextEditor"
import editDoc from "./components/pages/dashboard/mydocs/editdocument/editdoc"
import TeamDocs from "./components/pages/dashboard/mydocs/teamdocs/teamdocs"
import PasswordReset from "./components/pages/password–reset/reset–password"
import Changepw from "./components/pages/changepw/changepw"
import ProfilePage from "./components/pages/profile/profile"
import Settings from "./components/pages/settings/settings"
import BugReport from "./components/pages/BugReport/BugReport"
import CloudStorage from './components/pages/dashboard/cloudstorage/cloudstorage';
import FindFriends from './components/pages/FindFriends/findfriends';

import { v4 as uuidV4 } from "uuid"


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/dashboard">
        {<Redirect to="/dashboard/1" /> }
      </Route>
        <Route path='/reset–password' component={PasswordReset} />
        <Route path='/dashboard/:site' exact component={Dashboard} />   
        <Route path='/' exact component={Home} />
        <Route path='/bugreport' component={BugReport} />
        <Route path='/Login' exact component={Login} />
        <Route path='/Register' exact component={Register} />
        <Route path='/dashboard/mydocs/:site'  exact component={MyDocs} />
        <Route path='/dashboard/newdoc/createnew/' exact component={CreateNewDoc} />
        <Route path='/dashboard/editdoc/:document' component={editDoc} exact />
        <Route path='/dashboard/teamdocs/:site'  exact component={TeamDocs} />
        <Route path='/change–password/:process' component={Changepw} />
        <Route path='/user/:id' component={ProfilePage} />
        <Route path='/settings/' component={Settings} />
        <Route path='/friends' component={FindFriends} />

        <Route path='/dashboard/cloudstorage/:id' exact component={CloudStorage} />
        <Route path="/documents" exact>
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path="/documents/:id">
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
