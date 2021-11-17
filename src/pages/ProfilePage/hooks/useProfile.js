import {useDispatch} from "react-redux";
import {useEffect} from "react";
//import { getTeacher } from "../../../utils/testData";
import {GET_TEACHER} from "./teacherQuery";
import { useQuery } from '@apollo/client';
import {actions} from "../../../store";
export const useProfile = () => {
    const id = window.location.pathname.split("profile/")[1];
    const { data } = useQuery(GET_TEACHER, {
        variables: {
            "getEmployeeByIdId": id
        },
    });
    const dispatch = useDispatch();
    useEffect(() => {
        // const getTeacherById = async () => {
        //     await getTeacher(id).then((data) => dispatch(actions.setTeacher(...data)));
        // }
        // getTeacherById();
        data && dispatch(actions.setTeacher(data.getEmployeeById));
    }, [data])
}