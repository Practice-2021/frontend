import ListPage from "../pages/ListPage";
import ProfilePage from "../pages/ProfilePage";
import EditPage from "../pages/EditPage";
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
    {
        path: "/edit/:id",
        component: EditPage,
        exact: true
    }
];