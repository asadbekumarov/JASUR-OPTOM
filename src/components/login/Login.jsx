import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space, ConfigProvider } from "antd";
import { useResponsive } from "antd-style";
import axios from "axios";

const Login = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { xxl } = useResponsive();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!name || !password) {
      alert("barcha maydonlarni to'ldiring");
      return;
    }
    try {
      const res = await axios.post(
        "http://6790cf0c62db3.xvest6.ru:8000/api/login",
        {
          name,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data;
      console.log("Login successful:", data);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || "Xatolik yuz berdi!");
      } else {
        alert("Serverga ulanishda xatolik yuz berdi!");
      }
    }
  };

  return (
    <form className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="max-w-[1300px] w-full flex justify-evenly p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-green-800 w-[230px] h-[230px] rounded-full"></div>
          <h1 className="text-2xl font-semibold mt-4">Jasur Optom</h1>
        </div>

        <div className="flex flex-col p-5 justify-center gap-4 mb-8">
          <Input
            className="w-72 p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Ism"
          />
          <Space direction="vertical" className="w-72">
            <Input.Password
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
            <Button type="primary" block onClick={handleLogin}>
              Kirish
            </Button>
          </ConfigProvider>
        </div>
      </div>
    </form>
  );
};

export default Login;
