//import {Link} from 'react-router-dom'

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
                <li className="active"><i className="fa fa-home" ></i> Home</li>
                <li><i className="fa fa-id-card"></i> Resume</li>
                <li><i className="fa fa-window-maximize"></i> Forums</li>
                <li><i className="fa fa-user-plus"></i>Login</li>
                <li><i className="fa fa-info" ></i>Subscribe</li>
            </ul>
            </div>
            </div>
        </header>
    )
}

export default Navbar