import ProfileInfoContent from "./ProfileInfoContent";
import ProfileInfoAside from "./ProfileInfoAside";
const ProfileInfo = () => {
    return (
        <div className="flex mt-8 justify-between">
            <ProfileInfoContent />
            <ProfileInfoAside />
        </div>
    )
}
export default ProfileInfo;