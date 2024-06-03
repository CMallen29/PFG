import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid";
import { Button } from "../../login.components/ui/button";
import Link from "next/link";

const ExploreButton = () => {
  return (
    <>
      <Link className="m-2 " href="/explore">
        <Button variant={"unify"}>
          <MagnifyingGlassCircleIcon width={"25"} />
          &nbsp;&nbsp; Explorar
        </Button>
      </Link>
    </>
  );
};

export default ExploreButton;
