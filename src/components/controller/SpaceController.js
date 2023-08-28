import React, { useEffect } from "react";

import SpaceView from "../view/SpaceView";

export default function SpaceController(props) {

    useEffect(() => fetchOwnerCats(), []);
cd
    const backUrl = "http://34.163.120.93:8081/api/space";

    function fetchOwnerCats() {
        const requestOptions = {
            headers: { "Authorization": `Bearer ${props.owner.token}` }
        };
        fetch(backUrl + `/owner/${props.owner.id}/cats`, requestOptions)
            .then(response => response.json())
            .then(json => props.setOwner({ 
                ... props.owner,
                cats: json
            }));
    }

    return (
        <SpaceView owner={props.owner} />
    );
}