import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'; 
import { LabelFilterInput, FilterInput } from './Filter.styled';

export const Filter = ({ onChangeFilterInput, filter }) => {
  const filterInputId = nanoid();

  return (
    <LabelFilterInput htmlFor={filterInputId}>
      Find contacts by name
      <FilterInput
        onChange={onChangeFilterInput}
        type="text"
        id={filterInputId}
        name="filter"
        value={filter}
      />
    </LabelFilterInput>
  );
};

Filter.propTypes = {
  onChangeFilterInput: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}