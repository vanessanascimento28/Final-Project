import { BASE_URL } from "./config.js";

export async function fetchCountriesByName(name) {
    try {
        const response = await fetch(
            `${BASE_URL}/name/${name}?fields=name,capital,region,currencies,flags`
        );
        if (!response.ok) {
            throw new Error("País não encontrado");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
