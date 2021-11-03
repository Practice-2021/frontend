import ListPage from "../pages/ListPage";
import ProfilePage from "../pages/ProfilePage";
export const routes = [
    {
        path: "/",
        component: ListPage,
        exact: true
    },
    {
        path: "/profile/:id",
        component: ProfilePage,
        exact: true
    },
];