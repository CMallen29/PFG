import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Welcome() {
  return (
    <div className="uppercase text-center font-semibold text-3xl">
      <h2 className={inter.className}>
        Descubre las criaturas que habitan los mundos de Pokémon
      </h2>
    </div>
  );
}

export default Welcome;
