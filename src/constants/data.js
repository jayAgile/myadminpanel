import { FaUserLock, FaStar, FaCloudUploadAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

export const SidebarList = {
  upperList: [
    {
      id: "mycloud",
      icon: <FaUserLock style={{ height: 20, width: 20 }} />,
      title: "My Cloud",
    },
    {
      id: "sharefile",
      icon: <HiUserGroup style={{ height: 20, width: 20 }} />,
      title: "Shared files",
    },
    {
      id: "favourite",
      icon: <FaStar style={{ height: 20, width: 20 }} />,
      title: "Favorites",
    },
    {
      id: "uploadfile",
      icon: <FaCloudUploadAlt style={{ height: 20, width: 20 }} />,
      title: "Upload files",
    },
  ],
  lowerList: [
    {
      id: "settings",
      icon: <IoSettingsSharp style={{ height: 20, width: 20 }} />,
      title: "Settings",
    },
    {
      id: "logout",
      icon: <MdLogout style={{ height: 20, width: 20 }} />,
      title: "Log out",
    },
  ],
};
