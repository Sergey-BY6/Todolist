import React, {memo} from 'react';
import {FilterValuesType} from './AppWithRedux';


type ButtonWrapperType = {
    onClickHandler: (value: FilterValuesType, todolistId: string) => void
    changeFilter: FilterValuesType
    todolistId: string
}

const ButtonWrapper: React.FC<ButtonWrapperType> = memo((props) => {
    return (
       <div>

       </div>
    );
})

export default ButtonWrapper;