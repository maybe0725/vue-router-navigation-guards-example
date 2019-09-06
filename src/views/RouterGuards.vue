<template>
  <div class="login">
    <h1>This is an router-guards page</h1>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("==================================================");
    console.log(">>> [컴포넌트 가드]");
    console.log(">>> 특정 컴포넌트에 대해서 가드를 설정하는 방식");
    console.log(">>> 컴포넌트 단위로 스크립트에 작성");
    console.log("--------------------------------------------------");
    console.log(">>> [beforeRouteEnter()]");
    console.log(">>> 컴포넌트가 화면에 표시되기 전 수행될 로직");
    console.log(">>> 컴포넌트는 아직 생성되지 않은 시점.");
    console.log("--------------------------------------------------");
    console.log(">>> to: ");
    console.log(to);
    console.log("--------------------------------------------------");
    console.log(">>> from");
    console.log(from);
    console.log("--------------------------------------------------");
    console.log(">>> next");
    console.log(next);
    console.log("==================================================");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("==================================================");
    console.log(">>> [컴포넌트 가드]");
    console.log(">>> 특정 컴포넌트에 대해서 가드를 설정하는 방식");
    console.log(">>> 컴포넌트 단위로 스크립트에 작성");
    console.log("--------------------------------------------------");
    console.log(">>> [beforeRouteUpdate]");
    console.log(">>> 화면에 표시된 컴포넌트가 변경될 때 수행될 로직");
    console.log(">>> 'this' 로 컴포넌트를 접근할 수 있음.");
    console.log("--------------------------------------------------");
    console.log(">>> to: ");
    console.log(to);
    console.log("--------------------------------------------------");
    console.log(">>> from");
    console.log(from);
    console.log("--------------------------------------------------");
    console.log(">>> next");
    console.log(next);
    console.log("==================================================");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("==================================================");
    console.log(">>> [컴포넌트 가드]");
    console.log(">>> 특정 컴포넌트에 대해서 가드를 설정하는 방식");
    console.log(">>> 컴포넌트 단위로 스크립트에 작성");
    console.log("--------------------------------------------------");
    console.log(">>> [beforeRouteLeave]");
    console.log(">>> 컴포넌트를 화면에 표시한 URL 값이 변경되기 직전의 로직");
    console.log(">>> 'this' 로 컴포넌트를 접근할 수 있음.");
    console.log("--------------------------------------------------");
    console.log(">>> to: ");
    console.log(to);
    console.log("--------------------------------------------------");
    console.log(">>> from");
    console.log(from);
    console.log("--------------------------------------------------");
    console.log(">>> next");
    console.log(next);
    console.log("==================================================");
    next();
  }
};
</script>
