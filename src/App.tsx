import './App.css'
import { Card } from './components/ui/Card_component';
function App() {

  return (
    <>
    <div className='h-screen bg-blue-500'>
        <Card size='md' className={'w-[300px] h-[400px]'} />
    </div>
    </>
  )
}

export default App
