import React, { useState, useEffect } from 'react';

function GetAllUsers() {
    const [AllUsers, setAllUsers] = useState(null);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch(`/api/graphql/gql_users`)
            .then(response => response.json())
            .then(data => setAllUsers(JSON.stringify(data)));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
         AllUsers
    );
}


export { GetAllUsers };