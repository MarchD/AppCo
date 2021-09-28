import {createContext, useState} from "react";
import {getUser, getUsers} from "../../api/API";

const initialUser = {
    createdAt: "",
    email: "",
    first_name: "",
    gender: "",
    id: 1,
    ip_address: "",
    last_name: "",
    total_clicks: 0,
    total_page_views: 0,
    updatedAt: ""
};

export const AppContext = createContext({
    users: [],
    getAllUsers: function () {},
    getUserById: function () {},
    pageData: {
        lastPage: 1,
        currentPage: 1
    },
    user: initialUser,
    isLoader: false,
    clearUser: function () {}
});

export const AppContainer = (props = null) => {
    const [users, setUsers] = useState([]);
    const [pageData, setPageData] = useState({
        lastPage: 1,
        currentPage: 1
    });
    const [user, setUser] = useState(initialUser);
    const [isLoader, setIsLoader] = useState(false);

    const getAllUsers = (page) => {
        setIsLoader(true);
        getUsers(page)
            .then(res => {
                setUsers(res.data);
                setPageData(current => ({
                    ...current,
                    currentPage: res.meta.currentPage
                }));

                if (pageData.lastPage !== res.meta.lastPage) {
                    setPageData(current => ({
                        ...current,
                        lastPage: res.meta.lastPage,
                    }));
                }

                setIsLoader(false);
            })
            .catch(e => console.log(e));
    };

    const getUserById = id => {
        setIsLoader(true);
        getUser(id).then((res) => {
            setUser(res);
            setIsLoader(false);
        });
    };

    const clearUser = () => {
        setUser(initialUser);
    };

    return (
        <AppContext.Provider value={{
            users,
            user,
            getAllUsers,
            getUserById,
            pageData,
            isLoader,
            clearUser
        }}>
            {props.children}
        </AppContext.Provider>
    )
};
