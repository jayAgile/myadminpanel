import { FaUserLock, FaStar, FaCloudUploadAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { toAbsoluteUrl } from "../utils";
import { svgIcon } from "./svgIcon";

export const SidebarList = {
  upperList: [
    {
      id: "mycloud",
      icon: (
        <FaUserLock style={{ height: 25, width: 25, alignSelf: "center" }} />
      ),
      title: "My Cloud",
    },
    {
      id: "sharefile",
      icon: <HiUserGroup style={{ height: 25, width: 25 }} />,
      title: "Shared files",
    },
    {
      id: "favourite",
      icon: <FaStar style={{ height: 25, width: 25 }} />,
      title: "Favorites",
    },
    {
      id: "uploadfile",
      icon: <FaCloudUploadAlt style={{ height: 25, width: 25 }} />,
      title: "Upload files",
    },
  ],
  lowerList: [
    {
      id: "settings",
      icon: <IoSettingsSharp style={{ height: 25, width: 25 }} />,
      title: "Settings",
    },
    {
      id: "logout",
      icon: <MdLogout style={{ height: 25, width: 25 }} />,
      title: "Log out",
    },
  ],
};

export const categories = [
  {
    id: 1,
    title: "Pictures",
    subtitle: "480 files",
    favorite: true,
  },
  {
    id: 2,
    title: "Documents",
    subtitle: "190 files",
    favorite: false,
  },
  {
    id: 3,
    title: "Videos",
    subtitle: "30 files",
    favorite: false,
  },
  {
    id: 4,
    title: "Audio",
    subtitle: "80 files",
    favorite: false,
  },
];

export const files = [
  {
    id: 1,
    title: "Work",
    img: svgIcon.server,
    subtitle: "480 files",
    favorite: true,
  },
  {
    id: 2,
    title: "Personal",
    img: svgIcon.person,
    subtitle: "190 files",
    favorite: false,
  },
  {
    id: 3,
    title: "School",
    subtitle: "30 files",
    img: svgIcon.edu,
    favorite: false,
  },
  {
    id: 4,
    title: "Archive",
    img: svgIcon.archive,
    subtitle: "80 files",
    favorite: false,
  },
];

export const yourFiles = [
  {
    id: 1,
    title: "Keynote files",
    img: svgIcon.server,
    subtitle: "480 files",
    color: "Archive",
  },
  {
    id: 2,
    title: "Vacation photos",
    img: svgIcon.person,
    subtitle: "190 files",
    color: "School",
  },
  {
    id: 3,
    title: "Project report",
    subtitle: "30 files",
    img: svgIcon.edu,
    color: "Work",
  },
  {
    id: 4,
    title: "Memes",
    img: svgIcon.archive,
    subtitle: "80 files",
    color: "Personal",
  },
];

export const recentFilesArr = [
  {
    id: 1,
    title: "IMG_100000000",
    subtitle: "Png files",
    size: "5 MB",
    colors: "Pictures",
  },
  {
    id: 2,
    title: "Startup pitch",
    subtitle: "AVI files",
    size: "105 MB",
    colors: "Documents",
  },
  {
    id: 3,
    title: "Freestyle beat",
    subtitle: "MP3 files",
    size: "21 MB",
    colors: "Videos",
  },
  {
    id: 4,
    title: "Work proposal",
    subtitle: "DOCx files",
    size: "500 kb",
    colors: "Audio",
  },
];

export const gallary = [
  {
    id: 1,
    title: "IMG_1",
    subtitle: "July 01,2022",
  },
  {
    id: 2,
    title: "IMG_2",
    subtitle: "July 01,2022",
  },
  {
    id: 3,
    title: "IMG_3",
    subtitle: "July 01,2022",
  },
  {
    id: 4,
    title: "IMG_4",
    subtitle: "July 01,2022",
  },
  {
    id: 2,
    title: "IMG_2",
    subtitle: "July 01,2022",
  },
  {
    id: 3,
    title: "IMG_3",
    subtitle: "July 01,2022",
  },
  {
    id: 4,
    title: "IMG_4",
    subtitle: "July 01,2022",
  },
  {
    id: 2,
    title: "IMG_2",
    subtitle: "July 01,2022",
  },
  {
    id: 3,
    title: "IMG_3",
    subtitle: "July 01,2022",
  },
  {
    id: 4,
    title: "IMG_4",
    subtitle: "July 01,2022",
  },
  {
    id: 2,
    title: "IMG_2",
    subtitle: "July 01,2022",
  },
  {
    id: 3,
    title: "IMG_3",
    subtitle: "July 01,2022",
  },
  {
    id: 4,
    title: "IMG_4",
    subtitle: "July 01,2022",
  },
  {
    id: 2,
    title: "IMG_2",
    subtitle: "July 01,2022",
  },
  {
    id: 3,
    title: "IMG_3",
    subtitle: "July 01,2022",
  },
  {
    id: 4,
    title: "IMG_4",
    subtitle: "July 01,2022",
  },
];

export const downloading = [
  {
    id: 1,
    title: "Summer-vibes.mp3",
    icon: svgIcon.close,
    size: "500 kb",
    colors: "Documents",
  },
  {
    id: 2,
    title: "Summer-vibes.mp3",
    icon: svgIcon.correct,
    size: "500 kb",
    colors: "Audio",
  },
];
