import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid";
import { Button } from "../../login.components/ui/button";
import Link from "next/link";

const ExploreButton = () => {
  return (
    <>
      <Button variant={"unify"}>
        <MagnifyingGlassCircleIcon width={"25"} />
        <Link className="m-2 " href="/explore">
          Explorar
        </Link>
      </Button>
    </>
  );
};

export default ExploreButton;
