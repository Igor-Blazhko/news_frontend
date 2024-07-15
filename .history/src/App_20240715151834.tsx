import Header from './components/header/header'
import AllPost from './components/allPost/allPost'
import Footer from './components/footer/footer'
import LogIn from './components/auth/logIn/login'
import { Page } from './types'
import SignIn from './components/auth/register/register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OnePost from './components/pageOnePost/OnePost'
import { Provider } from 'react-redux'
import { store } from './store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CreatePost  from './components/createPost/createPost'



const queryClient = new QueryClient();

function App() {

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter> 
        <Header></Header>
          <Routes>
            <Route path="*" element ={ <AllPost/> }/>
            <Route path={Page.LogIn} element ={ <LogIn/> }/>
            <Route path={Page.SignIn} element ={ <SignIn/> }/>
            <Route path={Page.CreatePost} element ={ <CreatePost/> }/>
            <Route path={Page.OnePost+'/:id'} element ={ <OnePost/> }/>
          </Routes>
        <Footer></Footer>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
