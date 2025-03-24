import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import About from './pages/Home';
import VideoChart from './pages/VideoChart';
import ContactPage from './pages/Contact';

// GraphQL API Endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <div className="former-body">
            <div className="navbar navbar-expand-sm bg-secondary bg-transparent">
              <div className="container-fluid">
                <Navbar />
              </div>
            </div>
            <Routes>
              <Route path="/" element={<About />} />
                <Route path="/home" element={<About />} />
                <Route path="/videochart" element={<VideoChart />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
          </div>
        </Router>
    </ApolloProvider>
  )
}

export default App