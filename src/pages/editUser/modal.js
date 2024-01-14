import styled from "styled-components";
import {Link} from "react-router-dom";


export const Modal = ({visible}) => {

    if (!visible) {
        return;
    }

    return (
        <Container>
            <Window>
                <Text>Данні успішно оновлені</Text>
                <Link className={'edit-user__cancel-link'} to={'/users'}>OK</Link>
            </Window>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.47);
  z-index: 10;
`;

const Window = styled.div`
    width: 300px;
  padding: 15px;
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
    font-size: 16px;
`;

