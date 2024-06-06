import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <Image
        src="/pokemon/MissingNo.jpg"
        width={300}
        height={300}
        alt="Missingno"
        className="rounded-xl shadow-2xl shadow-warningUnify-900 "
      />
      <h2 className="text-5xl font-semibold text-yellowUnify-800">
        404 Not Found
      </h2>
      <p className="text-xl text-yellowUnify-800">
        Vaya... Este no es el Pokémon que buscabas...
      </p>
    </main>
  );
}
