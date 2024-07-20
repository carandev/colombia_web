/**
 * Interface para la información del país.
 */
export default interface Country {
  /**
   * Identificador del país.
   */
  id: number;

  /**
   * Nombre del país.
   */
  name: string;

  /**
   * Descripción del país.
   */
  description: string;

  /**
   * Capital del país.
   */
  stateCapital: string;

  /**
   * Superficie del país.
   */
  surface: number;

  /**
   * Población del país.
   */
  population: number;

  /**
   * Idiomas del país.
   */
  languages: string[];

  /**
   * Zona horaria del país.
   */
  timeZone: string;

  /**
   * Moneda del país.
   */
  currency: string;

  /**
   * Código de moneda del país.
   */
  currencyCode: string;

  /**
   * Símbolo de moneda del país.
   */
  currencySymbol: string;

  /**
   * Código ISO del país.
   */
  isoCode: string;

  /**
   * Dominio de internet del país.
   */
  internetDomain: string;

  /**
   * Prefijo telefónico del país.
   */
  phonePrefix: string;

  /**
   * Prefijo de radio del país.
   */
  radioPrefix: string;

  /**
   * Prefijo de aeronave del país.
   */
  aircraftPrefix: string;

  /**
   * Continente en el que está el país.
   */
  subRegion: string;

  /**
   * Región en la que está el país.
   */
  region: string;

  /**
   * Países que tienen frontera con este país.
   */
  borders: string[];

  /**
   * Banderas del país en dos tamaños.
   */
  flags: string[];
}
