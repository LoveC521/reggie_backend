import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useEmployeeStore = defineStore('employee', () => {
  const employee = reactive({
    "id": "",
    "username": "",
    "name": "",
    "password": "",
    "phone": "",
    "sex": "",
    "idNumber": "",
    "status": 0,
    "createTime": "",
    "updateTime": "",
    "createUser": "",
    "updateUser": ""
  });

  return {employee};
}, {
  persist: {
    enabled: true
  }
});
