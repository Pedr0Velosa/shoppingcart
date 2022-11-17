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

type handleSubmitType = {
  e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  reset?: boolean
}

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
          onClick={() => handleSubmit({ reset: true })}
          sx={{ cursor: 'pointer' }}
        >
          <Close
            fontSize='medium'
          />
        </InputAdornment> : null
    )
  }

  const handleSubmit = ({ e, reset = false }: handleSubmitType) => {
    if (reset || !e) {
      setInputValue(null)
      dispatch({ type: ACTIONS.QUERY, payload: null || "" })
      return
    }
    setInputValue(e.target.value)
    dispatch({ type: ACTIONS.QUERY, payload: e.target.value || "" })
  }

  return (
    <>
      <Box
        sx={{ flex: 2, order: { xs: 2, sm: 0 } }}
      >
        <StyledInput
          id="search"
          label="Search"
          variant="outlined"
          fullWidth
          value={inputValue || ''}
          onChange={(e) => handleSubmit({ e })}
          InputProps={InputPropsObj}
        />
      </Box>
    </>
  )
}

export default SearchBar;

