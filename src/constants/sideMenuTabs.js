import {
  MessageOutlined,
  SettingFilled,
  CreditCardOutlined,
  StarFilled,
  LogoutOutlined,
  LoginOutlined,
} from "@ant-design/icons";

export const menusTabs = [
  {
    id: 0,
    name: "Public Profile",
    children: [],
    icon: <MessageOutlined className="icon" style={{ fontSize: "20px" }} />,
  },
  {
    id: 1,
    name: "Settings",
    children: [],
    icon: <SettingFilled className="icon" style={{ fontSize: "20px" }} />,
  },
  {
    id: 2,
    name: "Payments",
    children: [],
    icon: <CreditCardOutlined className="icon" style={{ fontSize: "20px" }} />,
  },
  {
    id: 3,
    name: "Purchases & Reviews",
    children: [],
    icon: <StarFilled className="icon" style={{ fontSize: "20px" }} />,
  },

  {
    id: 4,
    name: "Sign Out",
    children: [],
    icon: <LoginOutlined className="icon" style={{ fontSize: "20px" }} />,
  },
];
