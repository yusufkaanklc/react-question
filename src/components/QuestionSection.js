import QuestCSS from "./QuestionSection.module.css";
import Container from "react-bootstrap/Container";
import QuestionHeader from "./QuestionHeader";
import QuestionContent from "./QuestionContent";
import QuestionPagination from "./QuestionPagination";
import { QuestionProvider } from "./QuestionContext";
function QuestionSection() {
  return (
    <>
      <QuestionProvider>
        <Container className={QuestCSS["quest-container"]}>
          <QuestionHeader />
          <QuestionContent />
          <QuestionPagination />
        </Container>
      </QuestionProvider>
    </>
  );
}

export default QuestionSection;
