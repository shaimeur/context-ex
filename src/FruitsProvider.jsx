import { createContext ,useState,useContext} from "react"


const FruitsContext = createContext()

const myFruitsList = [
    {fruitName: '🥥', id: 1},
    {fruitName: '🫐', id: 2},
    {fruitName: '🍉', id: 3},
    {fruitName: '🍐', id: 4},
    {fruitName: '🍒', id: 5},
    {fruitName: '🍑', id: 6},
]

const FruitsProvider = ({children}) =>{
    const [myFruits,setMyFruits] = useState(myFruitsList)
    return (
        <FruitsContext.Provider value={{myFruits}}>
                {children}
        </FruitsContext.Provider>
    )
}
export const useFruitsListContext = () => useContext(FruitsContext);

export default FruitsProvider