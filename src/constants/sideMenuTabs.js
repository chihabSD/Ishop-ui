import {
  MessageOutlined,
  SettingFilled,
  CreditCardOutlined,
  StarFilled,
  LogoutOutlined,
  LoginOutlined,
  UserOutlined, InboxOutlined, LockOutlined
} from "@ant-design/icons";

export const menusTabs = [
  {
    id: 0,
    name: "Profile",
    children: [],
    route:'/account/profile', 
    icon: <UserOutlined className="icon" style={{ fontSize: "20px" }} />,
  },
  {
    id: 90,
    name: "Orders",
    children: [],
    route:'/account/orders', 
    icon: <InboxOutlined className="icon" style={{ fontSize: "20px" }} />,
  },
  {
    id: 33,
    name: "Settings",
    children: [],
    route:'/account/settings', 
    icon: <SettingFilled className="icon" style={{ fontSize: "20px" }} />,
  },
  
 

  {
    id: 190,
    name: "Return and refund",
    route:'/account/returns', 
    children: [],
    icon: <LockOutlined className="icon" style={{ fontSize: "20px" }} />,
  },
  {
    id: 4,
    name: "Sign Out",
    children: [],
    icon: <LoginOutlined className="icon" style={{ fontSize: "20px" }} />,
  },
];