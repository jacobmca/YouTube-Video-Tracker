import Reach from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import client from './apolloClient';
import { ApolloProvider } from '@apollo/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);