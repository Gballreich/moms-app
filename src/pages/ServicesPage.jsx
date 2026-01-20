import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

function ServicesPage(){
    return (
        <Layout
            header={<Header />}
            main={<div>Services Page</div>}
            footer={<Footer />}
        />
    )
}
export default ServicesPage;