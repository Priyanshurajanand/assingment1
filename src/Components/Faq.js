import React , {useState} from "react";

const Faq = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Can education flashcards be used for all age groups ?",
      desc: "Yes, education flashcards can be tailored to different groups and learning levels. There are flashcards designed for preschoolers, elementary school students, and even for college-level and adult learners.",
      expanded: false,
    },
    {
      id: 2,
      title: "How do education flashcards work?",
      desc: "Education flashcards works by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can reveiew the cards repeatedly, reinforcing their memory and enhancing learning through repetition.",
      expanded: false,
    },
    {
      id: 3,
      title: "Can edquality flashcards be used for test preparation?",
      desc: "Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concept, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.",
      expanded: false,
    },
  ]);

  const handleExpand = (itemId) => {
    const updatedData = data.map((item) =>
      item.id === itemId ? { ...item, expanded: !item.expanded } : item
    );
    setData(updatedData);
  };
  return (
    <div className="FAQ mt-[150px] mb-[325px]">
      <h1 className="text-[50px] bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text font-bold">
        {" "}
        FAQ
      </h1>
      {data.map((item) => (
        <div
          key={item.id}
          className="w-[70%]  my-8 border-2 border-[#164EC0] rounded-[10px] p-4 text-start cursor-pointer transition-all duration-700 "
          onClick={() => handleExpand(item.id)}
        >
          <div className="flex justify-between">
            <p className="text-lg font-medium text-gray-800 transition-all duration-700 ">
              {item.title}
            </p>
            {item.expanded ? (
              <i className="fa-solid fa-angle-down pt-2"></i>
            ) : (
              <i className="fa-solid fa-angle-up pt-2"></i>
            )}
          </div>
          {item.expanded && (
            <div className="mt-4 text-gray-600 ">
              <p className="w-[90%] text-[18px] text-black">{item.desc}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
