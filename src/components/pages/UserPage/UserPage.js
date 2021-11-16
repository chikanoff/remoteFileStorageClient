import { Box } from '@mui/system';
import MainLayout from '../../common/MainLayout/MainLayout';
import Page from '../../common/Page';

const UserPage = () => {
  return (
    <Page pageTitle="Home">
      <MainLayout>
        <Box>user page</Box>
      </MainLayout>
    </Page>
  );
};

export default UserPage;
