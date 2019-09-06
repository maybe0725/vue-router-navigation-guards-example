import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

// export default new Router({
export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // meta 정보에 로그인 검증을 판단하는 requiresAuth 라는 Boolean 플래그 값을 추가한다.
    // meta: { requiresAuth: true or false }
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue"),
      meta: { requiresAuth: false }
    },
    {
      path: "/router-guards",
      name: "router-guards",
      component: () =>
        import(
          /* webpackChunkName: "router-guards" */ "./views/RouterGuards.vue"
        ) /*,
      beforeEnter: function(to, from, next) {
        console.log("==================================================");
        console.log(">>> [라우터 가드 :: beforeEnter]");
        console.log(">>> 특정 라우팅에 대해서 가드를 설정하는 방식");
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
        // 인증 값 검증 로직 작성
      }*/
    }
  ]
});

/**
 * =======================================================================================================================
 * Global Guards / 전역 가드 : 애플리케이션 전역에서 동작.
 * -----------------------------------------------------------------------------------------------------------------------
 * beforeEach() 를 호출하고 나면 모든 라우팅이 대기 상태가 된다.
 * 원래 URL이 변경되고 나면 해당 URL에 따라 화면이 자연스레 전환되어야 하는데, 전역 가드를 설정했기 때문에 화면이 전환되지 않는다.
 * 여기서 해당 URL 로 라우팅하기 위해서는 next()를 호출해야 한다.
 * next() 가 호출되지 전까지 화면이 전환되지 않는다는 것에 주의해야 한다.
 * -----------------------------------------------------------------------------------------------------------------------
 * to   : 이동할 URL 정보가 담긴 라우터 객체
 * from : 현재 URL 정보가 담긴 라우터 객체
 * next : to 에서 지정한 URL로 이동하기 위해 반드시 호출해야하는 함수
 * =======================================================================================================================
 */
/*
router.beforeEach(function(to, from, next) {
  console.log("==================================================");
  console.log(">>> [전역 가드]");
  console.log(">>> 애플리케이션 전역에서 동작");
  console.log(
    ">>> beforeEach() 를 호출하고 나면 모든 라우팅이 대기 상태가 된다."
  );
  console.log(
    ">>> 원래 URL이 변경되고 나면 해당 URL에 따라 화면이 자연스레 전환되어야 하는데, 전역 가드를 설정했기 때문에 화면이 전환되지 않는다."
  );
  console.log(
    ">>> 여기서 해당 URL 로 라우팅하기 위해서는 next()를 호출해야 한다."
  );
  console.log(
    ">>> next() 가 호출되지 전까지 화면이 전환되지 않는다는 것에 주의해야 한다."
  );
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

  if (
    to.matched.some(function(routeInfo) {
      console.log(
        "routeInfo.meta.requiresAuth: " + routeInfo.meta.requiresAuth
      );
      return routeInfo.meta.requiresAuth;
    })
  ) {
    alert("Login Please!");
  } else {
    console.log("routing success: " + to.path);
    // next() 로 to로 이동하지 않으면 라우팅이 되지 않는다.
    next(); // next() 로 원하는 컴포넌트 URL로 이동되면 이 후 가드가 발생한다.(동일 페이지 이동 이벤트 차단)
  }
});
*/
