import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

function InfoPage(){
    return (
        <Layout
            header={<Header />}
            main={<div>Info Page</div>}
            footer={<Footer />}
        />
    )
}
export default InfoPage;