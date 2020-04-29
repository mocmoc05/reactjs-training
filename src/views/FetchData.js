import React, { useEffect, useState } from 'react';

const FetchData = () => {

    const [users, setUsers] = useState([]);

    const getData = () => {
        fetch('https://5e8f4470fe7f2a00165ef149.mockapi.io/api/v1/users', {
            //method: get, post, put, delete
            method: 'get',
            headers: {
                Accept: 'Application/json',
                // Authorization: 'Bearer ' + token
            },
            // body: JSON.stringify({}) - chi post/put co body va get k co body
        })
            .then(res => res.json())
            .then(resJSON => {
                console.log({ resJSON })
            })
    }

    const getData2 = async () => {
        const res = await fetch('https://5e8f4470fe7f2a00165ef149.mockapi.io/api/v1/users', {
            //method: get, post, put, delete
            method: 'get',
            headers: {
                Accept: 'Application/json',
                // Authorization: 'Bearer ' + token
            },
            // body: JSON.stringify({}) - chi post/put co body va get k co body
        });
        const resJSON = await res.json();
        console.log({ resJSON })
        setUsers(resJSON)
    }

    useEffect(() => {
        getData2();
    }, [])

    return (
        <div>
            <p>Fetch data Users: </p>
            {
                users.map((user, index) => {
                    return (
                        <div key={index}>
                            <p >Name: {user.name} - Email: {user.email}</p>
                            <img src={user.imageUrl} />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default FetchData;