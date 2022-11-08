import Search from '@mui/icons-material/Search';
import Close from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import {styled} from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider} from '@mui/material';
import {Settings} from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useFilterContext from '@lib/contexts/FilterContext/useFilterContext';
import Drawer from '@mui/material/Drawer';

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

export {
  Search, Badge, ShoppingCartIcon,
  Box, TextField, InputAdornment, StyledButton,
  OutlineBox, AlignBox, Close,
  Card, CardContent, Typography, Rating,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider,
  Settings, AccountCircleIcon, useFilterContext, Drawer
};