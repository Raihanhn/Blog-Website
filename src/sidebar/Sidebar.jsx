import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.pexels.com/photos/1406766/pexels-photo-1406766.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1406766.jpg&fm=jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ut, quam iste, sapiente pariatur cupiditate itaque iusto voluptate.</p>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">CATEGORIES</span>
    <ul className="sidebarList">
       <li className="sidebarListItem">Life</li>
       <li className="sidebarListItem">Music</li>
       <li className="sidebarListItem">Style</li>
       <li className="sidebarListItem">Sport</li>
       <li className="sidebarListItem">Tech</li>
       <li className="sidebarListItem">Cinema</li>
    </ul>
     </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial">
    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
    <i className="sidebarIcon fa-brands fa-line"></i>
    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
    </div>
    </div>
    </div>
  )
}
