import Auth from "../../utils/auth";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <div className="navbar justify-between bg-neutral text-neutral-content">
        <div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="nav-logo h-10" src="/gitFitWht.png" alt="logo" />
          </a>
        </div>
        <div className="justify-end">
          {Auth.loggedIn() && (
            <>
              {location.pathname != "/metrics" && (
                <button
                  className="btn btn-sm btn-light m-2"
                  onClick={() => navigate("/metrics")}
                >
                  Metrics
                </button>
              )}

              <button className="btn btn-sm btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
      ;
    </>
  );
};
export default Navbar;
