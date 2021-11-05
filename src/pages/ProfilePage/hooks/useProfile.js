import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import { getTeacher } from "../../../utils/testData";
import {actions} from "../../../store";

export const useProfile = () => {
    const {id} = useSelector(state=>state.profile) || window.location.pathname.split("profile/")[1];
    const dispatch = useDispatch();
    useEffect(() => {
        const getTeacherById = async () => {
            await getTeacher(id).then((data) => dispatch(actions.setTeacher(...data)));
        }
        getTeacherById();
    }, [])
}