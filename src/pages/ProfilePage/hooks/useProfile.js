import {useDispatch} from "react-redux";
import {useEffect} from "react";
import { getTeacher } from "../../../utils/testData";
import {actions} from "../../../store";

export const useProfile = () => {
    const id = +window.location.pathname.split("profile/")[1];
    const dispatch = useDispatch();
    useEffect(() => {
        const getTeacherById = async () => {
            await getTeacher(id).then((data) => dispatch(actions.setTeacher(...data)));
        }
        getTeacherById();
    }, [])
}