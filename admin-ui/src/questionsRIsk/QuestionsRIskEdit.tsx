import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QuestionTitle } from "../question/QuestionTitle";
import { RiskTitle } from "../risk/RiskTitle";

export const QuestionsRIskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
