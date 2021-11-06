import styled from '@emotion/styled/macro';
import { AppBar, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { sidebarOpenState } from '../../../../atoms/sidebar';
import { drawerWidth } from '../../../../constants';
import FlexCentredBox from '../../FlexCentredBox';
import FlexContainer from '../../FlexContainer';
import HeaderSidebarOpenButton from './HeaderSidebarOpenButton';

const MainAppBar = styled(AppBar, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = () => {
  const sidebarOpen = useRecoilValue(sidebarOpenState);

  return (
    <MainAppBar open={sidebarOpen}>
      <FlexContainer centerY>
        <HeaderSidebarOpenButton />
        <FlexCentredBox xs={{ display: 'flex', alignItems: 'center' }}>
          <Typography component="h1">Heading</Typography>
        </FlexCentredBox>
      </FlexContainer>
    </MainAppBar>
  );
};

export default Header;
