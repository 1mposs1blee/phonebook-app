import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectFilter, changeFilter } from 'redux/FilterSlice';
import { LabelFilterInput, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterInputId = nanoid();

  const onChangeInput = ({ currentTarget }) =>
    dispatch(changeFilter(currentTarget.value));

  return (
    <LabelFilterInput htmlFor={filterInputId}>
      Find contacts by name
      <FilterInput
        onChange={onChangeInput}
        type="text"
        id={filterInputId}
        name="filter"
        value={useSelector(selectFilter)}
      />
    </LabelFilterInput>
  );
};
