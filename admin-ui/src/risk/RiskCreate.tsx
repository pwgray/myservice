import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AssessmentTitle } from "../assessment/AssessmentTitle";
import { QuestionsRIskTitle } from "../questionsRIsk/QuestionsRIskTitle";

export const RiskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="assessment.id"
          reference="Assessment"
          label="Assessment"
        >
          <SelectInput optionText={AssessmentTitle} />
        </ReferenceInput>
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
    </Create>
  );
};
