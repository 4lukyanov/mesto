export class UserInfo {
  constructor(nameContainer, jobContainer, name, about) {
    this.name = name;
    this.about = about;
    this.nameContainer = nameContainer;
    this.jobContainer = jobContainer;
  };

  setData() {
    this.updateUserInfo(this.setUserInfo(this.name, this.about));
  };

  setUserInfo(nameValue, aboutValue) {
    const inputValue =
    {
      name: nameValue,
      about: aboutValue,
    };
    return inputValue;
  };

  updateUserInfo(object) {
    this.nameContainer.textContent = object.name;
    this.jobContainer.textContent = object.about;
  };
};

