import Card from './Card.jsx'

import sedan from "./assets/icon-sedans.svg"
import suv from "./assets/icon-suvs.svg"
import luxury from "./assets/icon-luxury.svg"

import styled from "styled-components"

const Main = styled.main`
  width: fit-content;
  & section:first-child {
    border-radius: 8px 8px 0 0;
  }
  & section:last-child {
    border-radius: 0 0 8px 8px;
  }

  @media (min-width: 980px) {
    display: flex;
    & section:first-child {
      border-radius: 8px 0 0 8px;
    }
    & section:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

function App() {
  return (
    <Main>
      <Card 
        image={sedan}
        heading="Sedans"
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
        or on your next road trip."
        color={"hsl(31, 77%, 52%)"}
      />

      <Card 
        image={suv}
        heading="SUVs"
        text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
        and off-road adventures."
        color={"hsl(184, 100%, 22%)"}
      />

      <Card 
        image={luxury}
        heading="Luxury"
        text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
        rental and arrive in style."
        color={"hsl(179, 100%, 13%)"}
      />
    </Main>
  )
}

export default App