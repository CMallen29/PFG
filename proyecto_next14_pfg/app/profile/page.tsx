import AdminInfo from "@/components/profile.components/AdminInfo";
import DeleteUser from "@/components/profile.components/DeleteUser";
import PokemonStored from "@/components/profile.components/PokemonStored";
import UserData from "@/components/profile.components/UserData";
import Username from "@/components/profile.components/Username";

const page = ({ searchParams }: { searchParams?: { page?: string } }) => {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="items-center bg-greenUnify-900/90 w-4/5 rounded-xl mt-10 mb-10">
        <Username />
        <div className="flex flex-col items-center justify-center p-10 ">
          <div className=" bg-greenUnify-600 min-w-fit w-full min-h-fit h-full rounded-xl text-white">
            <section>
              <h2 className="text-2xl font-bold  mx-2 p-2">Privacidad</h2>
              <div className="items-center bg-greenUnify-800 p-4 rounded-b-xl">
                <div>
                  <div className="flex flex-col items-center justify-center gap-2 w-auto mt-10 m-2">
                    <UserData />
                  </div>
                  <div className="w-fit mt-5 bg-red-800/20 rounded-2xl border-rose-900 border-2">
                    <DeleteUser />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <PokemonStored page={searchParams?.page} />
          <AdminInfo />
        </div>
      </div>
    </div>
  );
};

export default page;
