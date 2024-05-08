import PokemonStored from "@/components/profile.components/PokemonStored";
import Privacy from "@/components/profile.components/Privacy";
import Username from "@/components/profile.components/Username";

const page = () => {
  return (
    <div className="flex flex-col items-center bg-[url('/image/bgProfile.jpg')] bg-contain bg-no-repeat bg-teal-950">
      <div className="min-w-fit w-4/5 min-h-fit h-4/6 bg-black/80 my-40 rounded-xl">
        <Username />
        <div className="flex flex-col items-center justify-center p-10 ">
          <Privacy />
          <PokemonStored />
        </div>
      </div>
    </div>
  );
};

export default page;
