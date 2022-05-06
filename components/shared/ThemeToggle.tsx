import { useEffect } from "react"
import styled, { ThemeContext } from "styled-components"
import { useContext } from "react"
import image from "next/image"
import { toggleTheme } from "../../redux/features/theme"
import Store from "store"
import { useAppDispatch, useAppSelector } from "../../redux/types/reduxTypes"

// component styles
const Button = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background: transparent;
  width: 32px;
  height: 32px;
  :focus-visible {
    outline: 2px dotted #7e88c3;
  }
`
const Wrapper = styled.div``
const Image = styled(image)``

// functions
function ThemeToggle() {
  const Theme = useContext(ThemeContext)

  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme.value)

  // updating the theme in local storage, which auto-updates the theme state
  function themeToggle(): void {
    Store.set("theme", theme === "light" ? "dark" : "light")
    dispatch(toggleTheme(Store.get("theme")))
  }

  useEffect(() => {
    if (Store.get("theme") === undefined) {
      Store.set("theme", theme === "dark" )
    }
  }, [])
  return (
    <Button
      onClick={() => {
        themeToggle()
      }}
    >
      <Wrapper>
        <Image src={Theme.icon.path} alt={Theme.icon.alt} />
      </Wrapper>
    </Button>
  )
}

export default ThemeToggle
