export default class UserInfo {
    constructor({ name, job }) {
        this._name = name;
        this._job = job;
    }

    getUserInfo() {
        return { name: this._name, job: this._job };
    }

    setUserInfo({ title, work }) {
        this._name.textContent = title;
        this._job.textContent = work;
    };
}