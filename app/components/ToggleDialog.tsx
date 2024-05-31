"use client"
import { useState } from "react"
import Button from "./Button"
import Dialog from "./Dialog"

export default function ShowDialog() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <>
      <Button onClickHandler={(e) => setDialogIsOpen(!dialogIsOpen)} />
      <Dialog buttonOnClickHandler={(e) => setDialogIsOpen(!dialogIsOpen)} isOpen={dialogIsOpen}>
        <p>My custom Dialog text</p>
      </Dialog>
    </>
  )
}
