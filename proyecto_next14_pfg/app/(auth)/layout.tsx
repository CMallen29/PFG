import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center w-4/5 drop-shadow-xl">
        <div className="w-3/5 bg-greenUnify-800 rounded-md p-5">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
