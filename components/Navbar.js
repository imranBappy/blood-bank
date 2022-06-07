/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import { connect } from "react-redux";
import { logoutAction } from "../store/actions/authAction";
import styles from "../styles/Home.module.css";
const Navbar = (props) => {
  const { displayName } = props.user || {};
  const logout = () => {
    props.logoutAction();
  };
  return (
    <>
      <nav className="navbar navbar__container navbar-expand-lg navbar-dark navbar-dark bg-dark">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand"> Blood Bank </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${styles.nav__left}`}
            id="navbarScroll"
          >
            <ul
              className={`navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ${styles.m__r0}`}
            >
              <li className="nav-item">
                <Link href={props.user.displayName ? "/donor" : "/login"}>
                  <a className="nav-link active">Donar</a>
                </Link>
              </li>

              {props.user.displayName ? (
                ""
              ) : (
                <li className="nav-item">
                  {" "}
                  <Link href="/login">
                    <a className="nav-link">Donate</a>
                  </Link>
                </li>
              )}
              <li className="nav-item">
                {props.user.displayName ? (
                  <Link href="/">
                    <a className="nav-link">
                      {" "}
                      ( {displayName} ) <span onClick={logout}>Logout</span>{" "}
                    </a>
                  </Link>
                ) : (
                  <Link href="/login">
                    <a className="nav-link">Join</a>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, { logoutAction })(Navbar);
