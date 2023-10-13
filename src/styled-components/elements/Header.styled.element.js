import { styled } from 'styled-components';

export const Header = styled.header`
    ${props => (props.$properties) ? props.$properties : ''}
`;