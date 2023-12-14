import Fruits from './Fruits'
import FruitsCounter from './FruitsCounter'
import FruitsProvider from './FruitsProvider'
import './App.css'

function App() {

  return (
    <FruitsProvider>
      <Fruits/>
      <FruitsCounter/>
    </FruitsProvider>
  )
}

export default App
