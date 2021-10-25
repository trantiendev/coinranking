import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const navbars = [
  {
    name: "Home",
    path: "/",
    icon: <HomeOutlined />,
    exact: true,
  },
  {
    name: "Cryptocurrencies",
    path: "/cryptocurrencies",
    icon: <FundOutlined />,
    exact: false,
  },
  {
    name: "Exchanges",
    path: "/exchanges",
    icon: <MoneyCollectOutlined />,
    exact: false,
  },
  {
    name: "News",
    path: "/news",
    icon: <BulbOutlined />,
    exact: false,
  },
];

const showMenus = (navbars) => {
  if (!navbars.length) return;
  let result = null;

  result = navbars.map(({ name, path, icon }) => (
    <Menu.Item key={path} icon={icon}>
      <Link to={path}>{name}</Link>
    </Menu.Item>
  ));

  return result;
};

const Navbar = () => {
  const { pathname } = useLocation();
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    screenSize <= 800 ? setActiveMenu(false) : setActiveMenu(true);
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar
          src="https://i.ibb.co/Z11pcGG/cryptocurrency.png"
          size="large"
        />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu
          theme="dark"
          defaultSelectedKeys={[pathname]}
          selectedKeys={[pathname]}
        >
          {showMenus(navbars)}
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
