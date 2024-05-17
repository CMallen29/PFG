import Sidebar from "@/components/explore.components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col p-4 md:flex-row md:overflow-hidden">
      <div className="w-4/5 flex-none md:w-64 bg-teal-600 rounded">
        sidebar
        <Sidebar />
      </div>
      <div className="flex-grow md:overflow-y-auto md:p-12 ">{children}</div>
    </div>
  );
}
