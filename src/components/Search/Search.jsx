import { FaSearch } from "react-icons/fa";
import {useSearch} from "./hooks/useSearch";
import {useSelector} from "react-redux";
const Search = ({className}) => {
    const {search} = useSelector(state=>state.list);
    const {onSearch} = useSearch();
    return (
        <div className={className}>
            <div className="mt-1 flex rounded-md shadow-sm w-5/6 md:w-2/3 lg:w-1/2 h-10 border-2 ">
                <span className="inline-flex items-center px-3 rounded-l-md border-r bg-gray-50 text-gray-500 text-sm">
                    <FaSearch />
                </span>
                <input onChange={onSearch} value={search} type="text" className="pl-4 focus:outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Поиск преподавателей..." />
            </div>
        </div>
    )
}
export default Search;