import {useHistory} from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import {actions} from "../../../store";
import {useDispatch} from "react-redux";
const ProfileBackButton = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const onBackClick = () => {
        dispatch(actions.setTeacher(null));
        history.push("/");
    }
    return (
        <button onClick={onBackClick} className="absolute flex justify-content-center items-center top-2 left-2 text-lg text-roof-terracotta">
            <FaAngleLeft />Назад
        </button>
    )
}
export default ProfileBackButton;