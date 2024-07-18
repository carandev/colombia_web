import type HomeProps from "./home.props";

/**
 * Página de inicio.
 * @param {HomeProps} propiedades del componente.
 * @returns
 */
const Home = ({ country }: HomeProps): JSX.Element => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>{country.description}</p>
    </div>
  );
};

export default Home;
