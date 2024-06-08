import Sidebar from "@/components/explore.components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col px-8 gap-6 md:flex-row md:overflow-hidden">
      <div className="w-4/5 flex-none md:w-64 bg-greenUnify-900/90 rounded-xl text-white p-5">
        <Sidebar />
      </div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}
