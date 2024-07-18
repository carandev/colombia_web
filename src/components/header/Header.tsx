import { Link } from "wouter";
import type HeaderProps from "./header.props";

/**
 * Cabecera de la página, con el menú de opciones y branding.
 * @param {HeaderProps} props - Propiedades del componente.
 * @returns {JSX.Element}
 */
const Header = ({ countryName, flagUrl }: HeaderProps): JSX.Element => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-teal-600 mb-4">
      <Link href="/">
        <h1 className="text-2xl flex">
          <img
            src={flagUrl}
            alt={`Bandera del país ${countryName}`}
            className="max-w-12 mr-4"
          />
          {countryName}
        </h1>
      </Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link
              className="hover:border-b-4 hover:border-teal-900 pb-1"
              href="/"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-4 hover:border-teal-900 pb-1"
              href="/presidents"
            >
              Presidentes
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-4 hover:border-teal-900 pb-1"
              href="/touristic-attractions"
            >
              Atracciones turísticas
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-4 hover:border-teal-900 pb-1"
              href="/natural-areas"
            >
              Áreas naturales
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
