import { faAddressBook, faBriefcase, faCircleInfo, faHotel, faHouseUser, faImage } from '@fortawesome/free-solid-svg-icons';

export const MenuItems = [
  {
    title: 'Home',
    url: '#home',
    cName: 'nav-links',
    icon: faHouseUser,
  },
  {
    title: 'About',
    url: '#about',
    cName: 'nav-links',
    icon: faCircleInfo,
  },
  {
    title: 'Services',
    url: '#services',
    cName: 'nav-links',
    icon: faBriefcase,
  },
  {
    title: 'Rooms',
    url: '#rooms',
    cName: 'nav-links',
    icon: faHotel,
  },
  {
    title: 'Gallery',
    url: '#gallery',
    cName: 'nav-links',
    icon: faImage,
  },
  {
    title: 'Contact',
    url: '#contact',
    cName: 'nav-links',
    icon: faAddressBook,
  },
];
