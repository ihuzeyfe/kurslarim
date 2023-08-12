import Course from "./Course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses, removeCourse }) {
  // console.log(courses);

  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];

  console.log(index);
  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };
  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const randomCourses = (index) => {
    let rdm = Math.floor(Math.random() * courses.length);

    if (rdm === index) {
      rdm = index + 1;
    }
    setIndex(checkIndex(rdm));
  };

  return (
    <div className="courseMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div>
        <button className="randomBtn" onClick={randomCourses}>
          Rastgele
        </button>
      </div>

      <div className="cardDiv">
        <button className="btnfa" onClick={prevCourse}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price}TL</h4>
          </div>
          <p>{content}</p>
        </div>
        <button className="btnfa" onClick={nextCourse}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
    </div>
  );
}

export default Courses;
