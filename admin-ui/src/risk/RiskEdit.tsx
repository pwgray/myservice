import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RiskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="MitigationPlan" source="mitigationPlan" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="Summary" source="summary" />
      </SimpleForm>
    </Edit>
  );
};
