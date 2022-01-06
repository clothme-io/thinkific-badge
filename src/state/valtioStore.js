import { proxy } from "valtio";

const AppState = proxy({
  session: { accessToken: "", refreshToken: "", isAuth: false },
  courses: [],
  badges: {},
  account: { isActive: false, gid: "" },
});

export default AppState;
