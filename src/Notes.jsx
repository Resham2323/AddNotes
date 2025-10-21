import React, { useState } from 'react';

function Notes() {
    const [heading, setHeading] = useState("");
    const [notes, setNotes] = useState("");
    const [task, setTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault()

        const CopyTask = [...task];

        CopyTask.push({ heading, notes });
        setTask(CopyTask);

        setHeading("");
        setNotes("");
    }

    const DeleteNotes = (idx) => {
        const CopyTask = [...task];

        CopyTask.splice(idx, 1);
        setTask(CopyTask);
    }

    return (
        <>
            <div className="h-screen text-white lg:flex ">
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className='flex gap-4  p-12 lg:w-1/2 flex-col items-start' >
                    <h1 className='text-4xl font-bold'>Add Notes</h1>
                    <input
                        type="text"
                        name="heading"
                        placeholder='Enter Notes Heading'
                        className='px-5 w-full py-2 outline-none rounded border-2 '
                        value={heading}
                        onChange={(e) => {
                            setHeading(e.target.value);
                        }}
                    />

                    <textarea
                        type="text"
                        name='details'
                        placeholder='Write Details'
                        className='px-5 w-full py-1 h-32 outline-none rounded border-2  '
                        value={notes}
                        onChange={(e) => {
                            setNotes(e.target.value);
                        }}
                    />
                    <button className='bg-yellow-100 outline-0 w-full text-black px-5 py-2 rounded'>Add Notes</button>
                </form>
                <div className='lg:w-1/2 px-20 lg:border-l-2 '>
                    <h1 className='text-4xl font-bold p-2 mt-5'>Recent Notes</h1>
                    <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto '>
                        {task.map(function (elem, idx) {
                            return (
                                <div key={idx} className="flex flex-col justify-between h-58 w-44 py-9 px-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black rounded-2xl ">
                                    <div className="flex flex-col">
                                     <h3 className='leading-tight text-lg font-bold'> {elem.heading}</h3>
                                    <p className='leading-tight text-xs font-semimedium mt-2 text-gray-600'>{elem.notes}</p>
                                    </div>
                                    <button onClick={(e) => {
                                        DeleteNotes(idx)
                                    }} className='bg-red-600 active:scale-96 rounded'>Delete</button>
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notes;