<script setup></script>

<template>
  <form action="">
    <div class="form-container">
      <div>
        <label for="total">Total</label>
        <input type="number" required />
      </div>

      <div>
        <label for="tip">Tip %</label>
        <input type="number" required />
      </div>

      <div>
        <label for="people">People</label>
        <input type="number" required />
      </div>

      <div>
        <input type="submit" value="Calculate" />
      </div>
    </div>
  </form>
</template>

<style scoped></style>
