import Input from "@material-ui/core/Input";
import { Button } from "@material-ui/core";
import "./Input.css";

const Inputer = ({input,setInput,findWeather}) => {
const handleChange = (event) =>{
    setInput(event.target.value);
};
const handleClick = (event)=>{
    event.preventDefault();
    findWeather();
};
    return(
        <div className="inputBox">
            <div className="inputBox__field">
                <h1>Google weather App</h1>
                <p>powered by Google</p>
                <img src = "https://assets.materialup.com/uploads/3a91ac9f-f60f-4370-b58b-171d988c3b4b/preview.jpg"
            alt = "logo"
            />
            <form>
            <Input placeholder = " Enter the city name" onChange={handleChange} value={input}/>
            <br/>
                        <Button variant ="contained" color="primary" type="submit" onClick={handleClick}>
                Search
                </Button> 
                </form>           
                </div>

        </div>
    );
};

export default Inputer;