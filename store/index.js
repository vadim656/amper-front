import { defineStore } from 'pinia'
import { gql } from "@apollo/client/core"

const queryMe = gql`
  query {
    me {
      id
      username
    }
  }
`



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
      this.cart.push(product)
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
})


export const userInfo = defineStore('session', {
  state: () => {
    return {
      info: {}
    }
  },
  actions: {
     registerUser () {
      const { result, onResult } = useQuery(queryMe)

      onResult(res => {
        this.info = res.data.me
      })
    },
    clearSession () {
      this.info = {}
    }
  },
  getters: {
    getInfo: state => state.info
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
