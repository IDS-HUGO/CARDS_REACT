import './Cards.css'
import Image from "../atoms/Image"
import Text from "../atoms/Text"
function Cards(props){
    return(
        <div id='cards_card_box'>
            <Image image={props.image} ></Image>
            <Text text={props.text} ></Text>
        </div>
    );
}

export default Cards