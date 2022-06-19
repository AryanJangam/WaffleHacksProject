import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className='container'>
                {/* <Link to="/">
                    <h1>ArtWebsite</h1>
                </Link> */}
                <h1>ArtWebsite</h1>
            </div>
            <div>
            <div className="Menubar">
            <ul>

                <li className="active"> <Link to="/"> Home</Link></li>
                <li><i className="fa fa-bars"></i>Category
                <div className="submenu">
                <ul>
                  <li><Link to="/sculpture"> Sculpture</Link></li>
                  <li><Link to="/fashion"> Fashion</Link></li>
                  <li><Link to="/pottery"> Pottery</Link></li>
                  <li><Link to="/sketch"> Sketch</Link></li>
                </ul>   
                </div>                       
                </li>
                <li><Link to='/auth'><i className="fa fa-user-plus"></i>Login</Link></li>
                <li><Link to="/upload"> Upload</Link></li>
                {/* <li><i className="fa fa-window-maximize"></i> Forums</li> */}
                <li><i className="fa fa-user-plus"></i>Logout</li>
                {/* <li><i className="fa fa-info" ></i>Subscribe</li> */}
                <li><Link to='/'><i className="fa fa-home" ></i> Home</Link></li>
                <li><Link to="/cart"> Cart</Link></li>
            </ul>
            </div>
            </div>
        </header>
    )
}

export default Navbar