import React from 'react';
import { Link } from 'react-router-dom';
import paths from '../utilities/pathnames';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  InputBase,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';

// Styles
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent', // Adjusted for no background color
  boxShadow: 'none', // Removed shadow
  width: '100%', // Full width
  padding: '0 20px', // Added padding to the sides
}));

const LogoLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  marginRight: theme.spacing(2),
  fontSize: '1.8rem', // Adjusted font size for the logo
  fontWeight: 'bold',
}));

const MenuList = styled(List)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
  margin: 0,
  padding: 0, // No padding for a cleaner look
  justifyContent: 'flex-start', // Align items to the left
  gap: theme.spacing(1), // Adjust spacing between items
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center', // Center items on smaller screens
    flexDirection: 'column', // Stack items vertically
    gap: theme.spacing(2), // Increase spacing for better touch targets
  },

  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1), // Slightly smaller gap for extra small screens
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  width: '100px',
  padding: theme.spacing(0, 0), // Reduced padding for ListItems
  '&:hover': {
    backgroundColor: 'transparent', // No hover background
  },
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiTypography-body1': {
    color: theme.palette.text.primary, // Ensure link color is primary text color
  },
}));

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginLeft: theme.spacing(4), // Increased margin to separate from the category names
  display: 'flex',
  alignItems: 'center',
  width: '300px', // Set a fixed width for the search bar
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  width: '100%',
  border: '1px solid lightgray',
  borderRadius: 25,
  marginRight: '20px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    // Text will now appear more towards the center
  },
}));

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar className="toolbar">
        <LogoLink to={paths.home.path}>LuxeGems</LogoLink>

        <MenuList>
          <StyledListItem component={Link} to="/category/necklaces">
            <StyledListItemText primary={<Typography variant="body1">Necklaces</Typography>} />
          </StyledListItem>
          <StyledListItem component={Link} to="/category/rings">
            <StyledListItemText primary={<Typography variant="body1">Rings</Typography>} />
          </StyledListItem>
          <StyledListItem component={Link} to="/category/watches">
            <StyledListItemText primary={<Typography variant="body1">Watches</Typography>} />
          </StyledListItem>
        </MenuList>

        <div style={{display: 'flex'}}>
          <SearchContainer>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchContainer>
          
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
