

const Child = (childDataHandler) =>{

    function dataSender(){

    }
    
    return(
        <div>
            <h2>Jakie dane chcesz wyslac do rodzica</h2>
            <input type="text" value="" onChange={getDataForomUser}/>
            <button onClick={dataSender}>Wyslij dane</button>
        </div>

    )
}


export default Child;