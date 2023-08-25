import React from "react";

import ConnectionView from "../view/ConnectionView";

export default function ConnectionController(props) {

    const backUrl = "http://34.163.120.93:8081/api/security";

    function fetchOwner(login, password) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: login, password: password })
        };
        fetch(`${backUrl}/authorize`, requestOptions)
            .then(response => response.json())
            .then(json => props.setOwner({
                token: json.token,
                id: json.owner.id,
                name: json.owner.name,
                surname: json.owner.surname
            }));
    }

     return (
         <ConnectionView fetchOwner={(login, password) => fetchOwner(login, password)} />
     );
}