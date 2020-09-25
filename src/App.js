import React from "react";
import axios from "axios";
import "../src/styles/style.css";
class App extends React.Component {
  componentDidMount = async () => {
    const { data } = await axios.post("/api/connect");

    console.log(data);
  };

  render() {
    return (
      <div className="main">
        <div className="App">관리자 페이지에 오신걸 환영합니다!</div>
        <div className="bottom">
          <div className="bottom__left">
            <div className="border1">관리자 메인</div>
            <div className="border2">통계 관리</div>
            <div className="border3">상품 관리</div>
            <div className="border4">모델 관리</div>
            <div className="border8">회원 관리</div>
            <div className="border5">회원 리스트/ 구매내역</div>
            <div className="border6">블랙 리스트</div>
            <div className="border7">판매 관리</div>
          </div>
          <div className="bottom__right">
            <div className="system">회원 관리</div>
            <div className="bubble"></div>
            <div className="list__banner">
              <div className="list">회원 리스트</div>
              <div className="buy">회원별 구매내역</div>
            </div>
            <div className="statusbar">
              <div className="statusbar__name"> 회원명...</div>
              <div className="statusbar__date"> 가입일 정렬</div>
              <div className="statusbar__name1"> 이름 정렬</div>
              <div className="statusbar__email"> 이메일 정렬</div>
            </div>
            <div className="rightbottom">
              <div className="lleft">
                <div className="info">
                  <div className="info__number">번호</div>
                  <div className="info__email">이메일</div>
                  <div className="info__name">이름</div>
                </div>
                <div className="info__bottom1">
                  <div className="info__number1">1</div>
                  <div className="info__email1">4leaf.hyk@gmail.com</div>
                  <div className="info__name1">황예규</div>
                </div>
                <div className="info__bottom2">
                  <div className="info__number2">2</div>
                  <div className="info__email2">4leaf.ysh@gmail.com</div>
                  <div className="info__name2">윤상호</div>
                </div>
              </div>
              <div className="rright">
                <div className="info2">상세정보</div>
                <div className="select">회원을 선택해주세요.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
