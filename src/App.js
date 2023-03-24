import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import NewHomes from './ui-components/NewHomes';
import NavBar from './ui-components/NavBar';
import UserProfile from './ui-components/UserProfile';
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
          <NavBar />
          <NewHomes />
        </main>
      )}
    </Authenticator>
  );
}