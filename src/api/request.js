// ====== Form Login =========
// const onFinish = (values) => {
//     login(values).then((res) => {
//       if (res.data?.success === true) {
//         Cookies.set("jwt", res.data?.data?.jwt);
//         navigate("/user/staff");
//       } else if (res.data?.error?.code === 500) {
//       }
//     });
//   }




// ========= File request ==========
import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "https://034a-118-70-132-104.ngrok-free.app";
const login_path = "/api/auth/login";

axios.interceptors.request.use((req) => {
  const jwt = Cookies.get("jwt");
  const newUrl = baseUrl + req.url;
  const Authorization = login_path === req.url ? undefined : `Bearer ${jwt}`;

  return {
    ...req,
    url: newUrl,
    headers: {
      ...req.headers,
      Authorization,
      'ngrok-skip-browser-warning': '1',
    },
  };
});

axios.interceptors.request.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;