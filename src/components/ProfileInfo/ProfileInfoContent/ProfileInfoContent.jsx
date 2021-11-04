import {useSelector} from "react-redux";
import {countYears} from "../../../utils/countYears";
const ProfileInfoContent = () => {
    const {teacher} = useSelector(state=>state.profile);
    return (
        <div>
            <p className="text-md mb-2">Уровень образования: {teacher?.education_level}</p>
            <p className="text-md mb-2">Квалицифкация: {teacher?.qualification}</p>
            <p className="text-md mb-2">Специальность: {teacher?.speciality}</p>
            <p className="text-md mb-2">Общий стаж работы: {countYears(teacher?.total_exp)}</p>
            <p className="text-md">Стаж работы по специальности: {countYears(teacher?.exp_spec)}</p>
        </div>
    )
}
export default ProfileInfoContent;