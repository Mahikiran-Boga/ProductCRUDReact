import { useState,useEffect } from "react";
function DisplayingDataAPI() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUsers(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {users.map((user) => (
                <div className="user" key={user.id}>
                    <h1>{user.id}</h1>
                    <p>{user.title}</p>
                    <p>{user.body}</p>
                </div>
            ))}
        </div>
    );
}

export default DisplayingDataAPI;
