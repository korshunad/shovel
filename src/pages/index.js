import React from "react";
import styled from "styled-components"

const Page = styled.div`
`;
const Header = styled.header`
`;
const Aside = styled.aside`
`;
const Main = styled.main`
`;
const Footer = styled.footer`
`;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
}= () => (
<Page>
<Header>
</Header>
<Aside>
</Aside>
<Main>
</Main>
<Footer>
</Footer>
</Page>

)

export default IndexPage;
