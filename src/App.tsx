import './App.css'
import { Button } from './components/ui/Button'
function App() {

  return (
    <>
      <Button variant='primary' size='md' text='Add Content' onclick={()=>{alert("hello primary")}}></Button>
      <Button variant='secondary' size='md' text='Add Content' onclick={()=>{alert("hello secondary")}}></Button>
    </>
  )
}

export default App
