import {useSelector} from "react-redux";
const ProfileInfoAside = () => {
    const {teacher} = useSelector(state=>state.profile);
    return(
        <div className="flex bg-seashell py-2 px-3 md:py-5 md:px-6">
            <div className="w-5 bg-roof-terracotta mr-5"></div>
            <div>
                <p className="text-lg">Публикации: {teacher?.publications}</p>
                <p className="text-lg">Заявки: {teacher?.applications}</p>
                <p className="text-lg">Гранты: {teacher?.grants}</p>
                <p className="text-lg">Проекты: {teacher?.projects}</p>
            </div>
        </div>
    )
}
export default ProfileInfoAside;