import styled from "styled-components"

const Section = styled.section`
  padding: 48px 48.5px 48px 47.5px;
  max-width: 327px;
  max-height: 500px;
  background-color: ${props => props.color};

  @media (min-width: 980px) {
    max-width: 307px;
  }
`;

const Image = styled.img`
  margin-bottom: 35px;
`;

const Heading = styled.h1`
  margin-bottom: 25px;
  font-family: 'Big Shoulders Display';
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  text-transform: uppercase;
  color: #F2F2F2;
`;

const Paragraph = styled.p`
  margin-bottom: 25px;
  font-family: 'Lexend Deca';
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.75;

  @media (min-width: 980px) {
    margin-bottom: 83px;
  }
`;

const Anchor = styled.a`
  display: block;
  padding: 11px 0 12px;
  max-width: 146px;
  background-color: #F2F2F2;
  border 2px solid ${props => props.color};
  border-radius: 25px;
  color: ${props => props.color};
  text-align: center;
  text-decoration: none;
  font-family: 'Lexend Deca';
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;

  @media (min-width: 980px) {  
    :hover {
      color: #FFFFFF;
      border: 2px solid #FFFFFF;
      border-radius: 25px;
      background: transparent;
    }
  }
`;

export default function Card({ image, heading, text, color }) {
  return (
    <Section color={color}>
      <Image src={image} alt="" aria-hidden="true" />
      <Heading>{heading}</Heading>
      <Paragraph>{text}</Paragraph>
      <Anchor color={color} href="#">Learn More</Anchor>
    </Section>
  );
}