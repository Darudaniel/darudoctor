import '../assets/styles/components/Layout.css'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
        {children}
    </div>    
  )
}

export default Layout