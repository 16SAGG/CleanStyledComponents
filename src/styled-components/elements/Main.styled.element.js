import { styled } from 'styled-components';

export const Main = styled.main`
    ${props => (props.$properties) ? props.$properties : ''}
`;