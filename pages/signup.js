import Layout from "../components/Layout";
import Link from 'next/link';
import SignupForm from "../components/SignupForm";

export default function Signup() {
    return (
        <Layout title="Signup">
            <SignupForm />
            {/* <Link href="/login">
                <a><p>Have a already account</p></a>
            </Link> */}
        </Layout>
    )
}
