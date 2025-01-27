import './App.css'
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card_component';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';
function App() {

  return (
    <div className='p-4 h-screen bg-blue-200'>
      <div className='flex justify-end gap-4'>
        <Button variant="primary" size="md" text="Add content" startIcon={<PlusIcon size='md' />} onclick={()=>{alert(500)}} />
        <Button variant="secondary" size="md" text="Share brain" startIcon={<ShareIcon size='md' />} onclick={()=>{alert(500)}} />
      </div>
    <div className='flex gap-4'>
        <Card type={`twitter`} link={`https://x.com/TimesAlgebraIND/status/1883482198512460128`} title={`First tweet`} />
        <Card type={`youtube`} link={`https://www.youtube.com/watch?v=4tQu4e_8Ego`} title={`First yt`} />
    </div>
    </div>
  )
}

export default App
