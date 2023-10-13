import { styled } from 'styled-components';

export const Body = styled.body`
    ${props => (props.$properties) ? props.$properties : ''}
`;