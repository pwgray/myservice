import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AnswerTitle } from "../answer/AnswerTitle";
import { UserTitle } from "../user/UserTitle";
import { QuestionnaireTitle } from "../questionnaire/QuestionnaireTitle";
import { QuestionsRIskTitle } from "../questionsRIsk/QuestionsRIskTitle";

export const QuestionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="answers"
          reference="Answer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnswerTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="owner.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="questionnaire.id"
          reference="Questionnaire"
          label="Questionnaire"
        >
          <SelectInput optionText={QuestionnaireTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="Risks"
          reference="QuestionsRIsk"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuestionsRIskTitle} />
        </ReferenceArrayInput>
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Create>
  );
};
