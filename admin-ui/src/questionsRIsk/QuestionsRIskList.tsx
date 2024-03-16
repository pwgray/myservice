import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { QUESTION_TITLE_FIELD } from "../question/QuestionTitle";
import { RISK_TITLE_FIELD } from "../risk/RiskTitle";

export const QuestionsRIskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QuestionsRIsks"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
