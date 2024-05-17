import mysql from "../../Data/mysql";
import Cards from "../molecules/Cards";
import './Section.css'
function Section(){
    return(
        <div id="cards_section">
            {mysql.contacts.map(contacts=><Cards image={contacts.image} text={contacts.text} ></Cards>)}
        </div>
    )
}

export default Section