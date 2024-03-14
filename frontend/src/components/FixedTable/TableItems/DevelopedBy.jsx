const DevelopedBy = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center p-4 shadow">
      <p className="text-gray-100 text-sm md:text-base">
        © Copyright 2024, All Rights Reserved,
        <span className="text-orange-500 font-semibold">
          HOLY NAME HIGHER SECONDARY SCHOOL SIVASAGAR,
        </span>{" "}
        <span className="font-semibold">Design & Developed by</span>{" "}
        <a target="blank" href="https://flerid.com/">
          <span className="text-orange-500 font-semibold">
            Flerid Technology
          </span>
        </a>
      </p>
    </div>
  );
};

export default DevelopedBy;
