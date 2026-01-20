import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

function PorductsPage(){
    return (
        <Layout
            header={<Header />}
            main={<div>Products Page</div>}
            footer={<Footer />}
        />
    )
}
export default PorductsPage;