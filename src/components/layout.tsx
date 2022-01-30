import { Option, Switch } from "./switch";

interface LayoutProps {
  children: React.ReactNode;
}

const NavigationOptions: Option[] = [
  { label: "Home" },
  { label: "Projekte" },
  { label: "Tools" },
  { label: "Über uns" }
];

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-stone-100">
      <div className="container p-4 mx-auto min-h-screen relative">
        <nav className="flex justify-between items-center relative">
          <h1 className="text-4xl font-bold border-2 border-black px-2 rounded my-2">PPR</h1>
          <Switch options={NavigationOptions} />
          <button className="bg-stone-700 rounded text-white my-2">Kontakt</button>
        </nav>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}