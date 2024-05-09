'use client'

import { useRouter } from "next/navigation";



const NoUser = () => {
  const router= useRouter();
  router.push("/");

  return <div>NoUser</div>;
};

export default NoUser;
