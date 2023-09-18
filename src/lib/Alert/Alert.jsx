import { Alert } from "../../components";
import {
  ComponentContainer,
  SectionHeader,
  Sidebar
} from "../../documentation";

export const AlertDoc = () => {
  const alertCodeString = `<Alert status="error" message="Hey there, This is an error alert." />
<Alert status="success" message="Hey there, This is a success alert." />
<Alert status="warning" message="Hey there, This is a warning alert." />
<Alert status="info" message="Hey there, this is an info." />`;
  return (
    <div className="container">
      <Sidebar />
      <div className="doc-container">
        <SectionHeader
          title="Alert Component"
          description="An alert is used to convey a short, meaningful message without disrupting the user's flow. There are four types of alerts, success, warning, error and message."
        />
        <div className="divider"></div>
        <ComponentContainer codeString={alertCodeString} column>
          <Alert status="error" message="Hey there, This is an error alert." />
          <Alert
            status="success"
            message="Hey there, This is a success alert."
          />
          <Alert
            status="warning"
            message="Hey there, This is a warning alert."
          />
          <Alert status="info" message="Hey there, this is an info." />
        </ComponentContainer>
        <div className="divider"></div>
      </div>
    </div>
  );
};
