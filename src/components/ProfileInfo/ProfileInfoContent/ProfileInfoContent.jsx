import {useSelector} from "react-redux";
const ProfileInfoContent = () => {
    const {teacher} = useSelector(state=>state.profile);
    return (
        <div>
            <p>Уровень образования: {teacher.education_level}</p>
            <p>Квалицифкация: {teacher.qualification}</p>
            <p>Специальность: {teacher.speciality}</p>
            <p>Общий стаж работы: {teacher.total_exp}</p>
            <p>Стаж работы по специальности: {teacher.exp_spec}</p>
        </div>
    )
}
export default ProfileInfoContent;