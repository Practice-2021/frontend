import {useSelector} from "react-redux"
const ProfileDisciplines = () => {
    const {teacher} = useSelector(state=>state.profile);
    return (
        <div className="mt-6">
            <p className="text-lg">Преподаваемые дисциплины</p>
            <ul className="pl-8 mt-4">
                {teacher?.subjects && teacher?.subjects.map((discipline,id) => <li key={id} className="text-md mb-1">{discipline}</li>)}
            </ul>
        </div>
    )
}

export default ProfileDisciplines;