import axios from "axios";

const instance = {
    baseURL: process.env.NEXT_PUBLIC_APP_POKEMON_API_BASE_URL,
    headers : {"Content-Type":"application/json"}
}
const pokemonInstance = axios.create(instance)

export default pokemonInstance