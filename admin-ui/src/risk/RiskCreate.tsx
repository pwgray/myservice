import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RiskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="MitigationPlan" source="mitigationPlan" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="Summary" source="summary" />
      </SimpleForm>
    </Create>
  );
};
