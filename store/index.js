import { defineStore } from 'pinia'

export const useSity = defineStore('sity', {
  state: () => ({
    sity: 'Ставрополь',
    id: 1
  }),
  getters: {
    getSityName: state => state.sity,
    getSityId: state => state.id
  },
  actions: {
    SetSityData (item) {
      this.sity = item.attributes.Name
      this.id = item.id
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
})

export const useCart = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  getters: {
    getCart: state => state.cart
  },
  actions: {
    AddCartItem (product) {
      const productReq = {
        ...product,
        colVo: 1
      }
      this.cart.push(productReq)
    },
    changeColItem (i, num) {
      const items = this.cart
      let element = i
      let indices = {}
      let idx = items.indexOf(element)
      while (idx != -1) {
        indices = idx
        idx = items.indexOf(element, idx + 1)
      }
      this.cart[indices].colVo = num
    },
    deleteItem (id) {
      this.cart = this.cart.filter(x => x.id !== id)
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
})

export const useToastStore = defineStore('toast', {
  state: () => ({
    toast: []
  }),
  getters: {
    getToast: state => state.toast
  },
  actions: {
    AddToast (message) {
      this.toast.push(message)
    }
  }
})

export const useUser = defineStore('user', {
  state: () => ({
    userData: {}
  }),
  getters: {
    getuserData: state => state.userData
  },
  actions: {
    SetUserData (user) {
      this.userData = user
    },
    logoutUserData () {
      this.userData = {}
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
})
