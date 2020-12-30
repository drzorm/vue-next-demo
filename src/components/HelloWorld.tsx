import { defineComponent, ref } from "vue";

import styles from "./HelloWorld.css";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup(props) {
    const count = ref(3);
    const onClick = () => count.value++;

    return () => {
      const { msg } = props;

      return (
        <div class="hello">
          <h1 onClick={onClick} class={styles}>
            {msg} {count.value}.0
          </h1>
        </div>
      );
    };
  }
});
