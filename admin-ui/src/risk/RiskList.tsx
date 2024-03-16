import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ASSESSMENT_TITLE_FIELD } from "../assessment/AssessmentTitle";

export const RiskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Risks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
