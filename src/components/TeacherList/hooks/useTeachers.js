import {useDispatch} from "react-redux";
import {actions} from "../../../store";
// import { getTeachersTest } from "../../../utils/testData";
import {useEffect} from "react";
import { useQuery } from '@apollo/client';
import {GET_TEACHERS} from "./teachersQuery";
export const useTeachers = () => {
    const dispatch = useDispatch();
    const {data} = useQuery(GET_TEACHERS);
    useEffect(() => {
        data && dispatch(actions.setTeachers(data?.getEmployees));
    }, [data])
}
