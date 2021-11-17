import {useSelector} from "react-redux";
const ProfileBiography = () => {
    const {teacher} = useSelector(state=>state.profile);
    return (
        <div className="mt-6 bg-seashell p-4">
            <p className="text-xl mb-4">Биография</p>
            <p className="whitespace-pre-line">{teacher?.retraining}</p>
        </div>
    )
}
export default ProfileBiography;