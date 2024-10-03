import noProjectImage from '../assets/no-projects.png'
import Button from "./Button.jsx";

export default function NoProjectSelected({onAddProject}){
    
    return(
        <div className='mt-24 text-center w-2/3'>
            <img src={noProjectImage} alt="An empty ttask list" className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>No project selected</h2>
            <p className='text-stone-400 mb-4'>Select project or get started wth the new one</p>
            <p className='mt-8'>
                <Button onClick={onAddProject}>Add project</Button>
            </p>
        </div>
    )
}