// eslint-disable-next-line no-unused-vars
import React from "react";

import principal from "../../assets/principle.jpg";
import sign from "../../assets/signature.png";

const PrincipalDesk = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mt-8">
        <h1 className="text-center text-3xl font-bold mb-4">
          From Principal's Desk
        </h1>
        <p className="italic text-green-600 text-center border-l-4 border-blue-500 pl-4 my-4">
          " Flowers leave part of their fragrance in the hand that bestows them"
        </p>
        <div className="flex flex-wrap md:flex-nowrap mt-4">
          <div className="md:w-3/4 pr-4">
            <p className="text-black text-justify">
              The mind is not a vessel to be filled but a fire to be kindled. I
              appreciate the staff and students of all faculties who use various
              modes of expansion to present their ideas. As long as our ideas
              are expressed and thoughts kindled, we can be sure of learning as
              everything begins with an idea. Just as our mother earth gives us
              more and more, Learning is not a process limited to schools and
              colleges only, nor does it end with the conclusion of one's school
              career. It is indeed a lifelong process. The school is oriented to
              the total formation of a child and to adaptations of various
              methods suiting the dynamics of changing world in order to achieve
              common goals and objectives. It is further characterized by
              sharing vision, responsibility and above all love and faith in
              goal in order to achieve it. We live today in a world that is very
              different from the one we grew up, in the one we were educated in.
              The world today is changing at such an accelerated rate where we
              as educators need to pause and reflect on this entire system of
              education. Our school is well equipped to prepare our children to
              face the challenges that the future holds and work at implementing
              a well-balanced curriculum to ensure that the children who walk
              into the portals of HOLY NAME HIGHER SECONDARY SCHOOL will not
              just leave their school years but truly be prepared to face life's
              challenges. Even as we impart education to match the advancement
              in technology and globalization, we march our children ahead with
              ethos of moral values and principles. We endeavor constantly to
              instill these qualities in our children. We pride ourselves to
              help them grow and develop into sensitive and responsible citizens
              of the future.
            </p>
            <p className="m-20 italic font-semibold">
              Aristotle once said that, "Educating the mind without educating
              the heart is no education at all".
            </p>
          </div>
          <div className="md:w-1/4 flex justify-center md:justify-end mt-4 md:mt-0">
            <img
              src={principal}
              alt="Principal"
              className="rounded-full shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            />
          </div>
        </div>
        <div>
          <footer className="mt-8 flex flex-col items-center italic text-gray-600 text-center">
            <img
              src={sign}
              className="
          h-10"
              alt=""
            />
            <span>SALIK AHMED</span>
            <span>(Principal)</span>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDesk;
