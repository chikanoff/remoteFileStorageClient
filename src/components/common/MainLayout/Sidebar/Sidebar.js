import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { sidebarOpenState } from '../../../../atoms/sidebar';
import { drawerWidth } from '../../../../constants';
import SidebarHeader from './SidebarHeader';
import Link from '@mui/material/Link';
import useLogout from '../../../../hooks/useLogout';
import { currentUserState } from '../../../../atoms/auth';
import { useHistory } from 'react-router';

const Sidebar = () => {
  const sidebarOpen = useRecoilValue(sidebarOpenState);
  const currentUser = useRecoilValue(currentUserState);
  const history = useHistory();
  const logout = useLogout();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      open={sidebarOpen}
      variant="persistent"
      anchor="center"
    >
      <SidebarHeader />
      <Box>
        <Box marginTop="10px">
          <Link
            marginLeft="20px"
            style={{ textDecoration: 'none' }}
            onClick={() => history.push('/home')}
          >
            Home
          </Link>
        </Box>
        <Box marginTop="10px">
          <Link
            marginLeft="20px"
            style={{ textDecoration: 'none' }}
            onClick={() => history.push('/userFiles')}
          >
            User Files
          </Link>
        </Box>
        <Box marginTop="10px">
          <Link
            marginLeft="20px"
            style={{ textDecoration: 'none' }}
            onClick={() => history.push('/allFiles')}
          >
            Public Files
          </Link>
        </Box>
        <Box marginTop="10px">
          <Link
            marginLeft="20px"
            style={{ textDecoration: 'none' }}
            onClick={() => history.push('/upload')}
          >
            Upload file
          </Link>
        </Box>
        {currentUser?.isAdmin && (
          <Box marginTop="10px">
            <Link
              marginLeft="20px"
              style={{ textDecoration: 'none' }}
              onClick={() => history.push('/adminFiles')}
            >
              Admin files
            </Link>
          </Box>
        )}
        <Box marginTop="10px">
          <Link
            marginLeft="20px"
            style={{ textDecoration: 'none' }}
            onClick={logout}
          >
            Logout
          </Link>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
