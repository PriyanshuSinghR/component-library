import {
  SectionHeader,
  Sidebar,
  ComponentContainer
} from "../../documentation";
import { Heading } from "../../components";

export const HeadingDoc = () => {
  const headingCodeString = `<Heading size="h1">(h1) This is a heading.</Heading>
<Heading size="h2">(h2) Knock-Knock, Heading is here.</Heading>
<Heading size="h3">(h3) Knock-Knock, Heading is here.</Heading>
<Heading size="h4">(h4) Knock-Knock, Heading is here.</Heading>
<Heading size="h5">(h5) Knock-Knock, Heading is here.</Heading>
<Heading size="h6">(h6) Knock-Knock, Heading is here.</Heading>`;

  return (
    <div className="container">
      <Sidebar />
      <div className="doc-container">
        <SectionHeader
          title="Heading Component"
          description="Heading is used to render semantic HTML heading elements."
        />
        <div className="divider"></div>
        <ComponentContainer codeString={headingCodeString} column>
          <Heading size="h1">(h1) Knock-Knock, Heading is here.</Heading>
          <Heading size="h2">(h2) Knock-Knock, Heading is here.</Heading>
          <Heading size="h3">(h3) Knock-Knock, Heading is here.</Heading>
          <Heading size="h4">(h4) Knock-Knock, Heading is here.</Heading>
          <Heading size="h5">(h5) Knock-Knock, Heading is here.</Heading>
          <Heading size="h6">(h6) Knock-Knock, Heading is here.</Heading>
        </ComponentContainer>
        <div className="divider"></div>
      </div>
    </div>
  );
};
