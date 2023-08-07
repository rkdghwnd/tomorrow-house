import React from 'react';

const GlobalFooter = () => {
  return (
    <footer className="global-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3 className="global-footer-title">
              고객센터
              <i className="ic-chevron" aria-hidden></i>
            </h3>
            <a className="global-footer-contact" href="tel:10041004">
              1001-1001
            </a>
            <p className="global-footer-time">
              평일 09:00 ~ 18:00 (주말 &amp; 공휴일 제외)
            </p>

            <dl className="global-footer-detail-list">
              <div className="global-footer-detail-item">
                <dt>상호명</dt>
                <dd>프로젝트 내일의집</dd>
              </div>
              <div className="global-footer-detail-item">
                <dt>이메일</dt>
                <dd>
                  <address>
                    <a href="mailto:kimbugx@gmail.com">ghwnd6448@gmail.com</a>
                  </address>
                  (제휴문의)
                </dd>
              </div>
              <div className="global-footer-detail-item">
                <dt>대표이사</dt>
                <dd>김버그</dd>
              </div>
              <div className="global-footer-detail-item">
                <dt>주소</dt>
                <dd>
                  <address>
                    <a
                      href="https://www.youtube.com/c/kimbug"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/rkdghwnd
                    </a>
                  </address>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
