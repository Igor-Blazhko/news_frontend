import Header from './components/header/header'
import Footer from './components/footer/footer'
import { BrowserRouter  } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { QueryClient, QueryClientProvider } from 'react-query'
import Router  from './components/Router/Router'
import axios from 'axios'
import SERVER from './dataServer'
import cooks from './basefunction'


const queryClient = new QueryClient();
axios.defaults.baseURL = SERVER.base;
axios.defaults.headers.common['Authorization'] = `Bearer ${cooks.getJWT()}`;
axios.interceptors.response.use((response)=> {
  //console.log(response)
  return response
},async (error) => {
  if(error.response.data.statusCode === 401){
    const { data } = await axios.get(SERVER.GET.refreshToken(cooks.getRefreshToken()));
    cooks.setAccessToken(data)
    axios.defaults.headers.common['Authorization'] = `Bearer ${cooks.getJWT()}`;
  }
})


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
