import MyNavMenuSection from "./MyNavMenuSection.js";

const myNavs= [
  { title: '마이리디 홈', icon: 'home' }, 
  { title: '책', subTitle: ['최근 조회한 작품'], icon: 'book-open', href: ['/recents'] },
  { title: '구매/혜택', subTitle: ['결제 내역', '리디캐시'], icon: 'credit-card', href: ['/payment', '/myridicash'] }, 
  { title: '개인', subTitle: ['1:1 문의', '정보 변경'], icon: 'user', href: ['/1on1inquiry', 'changeinfo'] }
];

const MyLeftMenu = () => `
  <h3 class="my__left__menu__title">마이리디</h3>
  <nav class="my__nav__menu">
    ${myNavs.map((nav, i) => MyNavMenuSection(nav, i)).join('')}
  </nav>
`;

export default MyLeftMenu;