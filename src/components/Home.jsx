// import { useParams } from "react-router-dom";
import  Button  from "@material-ui/core/Button";

export const Home = () => {
    // const { id } = useParams();
    const navigateHome = () => {
      console.log("navigate home");
    };
    const navigateBack = () => {
      console.log("navigate back");
    };
    const windowOpener = () => {
        window.open('https://app.bergsystem.pl/conference_confirm/?id=18&system=appdb1766&user=4b591c30fc20ac2f1a2d1b5c704edb01&view=outside');
    }

    return (
      <div>
        <h2>Karols's App</h2>
        <Button variant="outlined" onClick={navigateHome}>
          Navigate home
        </Button>
        <Button variant="outlined" onClick={navigateBack}>
          Go back
        </Button>
        <Button variant="outlined" onClick={windowOpener}>
            Berg Form
        </Button>
      </div>
    );
}