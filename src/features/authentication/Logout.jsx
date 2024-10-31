import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { logout, isLoading } = useLogout();
  const navigate = useNavigate();
  function handleClick() {
    logout();
    navigate("/");
  }
  return (
    <ButtonIcon disabled={isLoading} onClick={handleClick}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
