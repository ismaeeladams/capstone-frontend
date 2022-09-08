<template>
  <tr>
    <td>{{ user.email }}</td>
    <td>{{ user.full_name }}</td>
    <td>{{ user.phone }}</td>
    <td>{{ user.user_type }}</td>
    <td>of something</td>
    <td><button>delete</button></td>
    <td><button>edit</button></td>
  </tr>
</template>
<script>
export default {
  props: ["user"],
};
</script>
<style></style>
