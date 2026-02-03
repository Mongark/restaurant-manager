import { AppBar, Toolbar, IconButton, Typography, useTheme, Button } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, Person } from '@mui/icons-material';

import { useDrawerContext } from '../contexts/drawer-context';

export const Header = () => {
  const { isOpened, toggleIsOpened } = useDrawerContext();
  const theme = useTheme();
  return (
    <AppBar
      sx={{ backgroundColor: 'primary.dark', color: 'secondary.contrastText' }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={() => toggleIsOpened(!isOpened)}
          sx={{ padding: theme.spacing(1) }}
        >
          {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h6" sx={{ margin: 'auto' }}>
          ERP de Restaurante
        </Typography>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant='h5'>John Travolta</Typography>
          <IconButton style={{ padding: "8px", marginLeft: "16px", backgroundColor: "white" }}>
            <Person />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
