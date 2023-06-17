<template>
  <div class="container">
    <div class="flex flex-col items-center mt-1">
      <div class="mt-4">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="username" class="text-sm">Логин</label>
            <InputText
              id="username"
              v-model="identifier"
              aria-describedby="username-help"
            />
            <small
              id="username-help"
              class="text-sm text-red-700"
              v-if="identifier.length < 4"
              >Введите корректный логин</small
            >
          </div>
          <div class="flex flex-col gap-2">
            <label for="username" class="text-sm">Пароль</label>
            <InputText
              id="password"
              type="password"
              v-model="password"
              aria-describedby="username-help"
            />
            <small
              id="password-help"
              class="text-sm text-red-700"
              v-if="password.length < 6"
              >Введите корректный пароль</small
            >
          </div>

          <div>
            <Button
              label="Войти"
              @click="login"
              size="small"
              class="!bg-red-700/70 !border-none !w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gql } from '@apollo/client/core'
import { useUser } from '@/store'
const router = useRouter()
const user = useUser()

const identifier = ref('')
const password = ref('')

const { login: loginUseStrapiAuth } = useStrapiAuth()
const { onLogin: LoginApollo } = useApollo()



const loginQuery = gql`
  mutation ($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        username
        PHIO
        Phone
        id
      }
    }
  }
`
const { mutate: login, onDone } = useMutation(loginQuery, () => ({
  variables: {
    identifier: identifier.value,
    password: password.value
  }
}))
onDone(result => {
  // onLogin(result.data.login.jwt)

  console.log('result', result)
  LoginApollo(result.data.login.jwt)
  user.SetUserData(result.data.login.user)
  setTimeout(() => {
    router.push('/lk')
  }, 500)
})
</script>
