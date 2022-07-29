import Navbar from "./Navbar"
import logo from "../assets/images/logo.png"

function Header() {
  return (
    <>
      <header className="header">
        <div className="container d-flex align-items-center justify-content-between">
          <a className="header-link" href="#">
            <img src={logo} alt="logo" width="60" height="60" />
          </a>

          <Navbar/>
        </div>
      </header>
    </>
  )
}

export default Header