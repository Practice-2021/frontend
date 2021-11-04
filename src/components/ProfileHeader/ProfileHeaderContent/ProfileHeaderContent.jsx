import {useSelector} from "react-redux";
const ProfileHeaderContent = () => {
    const {teacher} = useSelector(state=>state.profile);
    const onButtonClick = (link) => {
        window.open(link, '_blank');
    }
    return (
        <div className="ml-48md:ml-12">
            <p className="text-xl md:text-4xl">{teacher?.full_name}</p>
            <p className="mt-2 md:mt-4 text-xl">{teacher?.position}</p>
            <p onClick={() => onButtonClick(teacher?.dep_link)} className="mt-2 text-lg cursor-pointer underline text-roof-terracotta">{teacher?.department}</p>
            <p className="mt-2 text-lg">{teacher?.email}</p>
            <div className="flex mt-8 flex-col md:flex-row">
                <button className="h-8 mb-2 md:mb-0 md:w-32 md:h-10 bg-seashell text-roof-terracotta text-lg" onClick={() => onButtonClick(teacher?.pure)}>Pure</button>
                <button className="h-8 md:w-32 md:h-10 bg-seashell text-roof-terracotta md:ml-4 text-lg" onClick={() => onButtonClick(teacher?.timetable)}>Расписание</button>
            </div>
        </div>
    )
}
export default ProfileHeaderContent;