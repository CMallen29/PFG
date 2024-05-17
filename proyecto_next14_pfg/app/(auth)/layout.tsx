import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center w-4/5">
          <div className="w-3/5 bg-green-800 rounded-md">{children}</div>
        </div>
    </div>
  );
};

export default AuthLayout;
