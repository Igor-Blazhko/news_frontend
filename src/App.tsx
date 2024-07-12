import Header from './components/header/header'
import AllPost from './components/allPost/allPost'
import Footer from './components/footer/footer'
import LogIn from './components/auth/logIn/login'
import { Page } from './types'
import SignIn from './components/auth/register/register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OnePost from './components/pageOnePost/OnePost'

function App() {

  return (
    <>
      <BrowserRouter> 
      <Header></Header>
        <Routes>
          <Route path="*" element ={ <AllPost/> }/>
          <Route path={Page.LogIn} element ={ <LogIn/> }/>
          <Route path={Page.SignIn} element ={ <SignIn/> }/>
          <Route path={Page.OnePost+'/:id'} element ={ <OnePost/> }/>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
