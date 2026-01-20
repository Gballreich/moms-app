import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutPage(){
    return (
        <Layout
            header={<Header />}
            main={<div>About Page</div>}
            footer={<Footer />}
        />
    )
}
export default AboutPage;