import Layout from "../../components/Layout";
import Search from "../../components/Search";
import TeacherList from "../../components/TeacherList";
import TeacherItem from "../../components/TeacherList/TeacherItem";
import { SearchBar, ResultsList } from 'react-searchkit';
const ListPage = () => {
    const renderResultsList = results => {
        return results.map(result => <TeacherItem />);
    }
    const renderSearchBar = (placeholder, currentQueryString, onInputChange, executeSearch) => {
        return <Search className="flex justify-center pt-4"/>
    }
    return (
        <Layout className="w-full md:h-full bg-white filter drop-shadow-xl pb-8">
            <SearchBar renderElement={renderSearchBar}/>
            <ResultsList className="flex flex-wrap justify-between mt-12 mx-8 md:mx-12 lg:mx-24 xl:mx-40 2xl:mx-48" renderElement={renderResultsList}/>
            {/* <Search className="flex justify-center pt-4"/>
            <TeacherList className="flex flex-wrap justify-between mt-12 mx-8 md:mx-12 lg:mx-24 xl:mx-40 2xl:mx-48 "/> */}
        </Layout>
    )
}
export default ListPage;
