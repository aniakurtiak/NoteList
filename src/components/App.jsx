import { List } from "./List/List";
import { NoteForm } from "./NoteForm/NoteForm";
import { SearchBar } from "./SearchBar/SearchBar";

export const App = () => {
  return (
    <div>
      <NoteForm/>
      <SearchBar/>
      <List/>
    </div>
  );
};
