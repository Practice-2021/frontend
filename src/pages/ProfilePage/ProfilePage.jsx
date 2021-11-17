import Layout from "../../components/Layout";
import ProfileBiography from "../../components/ProfileBiography"
import ProfileDisciplines from "../../components/ProfileDisciplines";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileInfo from "../../components/ProfileInfo";
import {useProfile} from "./hooks/useProfile";
const ProfilePage = () => {
    useProfile();
    return (
        <Layout className="w-full bg-white filter drop-shadow-xl max-w-5xl py-10 px-2 md:px-16 md:py-10">
            <ProfileHeader />
            <ProfileInfo />
            <ProfileDisciplines />
            <ProfileBiography />
        </Layout>
    )
}

export default ProfilePage;