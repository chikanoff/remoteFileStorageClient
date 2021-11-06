import { Container } from '@mui/material';
import styled from '@emotion/styled/macro';

const FlexContainer = styled(Container)`
  display: flex;
  ${props => props.centerY && 'align-item: center;'}
`;

export default FlexContainer;
