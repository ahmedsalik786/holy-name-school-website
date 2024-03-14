// import React from "react";
// import { Link } from "react-router-dom";

// //image imports
// import cleanholistic from "../../../assets/facilities/cleanholistic.jpg";
// import canteen from "../../../assets/facilities/canteen.png";
// import auditirum from "../../../assets/facilities/auditirum.jpeg";
// import cocurricular from "../../../assets/facilities/cocurricular.png";
// import computerlab from "../../../assets/facilities/computer-lab.jpg";
// import dedicatedTeacher from "../../../assets/facilities/dedicatedTeacher.jpg";
// import drinkingWater from "../../../assets/facilities/drinkingWater.png";
// import hostel from "../../../assets/facilities/hostel.jpg";
// import ncc from "../../../assets/facilities/ncc.jpg";
// import parking from "../../../assets/facilities/parking.jpg";
// import scienceLab from "../../../assets/facilities/science-lab-logo.jpg";
// import scoutGuide from "../../../assets/facilities/scout&guide.png";
// import smartClass from "../../../assets/facilities/smartClass.jpg";

// const Facilities = () => {
//   return (
//     <div className=" m-10 p-5 flex flex-wrap items-center gap-10  border-black">
//       <Link>
//         <img
//           className="h-20 w-20  border-1 border-black  object-fit"
//           src={cleanholistic}
//           alt="clean & holistic"
//         />
//       </Link>
//       <Link>
//         <img
//           className="h-20 w-20 border-1 border-black object-fit"
//           src={canteen}
//           alt="clean & holistic"
//         />
//       </Link>
//       <Link>
//         <img
//           className="h-20 w-20 border-1 border-black  object-fit"
//           src={auditirum}
//           alt="clean & holistic"
//         />
//       </Link>
//       <Link>
//         <img
//           className="h-20 w-20 border-1 border-black  object-fit"
//           src={cocurricular}
//           alt="clean & holistic"
//         />
//       </Link>
//       <Link>
//         <img
//           className="h-20 w-20 border-1 border-black  object-fit"
//           src={computerlab}
//           alt="clean & holistic"
//         />
//       </Link>
//       <Link>
//         <img
//           className="h-20 w-20 border-1 border-black  object-fit"
//           src={dedicatedTeacher}
//           alt="clean & holistic"
//         />
//       </Link>
//       <Link>
//         <img
//           className="h-20 w-20 border-1 border-black  object-fit"
//           src={drinkingWater}
//           alt="clean & holistic"
//         />
//       </Link>
//       <Link>
//         <img
//           className="h-20 w-20 border-1 border-black  object-fit"
//           src={hostel}
//           alt="clean & holistic"
//         />
//       </Link>

//       <Link>
//         <img
//           className="h-20 w-20 border-1 border-black  object-fit"
//           src={ncc}
//           alt="clean & holistic"
//         />
//       </Link>
//       <Link>
//         <img
//           className="h-20 w-20 border-1 border-black  object-fit"
//           src={scoutGuide}
//           alt="clean & holistic"
//         />
//       </Link>
//       <Link>
//         <img
//           className="h-20 w-20 border-1 border-black  object-fit"
//           src={parking}
//           alt="clean & holistic"
//         />
//       </Link>
//       <Link>
//         <img
//           className="h-20 w-20 border-1 border-black  object-fit"
//           src={scienceLab}
//           alt="clean & holistic"
//         />
//       </Link>
//       <Link>
//         <img
//           className="h-20 w-20 border-1 border-black  object-fit"
//           src={smartClass}
//           alt="clean & holistic"
//         />
//       </Link>
//     </div>
//   );
// };

// export default Facilities;

import React from "react";
import { Link } from "react-router-dom";

//image imports
import cleanholistic from "../../../assets/facilities/cleanholistic.jpg";
import canteen from "../../../assets/facilities/canteen.png";
import auditirum from "../../../assets/facilities/auditirum.jpeg";
import cocurricular from "../../../assets/facilities/cocurricular.png";
import computerlab from "../../../assets/facilities/computer-lab.jpg";
import dedicatedTeacher from "../../../assets/facilities/dedicatedTeacher.jpg";
import drinkingWater from "../../../assets/facilities/drinkingWater.png";
import hostel from "../../../assets/facilities/hostel.jpg";
import ncc from "../../../assets/facilities/ncc.jpg";
import parking from "../../../assets/facilities/parking.jpg";
import scienceLab from "../../../assets/facilities/science-lab-logo.jpg";
import scoutGuide from "../../../assets/facilities/scout&guide.png";
import smartClass from "../../../assets/facilities/smartClass.jpg";

const Facilities = () => {
  return (
    <div className="m-10 p-5 flex flex-wrap items-center gap-10 border-black">
      <Link to="/cleanandholistic">
        <img
          className="h-20 w-20 border-1 border-black object-fit"
          src={cleanholistic}
          alt="Clean and Holistic"
        />
      </Link>
      <Link to="/canteen">
        <img
          className="h-20 w-20 border-1 border-black object-fit"
          src={canteen}
          alt="Canteen"
        />
      </Link>
      <Link to="/auditorium">
        <img
          className="h-20 w-20 border-1 border-black object-fit"
          src={auditirum}
          alt="Auditorium"
        />
      </Link>
      <Link to="/cocurricular">
        <img
          className="h-20 w-20 border-1 border-black object-fit"
          src={cocurricular}
          alt="Co-curricular Activities"
        />
      </Link>
      <Link to="/computerlab">
        <img
          className="h-20 w-20 border-1 border-black object-fit"
          src={computerlab}
          alt="Computer Lab"
        />
      </Link>
      <Link to="/dedicatedteacher">
        <img
          className="h-20 w-20 border-1 border-black object-fit"
          src={dedicatedTeacher}
          alt="Dedicated Teacher"
        />
      </Link>
      <Link to="/drinkingwater">
        <img
          className="h-20 w-20 border-1 border-black object-fit"
          src={drinkingWater}
          alt="Drinking Water"
        />
      </Link>
      <Link to="/hostel">
        <img
          className="h-20 w-20 border-1 border-black object-fit"
          src={hostel}
          alt="Hostel"
        />
      </Link>
      <Link to="/ncc">
        <img
          className="h-20 w-20 border-1 border-black object-fit"
          src={ncc}
          alt="NCC"
        />
      </Link>
      <Link to="/scoutnguide">
        <img
          className="h-20 w-20 border-1 border-black object-fit"
          src={scoutGuide}
          alt="Scout and Guide"
        />
      </Link>
      <Link to="/parking">
        <img
          className="h-20 w-20 border-1 border-black object-fit"
          src={parking}
          alt="Parking"
        />
      </Link>
      <Link to="/sciencelab">
        <img
          className="h-20 w-20 border-1 border-black object-fit"
          src={scienceLab}
          alt="Science Lab"
        />
      </Link>
      <Link to="/smartclass">
        <img
          className="h-20 w-20 border-1 border-black object-fit"
          src={smartClass}
          alt="Smart Class"
        />
      </Link>
    </div>
  );
};

export default Facilities;
