import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { QUESTION_TITLE_FIELD } from "../question/QuestionTitle";
import { RISK_TITLE_FIELD } from "./RiskTitle";
import { ASSESSMENT_TITLE_FIELD } from "../assessment/AssessmentTitle";

export const RiskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Assessment"
          source="assessment.id"
          reference="Assessment"
        >
          <TextField source={ASSESSMENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="MitigationPlan" source="mitigationPlan" />
        <TextField label="Owner" source="owner" />
        <TextField label="Summary" source="summary" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="QuestionsRIsk"
          target="RiskId"
          label="QuestionsRIsks"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Question"
              source="question.id"
              reference="Question"
            >
              <TextField source={QUESTION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Risk" source="risk.id" reference="Risk">
              <TextField source={RISK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
