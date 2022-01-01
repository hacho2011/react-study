import styles from "./App.module.scss";
import Button from "./components/scssButton/Button";
import Button2 from "./components/Button/Button";
import CheckBox from "./components/checkbox/CheckBox";
import { useState } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import Dialog from "./components/Dialog/Dialog";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  const [check, setCheck] = useState(false);
  const [dialog, setDialog] = useState(false);

  const onChange = (e) => {
    setCheck(e.target.checked);
  };

  const onClick = () => {
    setDialog(!dialog);
  };

  const onCancel = () => {
    setDialog(!dialog);
  };

  const onConfirm = () => {
    console.log("done");
    alert("삭제되었습니다");
    setDialog(!dialog);
  };

  const palette = {
    blue: "#228be6",
    gray: "#496057",
    pink: "#f06595",
  };
  return (
    <>
      <ThemeProvider theme={{ palette }}>
        <AppBlock>
          <ButtonGroup>
            <Button2 size="large">Button</Button2>
            <Button2 color="pink" size="midium">
              Button
            </Button2>
            <Button2 color="gray" size="small">
              Button
            </Button2>
          </ButtonGroup>
          <ButtonGroup>
            <Button2 size="large">Button</Button2>
            <Button2 color="pink" size="midium">
              Button
            </Button2>
            <Button2 color="gray" size="small">
              Button
            </Button2>
          </ButtonGroup>
          <ButtonGroup>
            <Button2 size="large" outline>
              Button
            </Button2>
            <Button2 color="pink" size="midium" outline>
              Button
            </Button2>
            <Button2 color="gray" size="small" outline>
              Button
            </Button2>
          </ButtonGroup>
          <ButtonGroup>
            <Button2 size="large" outline fullWidth>
              Button
            </Button2>
            <Button2 color="pink" size="midium" outline fullWidth>
              Button
            </Button2>
            <Button2
              color="gray"
              size="small"
              outline
              fullWidth
              onClick={onClick}
            >
              Button
            </Button2>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          visible={dialog}
          onCancel={onCancel}
          onConfirm={onConfirm}
        >
          데이터를 정말 삭제하시겠습니까?
        </Dialog>
      </ThemeProvider>
      <div className={styles.App}>
        <Circle color="blue" huge />
        <CheckBox checked={check} onChange={onChange}>
          다음 약관에 모두 동의
        </CheckBox>
        <div className={styles.buttons}>
          <Button size="large">Button</Button>
          <Button size="middle">Button</Button>
          <Button size="small">Button</Button>
        </div>
        <div className={styles.buttons}>
          <Button size="large" color="gray">
            Button
          </Button>
          <Button size="middle" color="gray">
            Button
          </Button>
          <Button size="small" color="gray">
            Button
          </Button>
        </div>
        <div className={styles.buttons}>
          <Button size="large" color="pink">
            Button
          </Button>
          <Button size="middle" color="pink">
            Button
          </Button>
          <Button size="small" color="pink">
            Button
          </Button>
        </div>

        <div className={styles.buttons}>
          <Button size="large" color="pink" outline={true}>
            Button
          </Button>
          <Button size="middle" color="pink" outline={true}>
            Button
          </Button>
          <Button size="small" color="pink" outline={true}>
            Button
          </Button>
        </div>

        <div className={styles.buttons}>
          <Button size="large" color="pink" fullWidth={true}>
            Button
          </Button>
          <Button size="middle" color="pink" fullWidth={true}>
            Button
          </Button>
          <Button
            size="small"
            color="pink"
            fullWidth={true}
            onClick={() => {
              console.log("gg");
            }}
          >
            Button
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
