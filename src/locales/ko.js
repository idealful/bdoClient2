const ko = {
  lang: {
    en: '영어',
    ko: '한국어',
  },
  country: {
    us: '미국',
    kr: '한국',
  },
  mode: {
    light: 'light',
    dark: 'dark',
    lightTxt: '밝은 모드로 변경',
    darkTxt: '어두운 모드로 변경',
  },
  menu: {
    main: {
      home: { url: '/', name: '홈' },
      menu1: { url: '/menu1', name: '메뉴1' },
      menu2: { url: '/menu2', name: '메뉴2' },
      menu3: { url: '/menu3', name: '메뉴3' },
    },
    user: {
      login: { url: '/login', name: '로그인' },
      join: { url: '/join', name: '회원가입' },
      profile: { url: '/profile', name: '프로파일' },
      setting: { url: '/setting', name: '설정' },
      logout: { url: '/logout', name: '로그아웃' },
    },
  },
  messages: {
    greeting: '환영합니다!',
    sitemap: '메뉴',
    openMenuMain: '메인 메뉴 열기',
    openMenuUser: '사용자 메뉴 열기',
    myProfileImage: '내 프로파일 이미지',
    changeLanguage: '언어 변경',
    socialLogin: '소셜 로그인',
    userEmail: '사용자 이메일',
    userName: '사용자 이름',
    copyright: 'Copyright {now} 이곳의 모든 저작권은 {author}에게 있습니다.',
  },
};

export { ko };
