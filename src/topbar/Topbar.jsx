import { Link } from "react-router-dom";
import "./topbar.css"

export default function Topbar() {
  const user = true;
  return (
    <div className='top'>
    <div className="topLeft">
    <i className="topIcon fa-brands fa-square-facebook"></i>
    <i className="topIcon fa-brands fa-square-twitter"></i>
    <i className="topIcon fa-brands fa-square-instagram"></i>
    <i className="topIcon fa-brands fa-line"></i>
    </div>
    <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
            <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
        </ul>
    </div>
    <div className="topRight">
      {user ? (
          <img className="topImg" src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?cs=srgb&dl=pexels-george-dolgikh-giftpunditscom-1326946.jpg&fm=jpg" alt=""/>
        ) : (
           <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
            </li>
           </ul>
        )}
       <i className="topSearchIcon fas fa-search"></i>
    </div>
    </div>
  )
}
