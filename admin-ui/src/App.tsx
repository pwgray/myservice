import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { QuestionList } from "./question/QuestionList";
import { QuestionCreate } from "./question/QuestionCreate";
import { QuestionEdit } from "./question/QuestionEdit";
import { QuestionShow } from "./question/QuestionShow";
import { RiskList } from "./risk/RiskList";
import { RiskCreate } from "./risk/RiskCreate";
import { RiskEdit } from "./risk/RiskEdit";
import { RiskShow } from "./risk/RiskShow";
import { AnswerList } from "./answer/AnswerList";
import { AnswerCreate } from "./answer/AnswerCreate";
import { AnswerEdit } from "./answer/AnswerEdit";
import { AnswerShow } from "./answer/AnswerShow";
import { QuestionnaireList } from "./questionnaire/QuestionnaireList";
import { QuestionnaireCreate } from "./questionnaire/QuestionnaireCreate";
import { QuestionnaireEdit } from "./questionnaire/QuestionnaireEdit";
import { QuestionnaireShow } from "./questionnaire/QuestionnaireShow";
import { ApplicationList } from "./application/ApplicationList";
import { ApplicationCreate } from "./application/ApplicationCreate";
import { ApplicationEdit } from "./application/ApplicationEdit";
import { ApplicationShow } from "./application/ApplicationShow";
import { QuestionsRIskList } from "./questionsRIsk/QuestionsRIskList";
import { QuestionsRIskCreate } from "./questionsRIsk/QuestionsRIskCreate";
import { QuestionsRIskEdit } from "./questionsRIsk/QuestionsRIskEdit";
import { QuestionsRIskShow } from "./questionsRIsk/QuestionsRIskShow";
import { AssessmentList } from "./assessment/AssessmentList";
import { AssessmentCreate } from "./assessment/AssessmentCreate";
import { AssessmentEdit } from "./assessment/AssessmentEdit";
import { AssessmentShow } from "./assessment/AssessmentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Question"
          list={QuestionList}
          edit={QuestionEdit}
          create={QuestionCreate}
          show={QuestionShow}
        />
        <Resource
          name="Risk"
          list={RiskList}
          edit={RiskEdit}
          create={RiskCreate}
          show={RiskShow}
        />
        <Resource
          name="Answer"
          list={AnswerList}
          edit={AnswerEdit}
          create={AnswerCreate}
          show={AnswerShow}
        />
        <Resource
          name="Questionnaire"
          list={QuestionnaireList}
          edit={QuestionnaireEdit}
          create={QuestionnaireCreate}
          show={QuestionnaireShow}
        />
        <Resource
          name="Application"
          list={ApplicationList}
          edit={ApplicationEdit}
          create={ApplicationCreate}
          show={ApplicationShow}
        />
        <Resource
          name="QuestionsRIsk"
          list={QuestionsRIskList}
          edit={QuestionsRIskEdit}
          create={QuestionsRIskCreate}
          show={QuestionsRIskShow}
        />
        <Resource
          name="Assessment"
          list={AssessmentList}
          edit={AssessmentEdit}
          create={AssessmentCreate}
          show={AssessmentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
