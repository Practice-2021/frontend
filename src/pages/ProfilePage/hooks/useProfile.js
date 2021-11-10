import {useDispatch} from "react-redux";
import {useEffect} from "react";
import { getTeacher } from "../../../utils/testData";
import {actions} from "../../../store";
export const useProfile = () => {
    const id = +window.location.pathname.split("profile/")[1];
    const dispatch = useDispatch();
    useEffect(() => {
        const getTeacherById = async () => {
            // await client
            //     .query({
            //         query: gql`
            //             query getEmployees(id: $id) {
            //                 id
            //             }
            //         `
            //     })
            // .then(result => console.log(result))
            // .catch(err => console.log(err));
            await getTeacher(id).then((data) => dispatch(actions.setTeacher(...data)));
        }
        getTeacherById();
    }, [])
}