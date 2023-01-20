import { Plus } from "phosphor-react"
// import * as Dialog from '@radix-ui/react-dialog';

import LogoImage from "../assets/logo.svg"
// import { NewHabitForm } from "./NewHabitForm";

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={LogoImage} alt="" />
      <button
        type="submit"
        className="border border-violet-500 font-bold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
      >
        <Plus size={20} className="text-violet-500" />
        Novo Habito
      </button>
    </div>
  )
}
