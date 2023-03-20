import React from "react";
import './App.css';
import { NewHomes, NavBar, MarketingFooter} from './ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react'; // 認証に必要


function App() {
  return (
    <div className="App">
    <NavBar />
    <NewHomes />
    <MarketingFooter />
    </div>
  );
}

export default withAuthenticator(App);
