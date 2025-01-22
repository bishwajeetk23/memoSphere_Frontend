import './App.css'
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card_component';
import { PlusIcon } from './icons/PlusIcon';
function App() {

  return (
    <>
    <div className='h-screen bg-blue-50'>
        <PlusIcon size='md' />
        <Card size='md' className={'w-[300px] h-[400px]'}>
        </Card>
    </div>
    </>
  )
}

export default App
