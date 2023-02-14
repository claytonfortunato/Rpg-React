import * as C from "./App.styles";
import { Character } from "./components/Character";
import { useCharacter } from "./hooks/useCharacter";

const App = () => {
  const char = useCharacter();

  return (
    <C.Container>
      <C.Map>
        <Character x={6} y={4} />
      </C.Map>
    </C.Container>
  );
};

export default App;
