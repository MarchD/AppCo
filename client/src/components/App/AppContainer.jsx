import {createContext, useState} from "react";
import {getUsers} from "../../api/API";

export const AppContext = createContext({
    users: [],
    getAllUsers: function () {},
    pageData: {
        lastPage: 1,
        currentPage: 1
    }
});

export const AppContainer = (props = null) => {
    const [users, setUsers] = useState([]);
    const [pageData, setPageData] = useState({
        lastPage: 1,
        currentPage: 1
    });

    const getAllUsers = (page) => {
        console.log(page)
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
            })
            .catch(e => console.log(e));
    }

    return (
        <AppContext.Provider value={{
            users,
            getAllUsers,
            pageData
        }}>
            {props.children}
        </AppContext.Provider>
    )
};
