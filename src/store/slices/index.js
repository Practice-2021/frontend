import {actions as listActions} from "./list";
import {actions as profileActions} from "./profile";
export const actions = {
    ...profileActions,
    ...listActions
};