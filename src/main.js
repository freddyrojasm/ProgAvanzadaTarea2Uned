import "bootstrap/dist/css/bootstrap.min.css";
import './main.scss'
import { routes } from "./Routes/index.routes";

routes(window.location.hash)

window.addEventlistener('haschange',() => {

    routes(window.location.hash)
})