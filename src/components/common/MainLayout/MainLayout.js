import styled from '@emotion/styled/macro';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { sidebarOpenState } from '../../../atoms/sidebar';
import { drawerWidth } from '../../../constants';
import FullPageContainer from '../FullPageContainer';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
  }),
);

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const sidebarOpen = useRecoilValue(sidebarOpenState);

  return (
    <FullPageContainer className={classes.root}>
      <Sidebar />
      <Main open={sidebarOpen}>
        <Header />
        {children}
        <Footer />
      </Main>
    </FullPageContainer>
  );
};

export default MainLayout;
