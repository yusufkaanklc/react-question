import React, { useContext, useEffect, useState } from "react";
import QuestPagCSS from "./QuestionPagination.module.css";
import Button from "react-bootstrap/Button";
import QuestionContext from "./QuestionContext";
function QuestionPagination() {
  const [questions, setQuestions] = useState([]);
  const { selectedIndex, setSelectedIndex } = useContext(QuestionContext);
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
  }, []);

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex < questions.length - 1) {
      setSelectedIndex((prev) => prev + 1);
    }
  };

  const handlePagination = (index) => {
    setSelectedIndex(index);
    console.log(selectedIndex);
  };
  return (
    <div>
      <div className={QuestPagCSS["pagination-box"]}>
        <Button variant="light" onClick={handlePrev}>
          Prev
        </Button>
        {questions.map((q, index = q.id) => (
          <div
            className={QuestPagCSS["pagination"]}
            style={{
              background: index === selectedIndex ? "black" : "",
              color: index === selectedIndex ? "white" : "",
            }}
            key={index}
            onClick={() => handlePagination(index)}
          >
            {index + 1}
          </div>
        ))}
        <Button variant="light" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default QuestionPagination;
