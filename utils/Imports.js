import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import {styled} from '@mui/system';

const OutlineBox = styled(Box)({
  padding: '4px 8px',
  borderRadius: 4,
  "&:hover": {
    outline: '1px solid white'
  },
});
const AlignBox = styled(Box)({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
});
const StyledButton = styled(Button)({
  minWidth: 'unset',
  padding: '4px 8px'
});



export {Search, Badge, ShoppingCartIcon, Box, TextField, InputAdornment, StyledButton, OutlineBox, AlignBox};