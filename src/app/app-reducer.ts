export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    error: null as string | null,
    status: 'idle' as RequestStatusType
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.value}
        default:
            return state
    }
}

export const setLoadingStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status } as const)
export const setErrorAC = (value: string | null) => ({type: 'APP/SET-ERROR', value } as const)

export type SetStatusACType = ReturnType<typeof setLoadingStatusAC>
export type SetErrorACType = ReturnType<typeof setErrorAC>

type AppActionsType = SetStatusACType | SetErrorACType