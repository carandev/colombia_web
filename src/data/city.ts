/**
 * Información de una ciudad.
 */
export default interface City {
  /**
   * Identificador de la ciudad.
   */
  id: number;

  /**
   * Nombre de la ciudad.
   */
  name: string;

  /**
   * Descripción de la ciudad.
   */
  description: string;

  /**
   * Superficie de la ciudad.
   */
  surface: number;

  /**
   * Población de la ciudad.
   */
  population: number;

  /**
   * Código postal de la ciudad.
   */
  postalCode: string;

  /**
   * Identificador del departamento al que pertenece la ciudad.
   */
  departmentId: number;

  /**
   * Departamento al que pertenece la ciudad.
   */
  department: null;

  /**
   * Atracciones turísticas de la ciudad.
   */
  touristAttractions: null;

  /**
   * Presidentes nacidos en la ciudad.
   */
  presidents: null[];

  /**
   * Reservas indígenas de la ciudad.
   */
  indigenousReservations: null;

  /**
   * Aeropuertos de la ciudad.
   */
  airports: null;

  /**
   * Estaciones de radio de la ciudad.
   */
  radios: null;
}
