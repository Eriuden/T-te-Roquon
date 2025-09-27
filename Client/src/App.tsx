import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { ArticlePage } from './pages/ArticlePage'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { ResetPassword } from './pages/ResetPassword'
import UpdatePassword from './pages/UpdatePassword'
import { UserProfile } from './pages/UserProfile'

function App() {

  return (
    <>
      <div>         
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profil" element={<UserProfile/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/cart" element={<ArticlePage/>}/>
          <Route path="/cart" element={<UpdatePassword/>}/>
          <Route path="/cart" element={<ResetPassword/>}/>
        </Routes>           
      </div>
    </>
  )
}

export default App
