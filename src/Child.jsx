import { useState } from "react";
import "./Child.css"

const Child = ({childDataHandler}) =>{

    let [userData, setUserData] = useState("pierwsze");

    function getDataFromUser(event){
            // console.log(event.target.value);
            setUserData(event.target.value)
    }

    function dataSender(){
        childDataHandler(userData);
        userData= ""
    }
    
    return(
        <div>
            <h2>Jakie dane chcesz wyslac do rodzica</h2>
            <input type="text" value={userData} onChange={getDataFromUser}/>
            <button onClick={dataSender}>Wyslij dane</button>
        </div>

    )
}


export default Child;