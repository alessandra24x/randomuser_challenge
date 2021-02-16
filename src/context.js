import React, { useState, useEffect, createContext } from 'react';
import service from './services/service';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState("init");

    function loadMore() {
        service().then(newUsers => setUsers(oldUsers => oldUsers.concat(newUsers)));
    }

    const state = { users };
    const actions = { loadMore };

    useEffect(function () {
        service()
            .then(initUsers => {
                setUsers(initUsers);
                setStatus("resolved");
            })
            .catch(() => {
                setStatus("rejected");
            })

    }, []);

    if (status === "init") return <small>Cargando...</small>
    if (status === "rejected") return <small>Hubo un problema con la carga de datos. Intente nuevamente</small>

    return <UserContext.Provider value={{ state, actions }}>{children}</UserContext.Provider>
}

export { UserContext as default, UserProvider };