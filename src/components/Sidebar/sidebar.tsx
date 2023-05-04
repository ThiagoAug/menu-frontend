import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";


import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./SideNavigation.scss";
import { CreateModal } from "../create-modal/create-modal";

const SideNavigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  }

  return (
    <>
      <ProSidebar collapsed={true}>
        <div onClick={handleOpenModal}>
          <FaPlus className="icon-actions" />
        </div>
        <SidebarContent>
          <Menu>
            <MenuItem className="logo-sidebar">Dashboard</MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
    </>

  );
};

export default SideNavigation;