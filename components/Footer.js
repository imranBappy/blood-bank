/* eslint-disable @next/next/no-sync-scripts */

const Footer = () => {
    return (
        <>
            <br />
            <footer className="bg-dark py-3" >
                <p
                    style={{ margin: "0", padding: "0" }}
                    className="text-muted text-center"
                >
                    ALL RIGHTS RESERVED © 2022 | PRIVACY POLICY | TERMS OF SERVICE{" "}
                </p>
            </footer>
            <script
                src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
                integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
                integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
                crossOrigin="anonymous"
            ></script>
        </>
    );
};

export default Footer;