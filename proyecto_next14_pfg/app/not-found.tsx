import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex h-full items-center justify-center gap-40">
      <Image
        src="/pokemon/MissingNo.jpg"
        width={400}
        height={400}
        alt="Missingno"
        className="rounded-xl shadow-2xl shadow-black "
      />
      <div className="flex flex-col gap-10">
        <h1 className="text-8xl font-semibold text-yellowUnify-800">
          <span className="p-2 border-r-4 border-r-yellowUnify-800 mr-6"> 404 </span>Not Found
        </h1>
        <p className="text-4xl text-yellowUnify-100 mt-8">
          Vaya... Este no es el Pokémon que buscabas...
        </p>
      </div>
    </main>
  );
}
