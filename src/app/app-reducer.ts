
const APP_SET_STATUS = 'APP/SET-STATUS'
const APP_SET_ERROR = 'APP/SET-ERROR'

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null  as null | string
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.payload.status}
        case "APP/SET-ERROR":
            return {...state, error: action.payload.error}
        default:
            return state
    }
}

export type setAppStatusACType = ReturnType<typeof setAppStatusAC>
export const setAppStatusAC = (status: RequestStatusType) => {
    return {
        type: APP_SET_STATUS,
        payload: {
            status
        }
    } as const
}


export type setAppErrorACType = ReturnType<typeof setAppErrorAC>
export const setAppErrorAC = (error: null | string) => {
    return {
        type: APP_SET_ERROR,
        payload: {
            error
        }
    } as const
}



type ActionsType = setAppStatusACType | setAppErrorACType

