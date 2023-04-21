function UsersList({ userList, setUserList }) {
    //delete user function
    const deleteUser = (userId) => {
        setUserList(userList.filter((user) => user?.id !== userId));
    };
    return (
        <ul>
            {userList?.map((user) => (
                <li key={user?.id}>
                    <h2>{user?.name} </h2>
                    <button
                        className="delete"
                        onClick={() => deleteUser(user?.id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default UsersList;
