import { Container  } from "./style";
import logoA from '../../assets/logoA.png';
import CharacterList from "../characterList";

export const CharacterCatalogue = () => {
  return (
    
    <Container>
    <img src={logoA} className="App-logo" alt="logo" width={200} height={100} />
      <h1 style={{color: 'red,'}}>Star Wars characters</h1>
      <CharacterList />
    </Container>
  );
};

