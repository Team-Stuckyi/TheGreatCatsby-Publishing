function footerComponents() {
    const htmlTemplate = `
    <footer id="footer">
        <div class="footer-top-container">
            <div class="footer-top">
                <div class="footer-top-list">
                    <ul>
                        <li><img src="/src/img/user/footer/image1.png"></li>
                        <li><img src="/src/img/user/footer/image2.png"></li>
                        <li><img src="/src/img/user/footer/image3.png"></li>
                        <li><img src="/src/img/user/footer/image4.png"></li>
                    </ul>
                </div>
            </div>
        </div>
            <div class="footer-bottom-container">
                <div class="footer-bottom">
                    <div class="bottom-inner">
                        <div class="footer-left">
                                <img src="/src/img/user/footer/support.png">
                                <p class="phone text-xl bold">1234-1234</p>
                                <p class="text-sm opperation-time">운영 시간: 평일 10:00 ~ 18:00 / 주말, 공휴일 휴무</p>
                        </div>
                        <div class="footer-right">
                            <ul>
                                <li class="bold text-2xl">
                                위대한 캣츠비
                                </li>
                                <li class="text-sm">
                                (주)팀스투키 대표이사:이병민 사업자등록번호:115-138-138-123 통신판매업:제2013-서울강남-1234호
                                </li>
                                <li class="text-sm">
                                개인정보보호책임자:전찬민 주소:서울시 강남대로 W타워
                                </li>
                                <li class="text-sm">
                                팩스:201234 이메일:abcdefg@gmail.com
                                </li>
                            </ul>
                        </div>
                    </div>
                        <div class="footer-awards">
                            <ul>
                                <li>
                                <img src="/src/img/user/footer/image1 (6).png">
                                </li>
                                <li>
                                <img src="/src/img/user/footer/image2 (5).png">
                                </li>
                                <li>
                                <img src="/src/img/user/footer/image3 (4).png">
                                </li>
                                <li>
                                <img src="/src/img/user/footer/image4 (3).png">
                                </li>
                                <li>
                                <img src="/src/img/user/footer/image5 (3).png">
                                </li>
                                <li>
                                <img src="/src/img/user/footer/image6 (2).png">
                                </li>
                            </ul>
                        </div>
                    </div>
                        <div class="copyright-container">
                            <div class="copyright">
                                <p>
                                    copyright <p class="stuckyi bold">Team STUCKYI</p> clone coding by 고양이대통령 power by <a href="https://github.com/Team-Stuckyi">https://github.com/Team-Stuckyi</a>
                                </p>
                            </div>
                        </div>   
                </div>
            </footer>
    `;
    const cssTemplate = `
            <link rel="stylesheet" href="/src/css/reset.css" />
            <link rel="stylesheet" href="/src/css/common.css" />
            <style>
            /* 공통 */
            .footer-top-container {
                width: 100%;
                margin: 0 auto;
                background-color: var(--primary);
            }

            .footer-bottom-container {
                width: 100%;
                margin: 0 auto;
                background-color: var(--gray100);
            }

            body {
                overflow-x: hidden;
            }

            /* 푸터 */
            #footer {
                width: 100%;
                height: 300px;
                margin-top: 150px;
            }

            /* 푸터 윗부분 */
            #footer .footer-top {
                width: 1200px;
                height: 85px;
                background-color: var(--primary);
                display: block;
                margin: 0 auto;
            }

            #footer .footer-top-list {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            #footer .footer-top ul{
                width: 80%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }

            #footer .footer-top img {
            width: 300px;
            }


            /*푸터 아랫부분*/
            #footer .footer-bottom {
                height: 400px;
                background-color: var(--gray100);
                width: 1200px;
                margin: 0 auto;
            }

            #footer .bottom-inner {
                width: 98%;
                margin: 0 auto;
                padding-top: 30px;
                display: flex;
                justify-content: space-around;
            }

            #footer .footer-left .phone {
                display: inline;
                position: relative;
                bottom: 7px;
                left: 10px;          
            }

            #footer .footer-bottom .opperation-time {
            display: block;
            }

            #footer .footer-right {
            color: var(--gray400);
            }

            #footer .footer-right ul{
            display: flex;
            flex-direction: column;
            }

            #footer .footer-right li{
            display: flex;
            justify-content: flex-end;
            }


            /* 푸터 어워드 */
            #footer .footer-awards {
                margin-top: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            #footer .footer-awards ul {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                border-top: 2px solid var(--gray300);
                margin-bottom: 50px;
            }

            #footer .footer-awards li {
            margin-top: 50px;
            }

            #footer .footer-awards img {
                height: 50px;
                width: 100%;
            }


            /* 푸터 copyright */
            #footer .copyright {
            background-color: var(--gray300);
            padding: 15px 0 15px 0;
            text-align: center;
            }

            #footer .copyright p {
            display: inline;
            }

            #footer .copyright .stuckyi {
            color: var(--primary);
            display: inline;
            }

            #footer .copyright a {
            color: var(--blue200);
            display: inline;
            }
            </style>
        `;
    const template = document.createElement("template");
    template.innerHTML += htmlTemplate + cssTemplate;

    class footerClass extends HTMLElement {
        connectedCallback() {
            this.attachShadow({ mode: "open" });
            this.render();
        }

        render() {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }

    customElements.define("footer-components", footerClass);
}

footerComponents();
