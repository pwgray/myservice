import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { AssessmentTitle } from "../assessment/AssessmentTitle";
import { QuestionTitle } from "../question/QuestionTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="assessments.id"
          reference="Assessment"
          label="Assessments"
        >
          <SelectInput optionText={AssessmentTitle} />
        </ReferenceInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <ReferenceInput
          source="questions.id"
          reference="Question"
          label="Questions"
        >
          <SelectInput optionText={QuestionTitle} />
        </ReferenceInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
