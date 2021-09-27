import {createContext, useState} from "react";
import {getUsers} from "../../api/API";

export const AppContext = createContext({
    users: [],
    getAllUsers: function () {},
    pageData: {
        lastPage: 1,
        currentPage: 1
    },
    isLoader: false
});

export const AppContainer = (props = null) => {
    const [users, setUsers] = useState([]);
    const [pageData, setPageData] = useState({
        lastPage: 1,
        currentPage: 1
    });
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
    }

    return (
        <AppContext.Provider value={{
            users,
            getAllUsers,
            pageData,
            isLoader
        }}>
            {props.children}
        </AppContext.Provider>
    )
};
