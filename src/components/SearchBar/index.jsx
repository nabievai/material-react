import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';

const searchAppWrap = {
  backgroundColor: 'white',
  borderRadius: ' 10px',
  padding: '10px 0',
  margin: '30px 110px'
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  border: '1px solid #ccc',
  borderRadius: '10px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '15ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const search = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export default function SearchBar() {
  return (
    <div sx={{ flexGrow: 1 }}>
      <div style={searchAppWrap}>
        <Toolbar style={search}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search user…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Toolbar>
      </div>
    </div>
  );
}