import './App.css';
import Navigation from './components/Navigation';

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
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        <Router>
          <div className="former-body">
            <div className="navbar navbar-expand-sm bg-secondary bg-transparent">
              <div className="container-fluid">
                <Navigation />
              </div>
            </div>
            <Routes>
              <Route path="/" element={<About />} />
                <Route path="/home" element={<About />} />
                <Route path="/donate" element={<VideoChart />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
          </div>
        </Router>
      </AuthContext.Provider>
    </ApolloProvider>
  )
}