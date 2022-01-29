import { Option, Switch } from "./switch";

interface LayoutProps {
  children: React.ReactNode;
}

const NavigationOptions: Option[] = [
  { label: "Home" },
  { label: "Projekte" },
  { label: "Tools" },
  { label: "Us" }
];

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-stone-100">
      <div className="container p-4 mx-auto min-h-screen relative">
        <nav className="flex justify-between items-center relative">
          <h1 className="text-4xl font-bold border-2 border-black px-2 rounded my-2">PPR</h1>
          {/* <div className="filter backdrop-blur-md bg-stone-300/30 rounded-3xl fixed left-1/2" style={{ transform: "translate(-50%)" }}>
            <ul className="p-2 z-1 m-0 flex cursor-pointer w-full justify-between">
              <li className="rounded-2xl group hover:bg-white py-1 px-4 bg-white"><a className="group-hover:text-gray-700">Home</a></li>
              <li className="rounded-2xl group hover:bg-white py-1 px-4"><a className="group-hover:text-gray-700">Projects</a></li>
              <li className="rounded-2xl group hover:bg-white py-1 px-4"><a className="group-hover:text-gray-700">Tools</a></li>
              <li className="rounded-2xl group hover:bg-white py-1 px-4"><a className="group-hover:text-gray-700">About Us</a></li>
            </ul>
          </div> */}
          <Switch options={NavigationOptions} />
          <button className="bg-emerald-600 rounded text-white my-2">Contact</button>
        </nav>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}