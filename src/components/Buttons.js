import styled from "styled-components";
import { mixinButton } from "../GlobalStyle";

export const LimeGreenBtn = styled.button`
  ${mixinButton}
  background: linear-gradient(90deg, var(--Lime-green) 20%, var(--Bright-cyan));
  color: var(--White);
`;

export const RequestInviteBtn = ({ className }) => {
  return <LimeGreenBtn className={className}>Request Invite</LimeGreenBtn>;
};
