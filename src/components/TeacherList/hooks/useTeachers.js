import {useDispatch} from "react-redux";
import {actions} from "../../../store";
import { getTeachersTest } from "../../../utils/testData";
import {useEffect} from "react";
export const useTeachers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getTeachers = async () => {
            await getTeachersTest().then((data) => dispatch(actions.setTeachers(data)));
        }
        getTeachers();
    }, [])
}
