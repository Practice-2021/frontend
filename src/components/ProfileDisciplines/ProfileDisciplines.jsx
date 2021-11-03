import {useSelector} from "react-redux"
const ProfileDisciplines = () => {
    const {teacher} = useSelector(state=>state.profile);
    return (
        <div>
            <p>Преподаваемые дисциплины:</p>
            <ul>
                {teacher.disciplines && teacher.disciplines.map((discipline) => <li>{discipline}</li>)}
            </ul>
        </div>
    )
}

export default ProfileDisciplines;