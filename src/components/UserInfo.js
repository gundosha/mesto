export default class UserInfo {
    constructor(title, subtitle) {
        this._title = document.querySelector(title);
        this._subtitle = document.querySelector(subtitle);

    }

    getUserInfo() {
        const data = {
            name: this._title.textContent,
            job: this._subtitle.textContent
        };
        return data;
    }

    setUserInfo(title, subtitle) {
        this._title.textContent = title;
        this._subtitle.textContent = subtitle;
    };

}