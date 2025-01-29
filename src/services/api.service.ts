import axios from 'axios'
import { character } from '../models/character.model'
import { loadAbort } from '../utilities/loadAbort.utility'
import { useApiCall } from '../Hooks/useApi'

const  BASE_URL = "https://rickandmortyapi.com/api"

export const getCharacter = (id: number):useApiCall<character>=> {
    const controller = loadAbort();
    return {
        call: axios.get<character>(`${BASE_URL}/character/${id}`, {signal: controller.signal } ),
        controller
    };
} 

export const newCharacyer = (character: character)=> {
    const controller = loadAbort();
    return {
        call: axios.post<null>(`${BASE_URL}/characters`,character, {signal: controller.signal } ), 
        controller 
    };
}