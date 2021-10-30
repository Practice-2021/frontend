import Layout from "../../components/Layout";
import Search from "../../components/Search";
import TeacherList from "../../components/TeacherList";
const ListPage = () => {
    return (
        <Layout className="w-full h-full bg-white filter drop-shadow-xl">
            <Search className="flex justify-center pt-4"/>
            <TeacherList className="flex flex-wrap mx-auto flex-col"/>
        </Layout>
    )
}
export default ListPage;