import { useEffect, useState } from "react";
import "./App.css";
import type Country from "./data/country";
import { getColombiaCountry } from "./services/country.service";
import Header from "./components/header/Header";
import { Route, Switch } from "wouter";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";

/**
 * Componente principal de la aplicación
 */
const App = () => {
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    getColombiaCountry().then((country) => {
      setCountry(country);
    });

    console.log(country?.flags);
  }, []);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header countryName={country.name} flagUrl={country.flags[1]} />
      <section className="container mx-auto px-8">
        <Switch>
          <Route path="/">
            <Home country={country} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default App;
