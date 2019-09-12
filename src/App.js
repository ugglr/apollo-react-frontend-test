import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Hello from React.</h2>
      </div>
    </ApolloProvider>
  );
};

export default App;
