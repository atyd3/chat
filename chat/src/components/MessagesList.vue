<template>
  <ul>
    <base-message class="user one">
      hi
    </base-message>
    <base-message class="user two">
      hello
    </base-message>
    <base-message class="user one">
      Lorem ipsum dolor sit amet, consectetur adipisicing
    </base-message>
    <base-message class="user two">
      Lorem ipsum dolor sit amet, consectetur adipisicing
    </base-message>
    <base-message class="user one">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium, animi atque corporis cupiditate incidunt iure minus, natus, nesciunt non praesentium reprehenderit. Assumenda consectetur dignissimos exercitationem magnam quos sunt tenetur!
    </base-message>
    <base-message class="user two">
      Lorem ipsum dolor sit amet, consectetuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuur adipisicing elit. Beatae cum dolorum earum eligendi est id maiores placeat tempore temporibus unde. Accusantium dolorum eligendi neque nisi non praesentium provident sint voluptas.
    </base-message>
    <base-message class="user one">
      <div>Dummy message</div>
    </base-message>
    <base-message class="user two">
      <div>Dummy message</div>
    </base-message>
    <base-message class="user one">
      Lorem ipsum dolor sit amet, consectetur adipisicing
    </base-message>
    <base-message class="user one">
      Lorem ipsum dolor sit amet, consectetur adipisicing
    </base-message>
    <base-message class="user one">
      Lorem ipsum dolor sit amet, consectetur adipisicing
    </base-message>
    <base-message class="user two">
      Lorem ipsum dolor sit amet, consectetur adipisicing
    </base-message>
    <base-message class="user one">
      Dummy message
    </base-message>
    <base-message class="user two">
      Lorem ipsum dolor sit amet, consectetuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuuuuuuuuuuuuuuuuur adipisicing elit. Beatae cum dolorum earum eligendi est kmkjmkm njnj id maiores placeat tempore temporibus unde. Accusantium dolorum eligendi neque nisi non praesentium provident sint voluptas.
    </base-message>
    <base-message class="user one">
      Lorem ipsum dolor sit amet, consectetur adipisicing
    </base-message>
    <base-message class="user two">
      Lorem ipsum dolor sit amet, consectetur adipisicing
    </base-message>
    <base-message class="user one">
      Dummy message
    </base-message>
    <base-message class="user two">
      Lorem ipsum dolor sit amet, consectetuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuur adipisicing elit. Beatae cum dolorum earum eligendi est id maiores placeat tempore temporibus unde. Accusantium dolorum eligendi neque nisi non praesentium provident sint voluptas.
    </base-message>
    <base-message class="user one">
      Dummy message
    </base-message>
    <base-message class="user two">
      Dummy message
    </base-message>
<!--    <base-message style="background-color: orangered">-->
<!--      Add scroll to the last message-->
<!--    </base-message>-->
  </ul>
</template>
<script>
import BaseMessage from "@/components/UI/BaseMessage";

export default {
  components: {BaseMessage},
}

</script>

<style scoped>
ul {
  list-style: none;
  overflow-y: scroll;
}

 ::-webkit-scrollbar {
   width: 5px;
 }

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px #b7c4c9;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #b7c4c9;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255,223,67, 0.5);
}

</style>
