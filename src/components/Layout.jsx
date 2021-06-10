import '../assets/styles/components/Layout.css'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      <div className="layout-content-container">
        {children}
      </div>
    </div>    
  )
}

export default Layout