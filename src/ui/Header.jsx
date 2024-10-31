import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { useUser } from "../features/authentication/useUser";
import ButtonIcon from "./ButtonIcon";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  return (
    <StyledHeader>
      {isAuthenticated ? (
        <>
          <UserAvatar />
          <HeaderMenu />
        </>
      ) : (
        <>
          <ButtonIcon onClick={() => navigate("/login")}>
            <HiArrowLeftOnRectangle />
          </ButtonIcon>
        </>
      )}
      <DarkModeToggle />
    </StyledHeader>
  );
}

export default Header;
