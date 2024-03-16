import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QuestionTitle } from "../question/QuestionTitle";
import { RiskTitle } from "../risk/RiskTitle";

export const QuestionsRIskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="question.id"
          reference="Question"
          label="Question"
        >
          <SelectInput optionText={QuestionTitle} />
        </ReferenceInput>
        <ReferenceInput source="risk.id" reference="Risk" label="Risk">
          <SelectInput optionText={RiskTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
