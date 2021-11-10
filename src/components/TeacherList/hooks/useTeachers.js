import {useDispatch} from "react-redux";
import {actions} from "../../../store";
import { getTeachersTest } from "../../../utils/testData";
import {useEffect} from "react";
import { useQuery } from '@apollo/client';
import {GET_TEACHERS} from "./teachersQuery";
export const useTeachers = () => {
    const dispatch = useDispatch();
    // const {data} = useQuery(GET_TEACHERS);
    useEffect(() => {
        const getTeachers = async () => {
            await getTeachersTest().then((data) => dispatch(actions.setTeachers(data)));
        }
        getTeachers();
    }, [])
}
