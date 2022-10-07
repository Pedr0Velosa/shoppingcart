import React, { useState } from 'react'
import { styled } from '@mui/system';
import styles from '../../styles/SearchIcon.module.css';

import { Search, Box, TextField, InputAdornment } from '../../utils/Imports'

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

type SearchBarProps = {
  setNavCover: (val: boolean) => void
};

const SearchBar = ({ setNavCover }: SearchBarProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <Box
      component="form"
      autoComplete='off'
      onClick={() => setNavCover(true)}
      onFocus={() => setNavCover(true)}
      onBlur={() => setNavCover(false)}
      sx={{ flex: 2, order: { xs: 2, sm: 0 } }}
    >
      <StyledInput
        id="search"
        label="Search"
        variant="outlined"
        fullWidth
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Search
                className={styles.searchIcon}
                aria-hidden={true}
              />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}

export default SearchBar