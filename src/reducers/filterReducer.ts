import {FilterValuesType} from '../App';


export const FilterReducer = (state: FilterValuesType, action: changeFilterACType):FilterValuesType  => {
    switch (action.type) {
        case "CHANGE-FILTER": {
            return action.payload.valueFilter
        }
        default: return state
    }
}

type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (valueFilter: FilterValuesType) => {
    return {
        type: "CHANGE-FILTER",
        payload: {
            valueFilter:valueFilter
        }
    } as const
}

