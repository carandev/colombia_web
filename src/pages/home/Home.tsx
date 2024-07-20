import { useEffect, useState } from "react";
import type HomeProps from "./home.props";
import type PresidentPagedList from "../../data/presidentPagedList";
import { getPaginatedPresidents } from "../../services/president.service";

/**
 * Página de inicio.
 * @param {HomeProps} propiedades del componente.
 * @returns {JSX.Element} Elementos de la página de inicio.
 */
const Home = ({ country }: HomeProps): JSX.Element => {
  const [paginatedPresidents, setPaginatedPresidents] =
    useState<PresidentPagedList | null>(null);

  useEffect(() => {
    getPaginatedPresidents(1, 10).then((data) => setPaginatedPresidents(data));
  });

  if (!paginatedPresidents) {
    return <p>Cargando...</p>;
  }

  return (
    <article>
      <p className="text-center my-4">{country.description}</p>
      <section>
        <h3 className="my-4 w-full bg-red-200 text-slate-900 text-2xl rounded py-2 px-4">
          Presidentes
        </h3>
        <div className="flex gap-4 overflow-x-scroll">
          {paginatedPresidents?.data.map((president) => (
            <div
              key={president.id}
              className="bg-teal-400 p-4 min-w-44 flex flex-col items-center justify-between rounded"
            >
              <img
                src={president.image}
                alt={president.name}
                width="100"
                height="100"
              />
              <p className="text-xl">{president.name}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Home;
