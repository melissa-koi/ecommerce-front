import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  img{
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

export default function Featured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title>Pro anywhere</Title>
              <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Desc>
            </div>
          </Column>
          <Column>
            <img src="http://res.cloudinary.com/dwafjr7ry/image/upload/v1708080571/fpj9wvydu3oel2iactrz.jpg" />
          </Column>
        </Wrapper>

      </Center>
    </Bg>
  )
}