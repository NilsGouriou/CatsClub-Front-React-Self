import React, { useState } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";

import CatBreed from "../entity/CatBreed";

export default function SpaceView(props) {

    const [displayedCat, setDisplayedCat] = useState(null);

    function catLinks() {
        console.log(props.owner);
        const cats = [];
        if (props.owner.cats == undefined) {
            return cats;
        }
        for (let i = 0; i < props.owner.cats.length; i++) {
            cats.push(
                <Button 
                    key={i} 
                    variant="outline-dark rounded border-0 m-1 d-block btn-lg"
                    onClick={() => setDisplayedCat(props.owner.cats[i])}
                >
                    {props.owner.cats[i].name}
                </Button>
            );
        }
        return cats;
    }

    return (
        <Row className="p-3 pt-5">
			<Col sm={5} md={4} lg={3}>
				<h3>Mes chats :</h3>
				{catLinks()}
			</Col>
			<Col sm={7} md={8} lg={9}>
                <Card className="p-3">
					<h4>
                        Race : 
                        <label>
                            {displayedCat != null 
                            ? new CatBreed(displayedCat.breed).displayName() 
                            : ""}
                        </label>
                    </h4>
					<h4>
                        Date de naissance : 
                        <label>
                            {displayedCat != null 
                            ? new Date(displayedCat.birthdate).toLocaleDateString('fr', { year:"numeric", month:"long", day:"numeric"}) 
                            : ""}
                        </label>
                    </h4>
					<Image src={displayedCat != null ? `./${displayedCat.picture}` : ""} width="100%"/>
				</Card>
			</Col>
		</Row>
    );
}