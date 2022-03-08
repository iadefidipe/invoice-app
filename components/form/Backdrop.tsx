import styled from "styled-components"
import ScrollLock from "react-scrolllock"
import { motion } from "framer-motion"
import { useAppDispatch } from "redux/types/reduxTypes"
import { toggleForm } from "redux/features/openForm"

const StyledBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 5;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  border: 2px green solid;
`

const animation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
}

interface BackdropInterface {
    children: React.ReactNode
}

export default function Backdrop({ children }:BackdropInterface) {
  const dispatch = useAppDispatch()

  return (
    <ScrollLock>
      <StyledBackdrop
        variants={animation}
        initial='hidden'
        animate='visible'
        exit='hidden'
        onClick={() => dispatch(toggleForm(false))}
      >
        {children}
      </StyledBackdrop>
    </ScrollLock>
  )
}
