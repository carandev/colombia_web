import type City from "./city";

/**
 * Presidente de un país.
 */
export default interface President {
  /**
   * Identificador del presidente.
   */
  id: number;

  /**
   * Imagen del presidente.
   */
  image: string;

  /**
   * Nombre del presidente.
   */
  name: string;

  /**
   * Apellido del presidente.
   */
  lastName: string;

  /**
   * Fecha en la que empezó el periodo del presidente.
   */
  startPeriodDate: Date;

  /**
   * Fecha en la que terminó el periodo del presidente.
   */
  endPeriodDate: Date;

  /**
   * Partido político del presidente.
   */
  politicalParty: string;

  /**
   * Descripción del presidente.
   */
  description: string;

  /**
   * Identificador de la ciudad de nacimiento.
   */
  cityId: number;

  /**
   * Ciudad de nacimiento del presidente.
   */
  city: City;
}
