import {useDispatch} from "react-redux";
import {actions} from "../../../store";
export const useSearch = () => {
    const dispatch = useDispatch();
    const onSearch = (e) => {
        dispatch(actions.setSearch(e.target.value));
    }
    return {onSearch};
}