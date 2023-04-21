import { useEffect, useState } from "react";

//packages
import axios from "axios";

//components
import UsersList from "./components/UsersList";
import Faq from "./components/Faq";

//css
import "./App.css";

function App() {
    //states
    const [userList, setUserList] = useState([]);

    //users-data fetching api
    const fetchUsers = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUserList(response?.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <>
            <UsersList
                userList={userList}
                setUserList={setUserList}
            />

            <Faq />
        </>
    );
}

export default App;
