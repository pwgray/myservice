import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ASSESSMENT_TITLE_FIELD } from "../assessment/AssessmentTitle";
import { QUESTION_TITLE_FIELD } from "../question/QuestionTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Assessments"
          source="assessment.id"
          reference="Assessment"
        >
          <TextField source={ASSESSMENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <ReferenceField
          label="Questions"
          source="question.id"
          reference="Question"
        >
          <TextField source={QUESTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
