const PokemonStored = () => {
  return (
    <div className=" bg-teal-900 min-w-fit w-full min-h-fit text-white my-10 ">
      <div>
        <h1 className="text-2xl font-bold  mx-2 p-2">Mis pokemons</h1>
        <div className="grid grid-cols-4 place-items-center gap-3 bg-teal-950 p-4">
          {/* sustituir las p por un map con los pokemons del usuario */}
          <p className="p-10">Carta Pokemon 1</p>
          <p >Carta Pokemon 2</p>
          <p>Carta Pokemon 3</p>
          <p>Carta Pokemon 4</p>
          <p>Carta Pokemon 5</p>
          <p>Carta Pokemon 6</p>
          <p>Carta Pokemon 7</p>
          <p className="p-10">Carta Pokemon 8</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonStored;
