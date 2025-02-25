<script>
  import ButtonTest from "./components/ButtonTest.vue"
  import ButtonTest2 from "./components/ButtonTest2.vue"
  import InputField from "./components/InputField.vue"
  import Modal from "./components/Modal.vue"
  import PiniaTest from "./components/PiniaTest.vue"


  export default {
    components: {
      ButtonTest,
      ButtonTest2,
      InputField,
      Modal,
      PiniaTest
    }
  }
</script>

<template>
  <PiniaTest />
  <ButtonTest />
  <InputField />
  <Modal />
  <ButtonTest2 />
</template>
