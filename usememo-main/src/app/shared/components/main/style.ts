import styled from "styled-components";

export const MainStyle = styled.div`
  width: auto;
  margin: 0 100px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;

  h2 {
    line-height: 70px;
    font-size: 40px;
  }

  h3 {
    line-height: 70px;
    font-size: 28px;
  }

  p {
    font-size: 24px;
    text-indent: 2em;
  }
`;
export const ContainerCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: justify;
  line-height: 32px;

  i {
    background-color: #dcdcdc;
  }

  .mg-bt {
    margin-bottom: 60px;
  }
`;

export const ContainerRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 32px;
`;

export const Col = styled.div`
  width: 45%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: justify;
  line-height: 32px;
  border-width: 3px;
  border: 2px solid transparent;
  border-image: linear-gradient(
    0.25turn,
    rgba(230, 230, 230),
    rgba(170, 170, 170),
    rgba(230, 230, 230)
  );
  border-image-slice: 1;
`;
