import Image from "next/image";
import logo from "../../asset/logo.png";
import { useSession } from "next-auth/react";
import { HeaderContainer, Logo } from "./header.style";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import {
  DeadlineButton,
  CommentButton,
  DeadlineBox,
} from "../DetailledTask/DetailledTask.style";

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  // console.log("ma session", session);
  return (
    <HeaderContainer>
      <Logo>
        <Image
          src={logo}
          width="120"
          height="47"
          onClick={() => router.push("/")}
        ></Image>
      </Logo>
      <div>
        {session ? (
          <CommentButton onClick={() => signOut()}>
            Se déconnecter
          </CommentButton>
        ) : (
          <DeadlineBox>
            <DeadlineButton onClick={() => router.push("/Login")}>
              Se connecter
            </DeadlineButton>
            <DeadlineButton onClick={() => router.push("/Signup")}>
              S'inscrire
            </DeadlineButton>
          </DeadlineBox>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
