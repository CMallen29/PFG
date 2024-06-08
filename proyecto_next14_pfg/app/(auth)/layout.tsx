import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center w-4/5 drop-shadow-xl">
        <div className="w-3/5 bg-greenUnify-900/80 rounded-xl py-10">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
