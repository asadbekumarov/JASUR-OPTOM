import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space, ConfigProvider } from "antd";
import { useResponsive } from "antd-style";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

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
      className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex  items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="max-w-[1300px] flex-wrap w-full flex justify-evenly p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-green-800 w-[230px] h-[230px] rounded-full"></div>
          <h1 className="text-2xl font-semibold mt-4">JASUR OPTOM</h1>
        </div>

        <div className="flex flex-col p-5 justify-center gap-4 mb-8">
          <Input
            className="max-w-[18rem] p-3 text-base"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Ism"
          />
          <Space direction="vertical" className="max-w-[18rem]">
            <Input.Password
              className="max-w-[18rem] p-3"
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
              className="bg-blue-500 hover:bg-blue-600 active:scale-95 text-white py-2 max-w-[18rem] px-4 rounded shadow-lg hover:shadow-xl transition duration-300"
              type="primary"
              block
              onClick={handleSubmit}
            >
              <NavLink>Kirish</NavLink>
            </Button>
          </ConfigProvider>
        </div>
      </div>
    </form>
  );
};

export default Login;
