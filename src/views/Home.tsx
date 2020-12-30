import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld";

export default defineComponent({
  setup() {
    return () => (
      <div class="home">
        <img alt="Vue logo" src={require("@/assets/logo.png")} />
        <HelloWorld msg="Vue" />
      </div>
    );
  }
});
