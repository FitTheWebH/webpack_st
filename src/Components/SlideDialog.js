import React, { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SlideDialog({ isOpen, toggle }) {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [team, setTeam] = useState("");
  const [gender, setGender] = useState("");
  const [job, setJob] = useState("");

  const registerActionHandler = async () => {
    if (!name || name.trim() === "") {
      alert("사원명은 필수값 입니다.");
      return;
    }
    if (!birth || birth.trim() === "") {
      alert("생년월일은 필수값 입니다.");
      return;
    }
    if (!team || team.trim() === "") {
      alert("팀명은 필수값 입니다.");
      return;
    }
    if (!job || job.trim() === "") {
      alert("직급은 필수값 입니다.");
      return;
    }
    if (!gender || gender.trim() === "") {
      alert("성별은 필수값 입니다.");
      return;
    }

    const inputData = {
      name,
      birth,
      team,
      job,
      gender,
    };

    const { data } = await axios.post("/api/registerEmployee", {
      params: { inputData },
    });

    if (data) {
      setName("");
      setBirth("");
      setGender("");
      setTeam("");
      setJob("");
      toggle(true);
    } else {
      alert("직원 등록 실패! 잠시 후 다시 시도해주세요");
      toggle();
    }
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={toggle}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">사원 추가하기</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            각 팀별 사원을 추가할 수 있습니다.
          </DialogContentText>
          <div className="dialogBox">
            <input
              type="text"
              placeholder="사원명..."
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="text"
              placeholder="생년월일..."
              value={birth}
              onChange={(event) => setBirth(event.target.value)}
            />

            <select
              defaultValue={team}
              onChange={(event) => setTeam(event.target.value)}
            >
              <option value="">--팀명--</option>
              <option value="솔루션개발팀">솔루션개발팀</option>
              <option value="솔루션디자인팀">솔루션디자인팀</option>
              <option value="기술개발팀">기술개발팀</option>
              <option value="기획행정본부">기획행정본부</option>
              <option value="인턴">인턴</option>
            </select>
            <select
              defaultValue={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="">--성별--</option>
              <option value="남성">남성</option>
              <option value="여성">여성</option>
            </select>
            <select
              defaultValue={job}
              onChange={(event) => setJob(event.target.value)}
            >
              <option value="">--직급--</option>
              <option value="인턴">인턴</option>
              <option value="수습사원">수습사원</option>
              <option value="사원">사원</option>
              <option value="주임">주임</option>
              <option value="대리">대리</option>
              <option value="팀장">팀장</option>
              <option value="CTO">CTO</option>
            </select>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggle} color="primary">
            닫기
          </Button>
          <Button onClick={registerActionHandler} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
