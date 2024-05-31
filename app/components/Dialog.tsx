import { MouseEventHandler } from "react"
import Button from "./Button"

type DialogProps = {
  classes?: string
  isOpen?: boolean
  children: React.ReactNode
  buttonOnClickHandler: MouseEventHandler
}

export default function Dialog({ classes, isOpen, children, buttonOnClickHandler }: DialogProps) {
  return (
    <dialog open={isOpen} className={`bg-slate-700 text-white p-5 rounded ${classes ?? ""}`}>
      {children}
      <form method="dialog">
        <Button text="Dismiss" onClickHandler={buttonOnClickHandler}/>
      </form>
    </dialog>
  )
}

