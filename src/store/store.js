import { defineStore } from "pinia";
export const useStore = defineStore({
  id: "store",
  state: () => ({
    userInfo: {
      name: "",
      surname: "",
      login: "",
      password: "",
      someVal: false,
      checkBoxesStorage: [
        {
          name: "Cтворення",
          value: false
        },
        {
          name: "Оновлення",
          value: false
        },
        {
          name: "Переміщення",
          value: false
        },
        {
          name: "Видалення",
          value: false
        },
      ],
      checkBoxesCategories: [
        {
          name: "Cтворення",
          value: false
        },
        {
          name: "Оновлення",
          value: false
        },
        {
          name: "Видалення",
          value: false
        },
      ],
      checkBoxesCharacteristics: [
        {
          name: "Cтворення",
          value: false
        },
        {
          name: "Оновлення",
          value: false
        },
        {
          name: "Видалення",
          value: false
        },
      ],
      radioValues: [
        {
          name: "Склад",
          value: false
        },
        {
          name: "Категорії",
          value: false
        },
        {
          name: "Характеристики",
          value: false
        },
        {
          name: "Продукти",
          value: false
        },
        {
          name: "Операції",
          value: false
        },
      ],
    },
    defaultUserInfo: {
      name: "",
      surname: "",
      login: "",
      password: "",
      someVal: false,
      checkBoxesStorage: [
        {
          name: "Cтворення",
          value: false
        },
        {
          name: "Оновлення",
          value: false
        },
        {
          name: "Переміщення",
          value: false
        },
        {
          name: "Видалення",
          value: false
        },
      ],
      checkBoxesCategories: [
        {
          name: "Cтворення",
          value: false
        },
        {
          name: "Оновлення",
          value: false
        },
        {
          name: "Видалення",
          value: false
        },
      ],
      checkBoxesCharacteristics: [
        {
          name: "Cтворення",
          value: false
        },
        {
          name: "Оновлення",
          value: false
        },
        {
          name: "Видалення",
          value: false
        },
      ],
      radioValues: [
        {
          name: "Склад",
          value: false
        },
        {
          name: "Категорії",
          value: false
        },
        {
          name: "Характеристики",
          value: false
        },
        {
          name: "Продукти",
          value: false
        },
        {
          name: "Операції",
          value: false
        },
      ],
    },
    loaderStatus: false,
    errors: {
      userInfo: '',
      checkbox: '',
      radio: ''
    },
    validationConfirm: false
  }),
  getters: {},
  actions: {
    validationData() {
      console.log(this.userInfo.name.length);
      console.log(this.userInfo.surname.length);
      console.log(this.userInfo.login.length);
      console.log(this.userInfo.password.length);
      if (this.userInfo.name.length > 0 && this.userInfo.surname.length > 0 && this.userInfo.login.length > 0 && this.userInfo.password.length > 0) {
        if (validationCheckboxUser(this.userInfo.checkBoxesCategories, this.userInfo.checkBoxesCharacteristics, this.userInfo.checkBoxesStorage)) {
          if (validationRadioUser(this.userInfo.radioValues)) {
            useStore().loaderTimeout();
          } else useStore().errorsTimeout('radio', 'Одне значення має бути вибрано')
        } else useStore().errorsTimeout('checkbox', 'Одне значення має бути вибрано')
      } else {
        useStore().errorsTimeout('userInfo', 'Всі поля мають бути заповнені')
      }
    },
    errorsTimeout(param, text) {
      this.errors[param] = text
      setTimeout(() => {
        this.errors[param] = ''
      }, 4000);
    },
    loaderTimeout() {
      this.loaderStatus = true
      this.userInfo = Object.assign({}, this.defaultUserInfo);
      
      setTimeout(() => {
        this.loaderStatus = false
        this.validationConfirm = true
        setTimeout(() => {
          this.validationConfirm = false
        }, 4000);
      }, 1000);
    }
  },
});

function Validation(params) {
  let saveData = false
  for (const key in params) {
    const element = params[key];
    if (element.value === true) {
      saveData = true
    }
  }
  return saveData
};
function validationCheckboxUser(checkBoxesCategories, checkBoxesCharacteristics, checkBoxesStorage) {
  if (Validation(checkBoxesCategories) && Validation(checkBoxesCharacteristics) && Validation(checkBoxesStorage)) {
    return true
  } else return false
}
function validationRadioUser(radioValues) {
  if (Validation(radioValues)) {
    return true
  } else return false
}