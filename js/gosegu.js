
// test image for web notifications
var iconImage = null;

AP.init({
    container: '#player',//a string containing one CSS selector
    volume: 0.7,
    autoPlay: false,
    notification: false,
    playList: [
        { 'icon': iconImage, 'title': '10cm - 사랑은 은하수 다방에서', 'file': 'https://docs.google.com/uc?export=open&id=169y-7jBhiPxgpEWg6tY3OAAa7Oo6IrDB' },
        { 'icon': iconImage, 'title': '10cm - 폰서트', 'file': 'https://docs.google.com/uc?export=open&id=1Nva5xZnqevtUJuep7v2hszYk3AZKziEM' },
        { 'icon': iconImage, 'title': '출근송', 'file': 'https://docs.google.com/uc?export=open&id=15nAw_VWHegObNhp1m7yq7YUkeJJhDJ4K' },
        { 'icon': iconImage, 'title': '넬 - 기억을 걷는시간', 'file': 'https://docs.google.com/uc?export=open&id=1_ziWoG0DeDsRlyDe07HUPzHA6fyv83ML' },
        { 'icon': iconImage, 'title': '백예린 - 이럴거면 그러지 말지', 'file': 'https://docs.google.com/uc?export=open&id=12TVzzXemHvLz6UX5YwPvbI1hBMoLesb6' },
        { 'icon': iconImage, 'title': '볼빨간사춘기 - 별 보러 갈래', 'file': 'https://docs.google.com/uc?export=open&id=1yyZqKLWTjyGnne9B47AwSK5aeCUaC7xC' },
        { 'icon': iconImage, 'title': '볼빨간사춘기 - 우주를 줄게', 'file': 'https://docs.google.com/uc?export=open&id=1NEpslRCERg59X4jtHOPjsyx1yaF-w8yu' },
        { 'icon': iconImage, 'title': '선우정아 - 고양이', 'file': 'https://docs.google.com/uc?export=open&id=1N_f8KnfVssWdBsBQOLuqjsbwbNZZeZXw' },
        { 'icon': iconImage, 'title': '아이유 - 가을아침', 'file': 'https://docs.google.com/uc?export=open&id=1V1JHZsKGn8wNdFtaPtW2isSlGZcRNrJA' },
        { 'icon': iconImage, 'title': '아이유 - 이지금', 'file': 'https://docs.google.com/uc?export=open&id=1Io-WerXfVw-ycu_-LAj9lgLQQqColuSo' },
        { 'icon': iconImage, 'title': '아이유 - Coin', 'file': 'https://docs.google.com/uc?export=open&id=1o6KeQfpieJW3Ewpig5PB3MFZdO6XywtD' },
        { 'icon': iconImage, 'title': '아이유 - Rain Drop', 'file': 'https://docs.google.com/uc?export=open&id=1RmonhSC7PVSNOXWtVGO2fm7Z_b9yLZur' },
        { 'icon': iconImage, 'title': '악동뮤지션 - 낙하', 'file': 'https://docs.google.com/uc?export=open&id=1fEuhx49F0ukDiMmW8h4RUbG5KFGhACQE' },
        { 'icon': iconImage, 'title': '악동뮤지션 - 시간과 낙엽', 'file': 'https://docs.google.com/uc?export=open&id=1wvZQAHU8Z4ileuCebzwpZmrzs4kcs490' },
        { 'icon': iconImage, 'title': '악동뮤지션 - 어떻게 이별까지 사랑하겠어', 'file': 'https://docs.google.com/uc?export=open&id=1gQCUSmQTnb1mHcJPHm6Mti1gn8M4LQl5' },
        { 'icon': iconImage, 'title': '악동뮤지션 - Dinosaur', 'file': 'https://docs.google.com/uc?export=open&id=1keUeLERDvvLklQjOBTUlLwMG217s5gZp' },
        { 'icon': iconImage, 'title': '에디 킴 - 너사용법', 'file': 'https://docs.google.com/uc?export=open&id=1Oor1Nt09bGA1fZJ1F9P3Y9MFDF2lH5Ki' },
        { 'icon': iconImage, 'title': '이세계아이돌 - Rewind', 'file': 'https://docs.google.com/uc?export=open&id=18hR3S5Dsds35qFmTuwCIj_XZTYVdhA81' },
        { 'icon': iconImage, 'title': '코키아 - 부엉이', 'file': 'https://docs.google.com/uc?export=open&id=1gEPMNqOpVxpHjvMKNz8nUh9m1HBdao5J' },
        { 'icon': iconImage, 'title': 'Call me maybe', 'file': 'https://docs.google.com/uc?export=open&id=1zJoB1qG4Dp0M710QZR_KGvuy5CATMceW' },
        { 'icon': iconImage, 'title': '타상연화', 'file': 'https://docs.google.com/uc?export=open&id=1UWXI_T1ajXUNsGEiQ7r8z6D_kPTE255e' },
        { 'icon': iconImage, 'title': '하츠네미쿠 - 심해소녀', 'file': 'https://docs.google.com/uc?export=open&id=1p8-aLF_OPUUCEvuhcR-YkGEhOiYlbQbY' },
        { 'icon': iconImage, 'title': '하츠네미쿠 - Calc', 'file': 'https://docs.google.com/uc?export=open&id=1RNiQAXPNrPOfD4S3ItAXfjGaBqvFncW2' },
        { 'icon': iconImage, 'title': 'Beginning to look a lot like Christmas', 'file': 'https://docs.google.com/uc?export=open&id=1x5b1m5O-_-Mid4g210T_O2VKJNMk0oLM' },
        { 'icon': iconImage, 'title': 'Little Cry of the Abyss', 'file': 'https://docs.google.com/uc?export=open&id=1pjcNGYGSQ1xxhqZuAvWbyPdzOxUB9eNK' },
        { 'icon': iconImage, 'title': 'Sia - Chandelier', 'file': 'https://docs.google.com/uc?export=open&id=1gECOEPNViUvnui_dpAhQIKzflIAPQysO' },
        { 'icon': iconImage, 'title': 'The Chainsmokers - Closer', 'file': 'https://docs.google.com/uc?export=open&id=1VxKhVpLaKcMgeCw_QyaBx3ZAcHoX-ntz' },
    ]
});