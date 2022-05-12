import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { fetchCharactersSuccess } from "../../actions/charactersActions";
import { Film } from "../../types";
import { FaFilm, FaUserAlt, FaTextHeight } from 'react-icons/fa';
import {
  Container,
  Item,
  ItemRight,
  ItemLeft,
  ItemsContainer,
  Title,
  Value,
  Characterimage,
} from "./style";

type Props = {
  name: string;
  gender: string;
  birthYear: string;
  height: string;
  mass: string;
  url: string;

 
  films: Array<string>;
};

const Character: React.FC<Props> = ({
  name,
  gender,
  birthYear,
  height,
  mass,
  films,
  url,


}) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const stateFilms = useAppSelector((state) => state.films);
  const [titles, setTitles] = useState<string[]>([]);
 
  
  




  useEffect(() => {
    setTitles(
      films.map(
        (url) => stateFilms.films.find((film: Film) => film.url === url).title
      )
    );
  }, [setTitles, films, stateFilms.films]);

  return (
    <Container
      detailsVisible={detailsVisible}
      onClick={() => setDetailsVisible(!detailsVisible)}
    >
      <ItemsContainer>
        <ItemLeft>
           
     
        <Characterimage>
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${url.substring(29).slice(0, -1)}.jpg`}
              alt={` ${name}`} height={330} width={240} border-radius={4}
            />
          </Characterimage>
          <Value> < FaUserAlt/> {name}</Value>
        </ItemLeft>
        <Item>
     

        </Item>
        <ItemRight>
          <Title>Gender</Title>
          <Value>{gender}</Value>
        </ItemRight>
        
        <ItemRight>

          <Title>Year of birth</Title>
          <Value>{birthYear}</Value>
        </ItemRight>
       
      </ItemsContainer>
      {detailsVisible && (
        <ItemsContainer>
          <ItemLeft>
            <Title>Films</Title>
            {titles.map((title) => (
              <Value key={title}>   <FaFilm />  {title}</Value>
            ))}
          </ItemLeft>
          <Item></Item>
          <ItemRight>
            <Title>Height</Title>
            {height === "unknown" ? (
              <Value>  <FaTextHeight />{height}</Value>
            ) : (
              <Value>{height}cm</Value>
            )}
          </ItemRight>
          <ItemRight>
            <Title>Mass</Title>
            {mass === "unknown" ? (
              <Value>{mass}</Value>
            ) : (
              <Value>{mass}kg</Value>
            )}
          </ItemRight>
        </ItemsContainer>
      )}
    </Container>
  );
};

export default Character;
