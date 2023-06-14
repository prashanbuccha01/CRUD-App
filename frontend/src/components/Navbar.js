import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      {auth ? (
        <ul className="nav-ul">
          <li className="img-li">
            <img
              src="https://www.pngfind.com/pngs/m/167-1672143_fb-logo-transparent-whatsapp-facebook-instagram-logo-hd.png"
              className="img"
              alt=""
            />
          </li>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>
            <Link to="/update/">Update</Link>
          </li>
          <li>
            <Link to="/logout" onClick={() => logout()}>
              Logout ({JSON.parse(auth).name.toUpperCase()})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
