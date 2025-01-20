import './App.css'
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card_component';
import { PlusIcon } from './icons/PlusIcon';
function App() {

  return (
    <>
    <div className='h-screen bg-blue-50'>
        <Card size='md' className={'w-[300px] h-[400px]'}>
          <div className='flex flex-col'>
            <Button variant='primary' size='md' text='Add Content' onclick={()=>{alert("hello primary")}}></Button>
            <Button variant='secondary' size='md' text='Add Content' onclick={()=>{alert("hello secondary")}} startIcon={<PlusIcon size={"md"} />}></Button>
          </div>
        </Card>
    </div>
    </>
  )
}

export default App
