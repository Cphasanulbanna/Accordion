import { useState } from "react";

//image
import spotlight from "../assets/images/spotlight.png";
import downArrow from "../assets/images/down-arrow.svg";

function Faq() {
    //FAQ state
    const [faqs] = useState([
        {
            id: 1,
            title: "How does react work?",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sit labore ducimus perferendis error. Quam animi laborum quia laudantium reprehenderit hic quasi, provident, ad soluta, corporis alias nihil odiodicta.",
        },
        {
            id: 2,
            title: "How does react work?",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sit labore ducimus perferendis error. Quam animi laborum quia laudantium reprehenderit hic quasi, provident, ad soluta, corporis alias nihil odio dicta.",
        },
        {
            id: 3,
            title: "How does react work?",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sit labore ducimus perferendis error. Quam animi laborum quia laudantium  reprehenderit hic quasi, provident, ad soluta, corporis alias nihil odio dicta.",
        },
        {
            id: 4,
            title: "How does react work?",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sit labore ducimus perferendis error. Quam animi laborum quia laudantium  reprehenderit hic quasi, provident, ad soluta, corporis alias nihil odio dicta.",
        },
    ]);

    //selected id state
    const [selectedFaqId, setSelectedFaqId] = useState("");

    //accordion view/hide function
    const handleAccordion = (selectedId) => {
        if (selectedId !== selectedFaqId) {
            setSelectedFaqId(selectedId);
        } else {
            setSelectedFaqId(null);
        }
    };
    return (
        <section className="main-container">
            <div
                className="spotlight"
                style={{
                    backgroundImage: `url(${spotlight})`,
                }}
            ></div>
            <h1>FAQ</h1>
            <ul className="faq">
                {faqs?.map((faq) => (
                    <li
                        onClick={() => handleAccordion(faq?.id)}
                        key={faq?.id}
                        className="dropdown"
                    >
                        <div className="question">
                            <h3 className="title">{faq?.title}</h3>
                            <span
                                onClick={() => handleAccordion(faq?.id)}
                                className={`arrow ${selectedFaqId === faq?.id && "rotate"}`}
                            >
                                <img
                                    src={downArrow}
                                    alt="down-arrow"
                                />
                            </span>
                        </div>
                        <div className={`answer-box ${selectedFaqId === faq?.id && "show"}`}>
                            <p className="answer">{faq?.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Faq;
