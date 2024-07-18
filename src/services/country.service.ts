import type Country from "../data/country";
import { BASE_API_URL } from "../util";

/**
 * Obtiene la información general del pais Colombia.
 * @returns {Promise<Country>} Información del país.
 */
export const getColombiaCountry = async (): Promise<Country> => {
  const response = await fetch(`${BASE_API_URL}/api/v1/country/colombia`);
  const data: Country = await response.json();
  return data;
};
