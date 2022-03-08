import styled from "styled-components"
import Button from "components/shared/Buttons"

const ButtonWrap = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`
function Buttons() {
  return (
    <ButtonWrap>
      <Button secondary>Edit</Button>
      <Button alert>Delete</Button>
      <Button>Mark as Paid</Button>
    </ButtonWrap>
  )
}

export default Buttons
