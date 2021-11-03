import {useSelector} from "react-redux";
const ProfileBiography = () => {
    const {teacher} = useSelector(state=>state.profile);
    return (
        <div>
            <p>Биография</p>
            <p>{teacher.biography}</p>
        </div>
    )
}
export default ProfileBiography;