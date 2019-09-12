import React from 'react';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
});

function App() {
  return <div>Hello from React.</div>;
}

export default App;
