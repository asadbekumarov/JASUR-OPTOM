// import React from "react";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
// import { Button, Input, Space, ConfigProvider } from "antd";
// import { useResponsive } from "antd-style";
// import axios from "axios";
// import { NavLink, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [name, setName] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const { xxl } = useResponsive();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("password", password);

//     axios
//       .post("https://03ab-213-230-97-152.ngrok-free.app/api/login", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((response) => {
//         const token = response?.data?.token;
//         if (token) {
//           localStorage.setItem("authToken", token);
//           console.log("Token saqlandi:", token);
//           navigate("/hero");
//         } else {
//           alert("Token topilmadi!");
//         }
//       })
//       .catch((error) => {
//         console.error("Login xatosi:", error);
//         alert("Login failed!");
//       });
//   };

//   return (
//     <form
//       className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center"
//       onSubmit={handleSubmit}
//     >
//       <div className="max-w-[1300px] w-full flex justify-evenly p-4 bg-white rounded-lg shadow-lg">
//         <div className="flex flex-col items-center mb-8">
//           <div className="bg-green-800 w-[230px] h-[230px] rounded-full"></div>
//           <h1 className="text-2xl font-semibold mt-4">JASUR OPTOM</h1>
//         </div>

//         <div className="flex flex-col p-5 justify-center gap-4 mb-8">
//           <Input
//             className="w-72 p-3 text-base"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             placeholder="Ism"
//           />
//           <Space direction="vertical" className="w-72">
//             <Input.Password
//               className="w-72 p-3"
//               placeholder="Parol"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               iconRender={(visible) =>
//                 visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//               }
//             />
//           </Space>
//           <ConfigProvider componentSize={xxl ? "middle" : "small"}>
//             <Button
//               className="bg-blue-500 hover:bg-blue-600 active:scale-95 text-white py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-300"
//               type="primary"
//               block
//               onClick={handleSubmit}
//             >
//               <NavLink>Kirish</NavLink>
//             </Button>
//           </ConfigProvider>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Login;
import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space, ConfigProvider } from "antd";
import { useResponsive } from "antd-style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { xxl } = useResponsive();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("password", password);

    axios
      .post("https://03ab-213-230-97-152.ngrok-free.app/api/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const token = response?.data?.token;
        if (token) {
          localStorage.setItem("authToken", token);
          console.log("Token saqlandi:", token);
          navigate("/hero");
        } else {
          alert("Token topilmadi!");
        }
      })
      .catch((error) => {
        console.error("Login xatosi:", error);
        alert("Login failed!");
      });
  };

  return (
    <form
      className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="w-full max-w-5xl flex flex-wrap items-center justify-evenly p-6 bg-white rounded-lg shadow-lg gap-6 md:gap-10">
        <div className="flex flex-col items-center md:items-start">
          <div className="bg-green-800 w-28 h-28 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full"></div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-4 text-center md:text-left">
            JASUR OPTOM
          </h1>
        </div>

        <div className="flex flex-col p-5 justify-center gap-4 max-w-[600px] md:max-w-md lg:max-w-lg">
          <Input
            className="p-3 text-base w-full md:w-[300px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Ism"
          />
          <Space direction="vertical" className="max-w-[300px]">
            <Input.Password
              className="p-3 w-full md:w-[300px]"
              placeholder="Parol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Space>
          <ConfigProvider componentSize={xxl ? "middle" : "small"}>
            <Button
              className="bg-blue-500 hover:bg-blue-600 active:scale-95 text-white py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-300"
              type="primary"
              block
            >
              Kirish
            </Button>
          </ConfigProvider>
        </div>
      </div>
    </form>
  );
};

export default Login;
