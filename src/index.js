import React from 'react'
import ReactDOM from 'react-dom'
import '../src/styles/index.css'
import App from '../src/App'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
})

//Apollo Client
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)