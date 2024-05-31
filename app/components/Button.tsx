import { MouseEventHandler } from "react"

export type DefaultMouseEventHandler = () => void

type ButtonProps = {
  onClickHandler?: MouseEventHandler,
  text?: string,
  /** CSS classes to set on the button */
  classes?: string,
  type?: "button" | "submit" | "reset",
}

export default function Button({
  text = "Click Me!",
  classes = "p-3 rounded bg-blue-500",
  type = "button",
  onClickHandler
}: ButtonProps) {

  return (
    <button
      onClick={onClickHandler}
      type={type}
      className={classes}>
      {text}
    </button>
  )

}
