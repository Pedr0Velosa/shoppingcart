import React, { useState } from 'react'

import { styled } from '@mui/system';

import { Search, Box, TextField, InputAdornment, Close } from '@imports/Imports'
import useFilterContext from '@lib/contexts/FilterContext/useFilterContext';
import { ACTIONS } from '@lib/contexts/FilterContext/filterReducer/filterReducer';

const StyledInput = styled(TextField)({
  label: {
    color: 'black',
  },
  "&.Mui-focused fieldset": {
    borderColor: "inherit",
    color: 'inherit'
  },
  "& label.Mui-focused": {
    color: "inherit"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "inherit"
    },
    "&:hover fieldset": {
      borderColor: "inherit"
    },
    "&.Mui-focused fieldset": {
      borderColor: "inherit"
    }
  },
  minWidth: 200
});


const SearchBar = (): JSX.Element => {
  const { dispatch } = useFilterContext()
  const [inputValue, setInputValue] = useState<string | null>(null)

  const InputPropsObj = {
    startAdornment: (
      <InputAdornment position='start'>
        <Search
          fontSize='large'
          aria-hidden={true}
          sx={{ color: 'black' }}
        />
      </InputAdornment>
    ),
    endAdornment: (
      inputValue ?
        <InputAdornment
          position='end'
          onClick={() => setInputValue(null)}
          sx={{ cursor: 'pointer' }}
        >
          <Close
            fontSize='medium'
          />
        </InputAdornment> : null
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.QUERY, payload: inputValue || "" })
  }

  return (
    <>
      <Box
        component="form"
        autoComplete='off'
        sx={{ flex: 2, order: { xs: 2, sm: 0 } }}
        onSubmit={handleSubmit}
      >
        <StyledInput
          id="search"
          label="Search"
          variant="outlined"
          fullWidth
          value={inputValue || ''}
          onChange={(e) => setInputValue(e.target.value)}
          InputProps={InputPropsObj}
        />
      </Box>
    </>
  )
}

export default SearchBar;

