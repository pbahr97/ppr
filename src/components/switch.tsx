import { useState } from "react"

export type Option = {
  label: string | React.ReactNode,
  action?: Function,
  target?: string
}

interface SwitchProps {
  options?: Option[],
  renderChild?: (option: Option) => React.ReactNode
}

export function Switch({ options, renderChild }: SwitchProps) {
  const [activeOption, setActiveOption] = useState(options[0].label);
  return (
    <div className="filter backdrop-blur-md bg-stone-300/30 rounded-3xl fixed left-1/2"
      style={{ transform: "translate(-50%)" }}>
      <ul className="p-2 z-1 m-0 flex cursor-pointer w-full justify-between transition-all duration-700">
        {options?.map(option => {
          return renderChild?.(option) ??
            <li
              onClick={() => setActiveOption(option.label)}
              className={`rounded-2xl group hover:bg-white py-1 px-4 ${activeOption == option.label ? "bg-white" : "bg-transparent"} duration-200`}
            >
              <span className="group-hover:text-gray-700" >{option.label}</span>
            </li>
        })}
      </ul>
    </div>
  );
}