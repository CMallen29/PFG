import { getField } from "@/model/pokemon.fetch";
import ToggleType from "./ToggleType";

async function Sidebar() {
  const data = (await getField("type")).results;
  return (
    <div>
      <ToggleType data={data} />
    </div>
  );
}

export default Sidebar;
