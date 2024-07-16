import Header from './components/header/header'
import Footer from './components/footer/footer'
import { BrowserRouter  } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { QueryClient, QueryClientProvider } from 'react-query'
import Router  from './components/Router/Router'



const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter> 
        <Header></Header>
        <Router></Router>
        <Footer></Footer>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
