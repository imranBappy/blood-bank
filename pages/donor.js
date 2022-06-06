import DonorList from "../components/DonorList";
import Layout from "../components/Layout";
import DonorSearch from "../components/DonorSearch";
const donor = () => {
  return (
    <>
      <Layout title="Blood Bank">
        <DonorSearch />
        <div className="donor__wrapper">
          <div className="donor__container">
            <DonorList />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default donor;
