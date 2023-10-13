import { styled } from 'styled-components';

export const Footer = styled.footer`
    ${props => (props.$properties) ? props.$properties : ''}
`;