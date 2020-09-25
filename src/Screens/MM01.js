import React, { useState } from "react";
import axios from "axios";
import SlideDialog from "../Components/SlideDialog";

const MM01 = () => {
  const [empList, setEmpList] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const dialogOpenToggle = (isRegister = false) => {
    setDialogOpen(!dialogOpen);

    if (isRegister) {
      getEmployees();
    }
  };

  const getEmployees = async () => {
    const inputData = {
      teamName: "솔루션개발팀",
    };
    const { data } = await axios.post("/api/getEmployees", {
      params: { inputData },
    });
    setEmpList(data);
  };
  if (empList === null) {
    getEmployees();
  }
  const deletHandler = async (id) => {
    console.log(id);

    const inputData = {
      id,
    };

    const { data } = await axios.post("/api/deletEmp", {
      params: { inputData },
    });

    if (data) {
      getEmployees();
    } else {
      alert("삭제 실패! 잠시 후 재시도 해주세요.");
    }
  };
  return (
    <div className="MM01">
      <div className="buttonArea">
        <button onClick={dialogOpenToggle}>사원 추가하기 </button>
      </div>
      {empList
        ? empList.map((emp, idx) => {
            return (
              <div className="empBox" key={emp._id}>
                <div>{idx + 1}</div>
                <div>{emp.name}</div>
                <div>{emp.job}</div>
                <div>{emp.team}</div>
                <div>
                  <button onClick={() => deletHandler(emp._id)}>
                    직원삭제
                  </button>
                </div>
              </div>
            );
          })
        : `로딩중...`}

      <SlideDialog isOpen={dialogOpen} toggle={dialogOpenToggle} />
    </div>
  );
};

export default MM01;
