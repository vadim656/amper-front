<template>
  <div class="container">
    <div class="flex flex-col items-center mt-1">
      <Toast />

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
              class="text-sm text-red"
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
              class="text-sm text-red"
              v-if="password.length < 6"
              >Введите корректный пароль</small
            >
          </div>

          <div>
            <Button
              label="Войти"
              @click="login"
              size="small"
              class="!bg-red/70 !border-none !w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { userInfo } from '@/store'
const { onLogin } = useApollo()


const store = userInfo()

const isLoading = ref(false)
const router = useRouter()

const identifier = ref('')
const password = ref('')

const loginQuery = gql`
  mutation ($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
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
  onLogin(result.data.login.jwt)
  store.registerUser()
  setTimeout(() => {
    router.push('/')
  }, 500)
})
</script>
