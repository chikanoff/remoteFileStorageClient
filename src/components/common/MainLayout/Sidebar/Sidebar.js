import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { sidebarOpenState } from '../../../../atoms/sidebar';
import { drawerWidth } from '../../../../constants';
import SidebarHeader from './SidebarHeader';
import Link from '@mui/material/Link';
import useLogout from '../../../../hooks/useLogout';

const Sidebar = () => {
  const sidebarOpen = useRecoilValue(sidebarOpenState);
  // const logout = useLogout();
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
            href="/home"
          >
            Home
          </Link>
        </Box>
        <Box marginTop="10px">
          <Link
            marginLeft="20px"
            style={{ textDecoration: 'none' }}
            href="/userFiles"
          >
            User Files
          </Link>
        </Box>
        <Box marginTop="10px">
          <Link
            marginLeft="20px"
            style={{ textDecoration: 'none' }}
            href="/allFiles"
          >
            Public Files
          </Link>
        </Box>
        <Box marginTop="10px">
          <Link
            marginLeft="20px"
            style={{ textDecoration: 'none' }}
            href="/uploadfile"
          >
            Upload file
          </Link>
        </Box>
        <Box marginTop="10px">
          <Link
            marginLeft="20px"
            style={{ textDecoration: 'none' }}
            onClick={useLogout()}
          >
            Logout
          </Link>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
