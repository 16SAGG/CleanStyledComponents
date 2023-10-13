import { styled } from 'styled-components';

export const Section = styled.section`
    ${props => (props.$properties) ? props.$properties : ''}
`;