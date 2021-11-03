import {useSelector} from "react-redux";
const ProfileInfoAside = () => {
    const {teacher} = useSelector(state=>state.profile);
    return(
        <div className="flex">
            <div className="w-4 bg-red-500"></div>
            <div>
                <p>Публикации: {teacher.publications}</p>
                <p>Заявки: {teacher.applications}</p>
                <p>Гранты: {teacher.grants}</p>
                <p>Проекты: {teacher.projects}</p>
            </div>
        </div>
    )
}
export default ProfileInfoAside;