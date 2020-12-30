import { defineComponent } from "vue";
import "./App.less";

export default defineComponent({
  setup() {
    return () => (
      <>
        <div id="nav">
          <router-link to="/">Home</router-link>|<router-link to="/about">About</router-link>
        </div>
        <router-view />
      </>
    );
  }
});
