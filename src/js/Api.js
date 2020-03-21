export class Api {
    constructor(adress, token) {
        this.adress = adress;
        this.token = token;
        this.authorization = {
            headers: {
                authorization: this.token,
              }
        };
    };

    getUserInfo(param) {
      return  fetch(`${this.adress}${param}`, this.authorization)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);   
            })
            .then(res => {
                let object = {
                    name: res.name,
                    about: res.about
                };
                return object;
            })
            .catch(err => console.log(err))
    };

    getInitialCards(param) {
        return  fetch(`${this.adress}${param}`, this.authorization)
              .then(res => {
                  if (res.ok) {
                      return res.json();
                  }
                  return Promise.reject(`Ошибка: ${res.status}`);   
              })
              .then(res => {
                  return res;
              })
              .catch(err => console.log(err))
      };

    patchUserInfo(param, name, about) {
        return  fetch(`${this.adress}${param}`, {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                name: `${name}`,
                about: `${about}`
              })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);   
        })
        .then(res => {
            return res;
        })
        .catch(err => console.log(err))
    };
};

