import styled from "styled-components"
import Image from "next/image"
import avartar from "../../assets/image-avatar.jpg"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

const Button = styled.button`
  height: 2rem;
  width: 2rem;
  border: none;
  border-left: 1px solid white;
  &,
  & > *,
  span {
    border-radius: 100px;
  }
`

const AvatarImage = styled.div``

function Avatar() {
  const { data: session } = useSession()

  return (
    <Link href={session ? "/api/auth/signout" : "/api/auth/signin"} passHref>
      <Button
        onClick={() =>
          session
            ? signOut()
            : signIn("github", {
                callbackUrl: "http://localhost:3000",
              })
        }
      >
        <AvatarImage>
          <Image src={avartar} alt='app-avartar' layout='responsive'></Image>
        </AvatarImage>
      </Button>
    </Link>
  )
}

export default Avatar
