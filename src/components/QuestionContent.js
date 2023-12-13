import React, { useState, useEffect, useContext } from "react";
import QuestContentCSS from "./QuestionContent.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import QuestionContext from "./QuestionContext";

function QuestionContent() {
  const { selectedIndex, setSelectedIndex } = useContext(QuestionContext);
  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleProgress = () => {
    const progressLevel = selectedIndex + 1;
    setProgress(progressLevel * 10);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await import("./data.json");
        setQuestions(response.questions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    handleProgress();
  }, []);

  useEffect(() => {
    handleProgress();
  }, [selectedIndex]);

  // Sorular yüklenene kadar bekle
  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[selectedIndex];

  return (
    <>
      <div className={QuestContentCSS["question-box"]}>
        <div className={QuestContentCSS["question-content"]}>
          <div className={QuestContentCSS["question-counter"]}>
            {`Question ${currentQuestion.id} of ${questions.length}`}
          </div>
          <div className={QuestContentCSS["question-title"]}>
            {currentQuestion.title}
          </div>
          <Container className={QuestContentCSS["choice-grid"]}>
            <Row className={QuestContentCSS["choice-row"]}>
              <Col className={QuestContentCSS["choice-col"]}>
                <span>A.</span>
                <span>{currentQuestion.choice1}</span>
                <span></span>
              </Col>
              <Col className={QuestContentCSS["choice-col"]}>
                <span>B.</span>
                <span>{currentQuestion.choice2}</span>
              </Col>
            </Row>
            <Row className={QuestContentCSS["choice-row"]}>
              <Col className={QuestContentCSS["choice-col"]}>
                <span>C.</span>
                <span>{currentQuestion.choice3}</span>
              </Col>
              <Col className={QuestContentCSS["choice-col"]}>
                <span>D.</span>
                <span>{currentQuestion.choice4}</span>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={QuestContentCSS["progress-bar"]}>
          <CircularProgressbar
            className={QuestContentCSS["circular-bar"]}
            value={progress}
            text={`${currentQuestion.id}/${questions.length}`}
            styles={buildStyles({
              textColor: "#000",
              pathColor: `#000`,
              trailColor: "#d6d6d6",
            })}
          />
        </div>
      </div>
    </>
  );
}

export default QuestionContent;
