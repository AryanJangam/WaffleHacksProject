import FileBase from 'react-file-base64';

const Upload = () => {

    return (
        <nav>
            <div>
            <form className="form" action="/" method="POST">
                <h2 id="uptitle">UPLOAD ART</h2>
                <p className="pc">Name:<input type="text" required placeholder="Write your name here.."></input></p>
                <p type="Title:" className="pc"><input type="text" required placeholder="Name of your artwork.."></input></p>
                <p type="Message:" className="pc"><input type="text" placeholder="Details about your art.."></input></p>
                <p type="Price:" className="pc"><input type="number" required placeholder="Price you'd like to sell it at..."></input></p>
                {/* <p type="File:" className="pc"><input type="file" accept=".jpg, .jpeg, .png"/></p> */}
                <p type="File:" className="pc"><FileBase type="file" multiple={false} accept=".jpg, .jpeg, .png"/></p>
                <button id="upl">UPLOAD!</button>
                <div>
                {/* <span className="fa fa-phone"></span>001 1023 567
                <span className="fa fa-envelope-o"></span> contact@company.com */}
                </div>
            </form>
            </div>
        </nav>
    )
}

export default Upload