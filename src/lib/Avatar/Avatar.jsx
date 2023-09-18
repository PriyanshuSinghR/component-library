import {
  ComponentContainer,
  SectionHeader,
  Sidebar
} from "../../documentation";
import { ImageAvatar, TextAvatar } from "../../components";

export const AvatarDoc = () => {
  const imageAvatarCodeString = `<ImageAvatar srcImg="https://images.pexels.com/photos/415829-9" altText="Sir-Meliodas" dimension="50px" />
<ImageAvatar srcImg="https://images.pexels.com/photos/415829-9" altText="Sir-Meliodas" dimension="100px" />
<ImageAvatar srcImg="https://images.pexels.com/photos/415829-9" altText="Sir-Meliodas" dimension="150px" />
<ImageAvatar srcImg="https://images.pexels.com/photos/415829-9" altText="Sir-Meliodas" dimension="200px" />`;

  const textAvatarCodeString = `<TextAvatar firstName="Sir" lastName="Meliodas" bgColor="#8553fa" dimension="25" />
<TextAvatar firstName="Sir" lastName="Meliodas" bgColor="#8553fa" dimension="50" />
<TextAvatar firstName="Sir" lastName="Meliodas" bgColor="#8553fa" dimension="75" />
<TextAvatar firstName="Sir" lastName="Meliodas" bgColor="#8553fa" dimension="100" />`;
  return (
    <div className="container">
      <Sidebar />
      <div className="doc-container">
        <SectionHeader
          title="Avatar Component"
          description="The Avatar component is used to represent a user, and displays the profile picture or name initials."
        />
        <div className="divider"></div>
        <ComponentContainer
          title="Image Avatar"
          description="A graphical representation of a user using his/her profile picture. Avatar is shown below in different sizes."
          codeString={imageAvatarCodeString}
        >
          <ImageAvatar
            srcImg={
              "https://upload.wikimedia.org/wikipedia/commons/5/5a/Cheeky-Meliodas.png"
            }
            altText={"Sir-Meliodas"}
            dimension={"50px"}
          />
          <ImageAvatar
            srcImg={
              "https://upload.wikimedia.org/wikipedia/commons/5/5a/Cheeky-Meliodas.png"
            }
            altText={"Sir-Meliodas"}
            dimension={"100px"}
          />
          <ImageAvatar
            srcImg={
              "https://upload.wikimedia.org/wikipedia/commons/5/5a/Cheeky-Meliodas.png"
            }
            altText={"Sir-Meliodas"}
            dimension={"150px"}
          />
          <ImageAvatar
            srcImg={
              "https://upload.wikimedia.org/wikipedia/commons/5/5a/Cheeky-Meliodas.png"
            }
            altText={"Sir-Meliodas"}
            dimension={"200px"}
          />
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Text Avatar"
          description="A graphical representation of a user using initials of his/her name."
          codeString={textAvatarCodeString}
        >
          <TextAvatar
            firstName="Sir"
            lastName="Meliodas"
            bgColor="#8553fa"
            dimension="25"
          />
          <TextAvatar
            firstName="Sir"
            lastName="Meliodas"
            bgColor="#8553fa"
            dimension="50"
          />
          <TextAvatar
            firstName="Sir"
            lastName="Meliodas"
            bgColor="#8553fa"
            dimension="75"
          />
          <TextAvatar
            firstName="Sir"
            lastName="Meliodas"
            bgColor="#8553fa"
            dimension="100"
          />
        </ComponentContainer>
        <div className="divider"></div>
      </div>
    </div>
  );
};
