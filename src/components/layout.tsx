interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-stone-200">
      <div className="container p-4 mx-auto min-h-screen relative max-w-full">
        <nav className="flex justify-between items-center relative">
          <h1 className="text-4xl font-bold border-2 border-black px-2 rounded my-2">PPR</h1>
          <div className="bg-zinc-300 rounded-3xl fixed mx-auto w-3/12 left-0 right-0">
            <ul className="p-2 z-1 m-0 flex cursor-pointer w-full justify-between">
              <li className="rounded-2xl group hover:bg-white py-1 px-4 bg-white"><a className="group-hover:text-gray-700">Home</a></li>
              <li className="rounded-2xl group hover:bg-white py-1 px-4"><a className="group-hover:text-gray-700">Projects</a></li>
              <li className="rounded-2xl group hover:bg-white py-1 px-4"><a className="group-hover:text-gray-700">Tools</a></li>
              <li className="rounded-2xl group hover:bg-white py-1 px-4"><a className="group-hover:text-gray-700">About Us</a></li>
            </ul>
          </div>
          <button className="bg-emerald-600 rounded text-white my-2">Contact</button>
        </nav>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}