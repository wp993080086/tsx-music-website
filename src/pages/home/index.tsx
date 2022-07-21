import { defineComponent } from 'vue'
import styles from './home.module.scss'

export default defineComponent({
  name: 'home',
  setup() {
    return () => (
      <div class={styles.box}>
        111
      </div>
    )
  }
})