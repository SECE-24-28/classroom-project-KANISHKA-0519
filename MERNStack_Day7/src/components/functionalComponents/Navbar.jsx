import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <ul>
          <Link to="/home"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/learn-react"><li>Learning React</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
    </nav>
  )
}
export default Navbar