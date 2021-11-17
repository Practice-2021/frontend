import {useSelector} from "react-redux";
import {countYears} from "../../../utils/countYears";
const ProfileInfoContent = () => {
    const {teacher} = useSelector(state=>state.profile);
    return (
        <div>
            <p className="text-md mb-2">Уровень образования: {teacher?.educationLevel}</p>
            <p className="text-md mb-2">Квалицифкация: {teacher?.qualification}</p>
            <p className="text-md mb-2">Специальность: {teacher?.speciality}</p>
            <p className="text-md mb-2">Общий стаж работы: {countYears(teacher?.experience)}</p>
            <p className="text-md">Стаж работы по специальности: {countYears(teacher?.professionalExperience)}</p>
        </div>
    )
}
export default ProfileInfoContent;