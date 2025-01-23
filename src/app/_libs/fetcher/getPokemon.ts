import pokemonInstance from "@/_api/pokemonInstance";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const getAllPokemon = async <T>(config?: AxiosRequestConfig): Promise<T> => {
  try {
    const res: AxiosResponse<T> = await pokemonInstance.request(config || {});
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default getAllPokemon;
