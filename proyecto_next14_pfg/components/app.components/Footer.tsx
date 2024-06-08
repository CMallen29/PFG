import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col h-50 bg-greenUnify-900">
      <div className="flex items-center justify-center p-6 h-10 bg-greenUnify-950 text-yellowUnify-600">
        <Link href={"https://pokeapi.co/"} className="m-5"> PokeAPI </Link>
        <Link href={"https://github.com/CMallen29/PFG/"} className="m-5"> GitHub del Proyecto </Link>
      </div>
      <div className="flex items-center justify-center my-8 text-white">
        <h2>Pie de página logo y mas cosas</h2>
      </div>
      <div className="flex items-center justify-center p-6 h-10 bg-greenUnify-950">
        <h3 className="text-white self-center">
          UNIFY - 2024 Todos los derechos pertenecen a sus respectivos dueños -
          sin intenciones de violar los derechos de autor.
        </h3>
      </div>
    </div>
  );
}

export default Footer;
