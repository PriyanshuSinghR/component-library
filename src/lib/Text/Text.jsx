import {
  SectionHeader,
  Sidebar,
  ComponentContainer
} from "../../documentation";
import { Text } from "../../components";

export const TextDoc = () => {
  const textCodeString = `<Text size="5xl">(5xl) Knock-Knock, Text is here.</Text>
<Text size="4xl">(4xl) Knock-Knock, Text is here.</Text>
<Text size="3xl">(3xl) Knock-Knock, Text is here.</Text>
<Text size="2xl">(2xl) Knock-Knock, Text is here.</Text>
<Text size="xl">(xl) Knock-Knock, Text is here.</Text>
<Text size="lg">(lg) Knock-Knock, Text is here.</Text>
<Text size="md">(md) Knock-Knock, Text is here.</Text>
<Text size="sm">(sm) Knock-Knock, Text is here.</Text>
<Text size="xs">(xs) Knock-Knock, Text is here.</Text>`;

  return (
    <div className="container">
      <Sidebar />
      <div className="doc-container">
        <SectionHeader
          title="Text Component"
          description="Text is used to render text and paragraphs within the interface."
        />
        <div className="divider"></div>
        <ComponentContainer codeString={textCodeString} column>
          <Text size="5xl">(5xl) Knock-Knock, Text is here.</Text>
          <Text size="4xl">(4xl) Knock-Knock, Text is here.</Text>
          <Text size="3xl">(3xl) Knock-Knock, Text is here.</Text>
          <Text size="2xl">(2xl) Knock-Knock, Text is here.</Text>
          <Text size="xl">(xl) Knock-Knock, Text is here.</Text>
          <Text size="lg">(lg) Knock-Knock, Text is here.</Text>
          <Text size="md">(md) Knock-Knock, Text is here.</Text>
          <Text size="sm">(sm) Knock-Knock, Text is here.</Text>
          <Text size="xs">(xs) Knock-Knock, Text is here.</Text>
        </ComponentContainer>

        <div className="divider"></div>
      </div>
    </div>
  );
};
