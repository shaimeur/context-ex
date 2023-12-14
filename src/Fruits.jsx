import { useFruitsListContext } from "./FruitsProvider"
const Fruits = () =>{
    const {myFruits} = useFruitsListContext()
    return (
        <>
             <h1>Using Context Api!!</h1>
            {myFruits.map(f => <p key={f.id}>{f.fruitName} </p>)}
        </>
    )
}

export default Fruits