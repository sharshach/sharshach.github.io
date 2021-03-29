import React from "react";
import './Projects.css';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
  } from "@material/react-card";
import '@material/react-card/dist/card.css';
export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {data}=this.props;
        return(
            <Card >
                <CardPrimaryContent>
                    <h1>{data.name}</h1>
                    <CardMedia square imageUrl='./my/fancy/image.png' />
                </CardPrimaryContent>

                <CardActions>
                    <CardActionButtons>
                    <button>Click Me</button>
                    </CardActionButtons>

                    <CardActionIcons>
                    <i>Click Me Too!</i>
                    </CardActionIcons>
                </CardActions>
            </Card>
        )
    }
}
