function headerComponents() {
    const htmlTemplate = `
    <header id="header">
        <div class="container">
            <div class="header-inner">
                <a href="#"><span class="main-logo"><img src="src/img/user/header/logo1.png"></span></a>
                <a href="#"><span class="input-login"><img src="src/img/user/header/login.png"><p class="text-sm">Login</p></span></a>
            </div>
        </div>    
    </header>
    `;
    const cssTemplate = `
            <link rel="stylesheet" href="src/css/reset.css" />
            <link rel="stylesheet" href="src/css/common.css" />
            <style>
            /* 공통 */
            body {
                overflow-x: hidden;
            }

            .container {
                width: 1200px;
                margin: 0 auto;
            }

            /* 헤더 */
            #header {
                margin: 10px 0 80px 0;
                width: 100%;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0 12px 10px -5px var(--gray300);
            }

            .header-inner {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }

            /* 메인 로고 */
            .main-logo img{
                width: 220px;
            }

            /* 로그인 부분 */
            .input-login {
                display: block;
                margin-right: 20px;
            }

            .input-login img {
                width: 30px;
                margin: 0 auto;
                padding-top: 10px;
            }

            .input-login p {
                margin: 0 auto;
                color: var(--black);
                text-align: center;
            }
            </style>
        `;
    const template = document.createElement("template");
    template.innerHTML += htmlTemplate + cssTemplate;

    class headerClass extends HTMLElement {
        connectedCallback() {
            this.attachShadow({ mode: "open" });
            this.render();
        }

        render() {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }

    customElements.define("header-components", headerClass);
}

headerComponents();
