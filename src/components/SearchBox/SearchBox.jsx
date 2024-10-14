import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  const filter = useSelector(selectNameFilter);

  return (
    <div>
      <label className={s.wrapper}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
