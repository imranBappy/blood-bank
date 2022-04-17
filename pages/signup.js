import Layout from "../components/Layout";
import Link from 'next/link';

export default function Signup() {
    return (
        <Layout title="Signup">
            <form >
                <div className="mt-5 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="staticEmail" />
                    </div>
                </div>
                <div className="mt-5 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="staticEmail" />
                    </div>
                </div>
                <div className="mt-5 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="phone" className="form-control" />
                    </div>
                </div>
                <div className="mt-5 row">
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                        <select className="form-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5 row">
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                        <input className="form-control " list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                        <datalist id="datalistOptions">
                            <option value="San Francisco" />
                            <option value="New York" />
                            <option value="Seattle" />
                            <option value="Los Angeles" />
                            <option value="Chicago" />
                        </datalist>
                    </div>

                </div>
                <div className="mt-5 row">

                    <label htmlFor="exampleDataList" className="form-label">Datalist example</label>
                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                    <datalist id="datalistOptions" >
                        <option value="San Francisco" />
                        <option value="New York" />
                        <option value="Seattle" />
                        <option value="Los Angeles" />
                        <option value="Chicago" />
                    </datalist>
                </div>
                <div className="mt-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" />
                    </div>
                </div>



                <div className="row mt-5">
                    <button className="btn btn-primary">Login</button>
                </div>
                <Link href="/login">
                    <a><p>Have a already account</p></a>
                </Link>
            </form>
        </Layout>
    )
}
