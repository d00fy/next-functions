import styled from "styled-components"; // You need this as well
import media from "styled-media-query";

const Box = styled.div`
  background: black;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    background: red;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    background: green;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    background: blue;
  `}
`;

export default Box;