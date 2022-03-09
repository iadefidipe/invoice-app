import styled from "styled-components"
import Button from "components/shared/Buttons"
import { useAppDispatch, useAppSelector } from "redux/types/reduxTypes"
import { toggleEditForm } from "redux/features/openEditForm"
import { popUp } from "redux/features/popUp"

const ButtonWrap = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`
function Buttons() {
  const dispatch = useAppDispatch()

  return (
    <ButtonWrap>
      <Button secondary onClick={() => dispatch(toggleEditForm(true))}>
        Edit
      </Button>
      <Button alert onClick={() => dispatch(popUp(true))}>
        Delete
      </Button>
      <Button>Mark as Paid</Button>
    </ButtonWrap>
  )
}

export default Buttons
