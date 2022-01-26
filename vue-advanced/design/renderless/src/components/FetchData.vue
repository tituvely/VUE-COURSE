<script>
import axios from "axios";

export default {
  props: ["url"],
  data() {
    return {
      response: null,
      loading: false,
    };
  },
  created() {
    axios
      .get("this.url")
      .then((response) => {
        this.response = response.data;
        this.loading = true;
      })
      .catch((error) => {
        alert("[ERROR] fetching the data", error);
        console.error();
      });
  },
  render() {
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
    });
  },
};
</script>