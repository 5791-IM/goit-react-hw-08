import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleFilterChange = (e) => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        placeholder=""
        value={filter}
        onChange={handleFilterChange}
        className={css.searchBox}
      />
    </div>
  );
};

export default SearchBox;
