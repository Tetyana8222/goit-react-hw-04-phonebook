import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Label, SearchInput } from './Filter.styled';

export const Filter = ({ handleChange, value }) => {
  return (
    <Wrapper>
      <Label htmlFor="">
        Search name
        <SearchInput
          onChange={handleChange}
          value={value}
          placeholder="Search"
        />
      </Label>
    </Wrapper>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
