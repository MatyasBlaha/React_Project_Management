import { useRef } from 'react'

import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({onCancelNewProject, onAdd}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const modal = useRef();

    function handleSaveProject(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <>
            <Modal ref={modal} buttonCaption='okay'>
                <h2 className='text-xl font-bold text-stone-600 my-4'>Invalid Input</h2>
                <p className='text-stone-500 mb-4'>Oops.. looks like you forgot to enter a value.</p>
                <p className='text-stone-500 mb-4'>Please make sure you provided a valid value for every input field.</p>
            </Modal>
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li>
                        <button onClick={onCancelNewProject} className='text-stone-800 hover:text-stone-950'>Cancel</button>
                    </li>
                    <li>
                        <button onClick={handleSaveProject} className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-900 text-stone-200 hover:bg-stone-700 hover:text-stone-50'>Save</button>
                    </li>
                </menu>
                <div>
                    <Input ref={title} label={'title'} type={'text'}/>
                    <Input ref={description} label={'description'} textarea/>
                    <Input ref={dueDate} label={'due date'} type={'date'}/>
                </div>
            </div>
        </>
    )
}