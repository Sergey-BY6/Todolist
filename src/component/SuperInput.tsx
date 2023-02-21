import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type SuperInputType = {
    callback: (title: string) => void
}


export const SuperInput: React.FC<SuperInputType> = (props) => {

    const [title, settTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const onChahgeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        settTitle(e.currentTarget.value)
        setError(false)
    }


    const addTask = () => {
        if(title.trim().length > 0) {
            props.callback(title)
            settTitle("")
        }
        else {
            setError(true)
        }
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTask()
        }
    }


    return (
        <div>
            <input value={title} onChange={onChahgeHandler} onKeyDown={onEnter}/>
            <button onClick={addTask}>+</button>
            {error && <div style={{color: "red"}}>Empty is required</div>}
        </div>
    );
};

