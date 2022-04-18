/* eslint-disable react/no-unknown-property */
import Link from 'next/link'
import { connect } from 'react-redux';
import { logoutAction } from '../store/actions/authAction';
const Navbar = (props) => {
    const { displayName } = props.user || {}
    const logout = () => {
        props.logoutAction()
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand" >Navbar</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/donor">
                                    <a className="nav-link">Donor</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/blogs">
                                    <a className="nav-link">Blogs</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                {props.user.displayName ? <Link href="/">
                                    <a className="nav-link"> ( {displayName} ) <span onClick={logout}>Logout</span> </a>
                                </Link>
                                    : <Link href="/login">
                                        <a className="nav-link">Join</a>
                                    </Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
const mapStateToProps = (state) => ({
    user: state.auth.user
})
export default connect(mapStateToProps, { logoutAction })(Navbar);