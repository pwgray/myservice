import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QuestionsRIskTitle } from "../questionsRIsk/QuestionsRIskTitle";

export const RiskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="MitigationPlan" source="mitigationPlan" />
        <TextInput label="Owner" source="owner" />
        <ReferenceArrayInput
          source="questions"
          reference="QuestionsRIsk"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuestionsRIskTitle} />
        </ReferenceArrayInput>
        <TextInput label="Summary" source="summary" />
      </SimpleForm>
    </Edit>
  );
};
