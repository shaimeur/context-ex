import { useFruitsListContext } from "./FruitsProvider"
const FruitsCounter = () =>{
    const {myFruits} = useFruitsListContext()
    return (
        <>
        <h2>Total Fruits: {myFruits.length}</h2>
        </>
    )
}

export default FruitsCounter