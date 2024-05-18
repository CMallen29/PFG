import Link from "next/link";

function PokemonInfo({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return <Link href={`/pokemon/${name}`}>{children}</Link>;
}

export default PokemonInfo;
