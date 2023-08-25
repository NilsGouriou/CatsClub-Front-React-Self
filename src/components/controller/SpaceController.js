import React, { useEffect } from "react";

import SpaceView from "../view/SpaceView";

export default function SpaceController(props) {

    useEffect(() => fetchOwnerCats(), []);

    const backUrl = "http://10.200.0.2:8081/api/space";

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