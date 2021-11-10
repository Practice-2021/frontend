import Layout from "../../components/Layout";
import EditForm from "../../components/EditForm";
import BackButton from "../../components/BackButton";
const EditPage = () => {
    return (
        <Layout className="w-full bg-white filter drop-shadow-xl max-w-4xl py-10 px-2 md:px-16 md:py-10">
            <BackButton path={`/profile/${+window.location.pathname.split('/edit/')[1]}`} />
            <EditForm />
        </Layout>
    )
}
export default EditPage;