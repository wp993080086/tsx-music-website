import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import styles from './login.mudule.scss'

export default defineComponent({
  name: 'login',
  setup() {
    const Router = useRouter()
    // 去主页
    const toHome = () => {
      Router.push({ name: 'Home' })
    }

    return () => (
      <div class={styles.login_box}>

      </div>
    )
  }
})