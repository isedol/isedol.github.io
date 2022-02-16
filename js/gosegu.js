
// test image for web notifications
var iconImage = null;

AP.init({
    container: '#player',//a string containing one CSS selector
    volume: 0.7,
    autoPlay: false,
    notification: false,
    playList: [
        {'icon': iconImage, 'title': '10cm - 사랑은 은하수 다방에서', 'file': 'https://docs.google.com/uc?id=1Rhx3mYVbGYfVJMcTAwOX7OKpQF0z8gak' },
        {'icon': iconImage, 'title': '10cm - 폰서트', 'file': 'https://docs.google.com/uc?id=1LHsq5jBEny2W7j5YZqsXZU8IcP4j0rbk' },
        {'icon': iconImage, 'title': '고세구 - 출근송', 'file': 'https://docs.google.com/uc?id=1Ue4t9eOMZKr2OfP3Bn0AzwNHuYs569AR' },
        {'icon': iconImage, 'title': '넬 - 기억을 걷는 시간', 'file': 'https://docs.google.com/uc?id=1gLUwrU0aJCbU6_j7Jw9Bl9kPdYj0fzp_' },
        {'icon': iconImage, 'title': '백예린 - 이럴거면 그러지 말지', 'file': 'https://docs.google.com/uc?id=1hv-NhIwWIRSFjz2mG93VmRHcnEhXRKSa' },
        {'icon': iconImage, 'title': '볼빨간사춘기 - 별 보러 갈래', 'file': 'https://docs.google.com/uc?id=162WriMEP0oo2IqhB4MX6BS6lwI05M9N4' },
        {'icon': iconImage, 'title': '볼빨간사춘기 - 우주를 줄게', 'file': 'https://docs.google.com/uc?id=1CtUC-toL4RQPiUUuom-O-jZfrijc3Akr' },
        {'icon': iconImage, 'title': '선우정아 - 고양이', 'file': 'https://docs.google.com/uc?id=1Wi-byZvGS7Tz-3-DUTWTvkXPIt8P2JLW' },
        {'icon': iconImage, 'title': '아이유 - 가을아침', 'file': 'https://docs.google.com/uc?id=1hHzJOy1pJR75cxss_8n9ticpGD_jo2cM' },
        {'icon': iconImage, 'title': '아이유 - 이지금', 'file': 'https://docs.google.com/uc?id=158TBOpMaqLRt_rG6TtVLvZP0SXz6dkXP' },
        {'icon': iconImage, 'title': '아이유 - Coin', 'file': 'https://docs.google.com/uc?id=1x1aBZD0LE_KfLbNbn4OeGiGCHjsfY0mX' },
        {'icon': iconImage, 'title': '아이유 - Rain Dro', 'file': 'https://docs.google.com/uc?id=1GVq0Ydo4ZcD3PYwYU7jxva2gZDtki3ec' },
        {'icon': iconImage, 'title': '악동뮤지션 - 낙하', 'file': 'https://docs.google.com/uc?id=1oKmLNC8w7bzmPiswevT3nyq0w6W9Awv4' },
        {'icon': iconImage, 'title': '악동뮤지션 - 시간과 낙엽', 'file': 'https://docs.google.com/uc?id=1DdM-g9YRzGdKnFxNgBc6qFLw2uuLkewS' },
        {'icon': iconImage, 'title': '악동뮤지션 - 이떻게 이별까지 사랑하겠어, 널 사랑하는 거지', 'file': 'https://docs.google.com/uc?id=1TlUr6ag40kJnljtE1ZNonHYA_X_wkiZs' },
        {'icon': iconImage, 'title': '악동뮤지션 - Dinosaur', 'file': 'https://docs.google.com/uc?id=1cyozCPpw6XBvfI7JI7U7q3vJUEG48Et4' },
        {'icon': iconImage, 'title': '에디 킴 - 너 사용법', 'file': 'https://docs.google.com/uc?id=1gsBdrJbzLSByBpPNAhQ9ec3PNYFEGfHf' },
        {'icon': iconImage, 'title': '이세계아이돌 - Re wind', 'file': 'https://docs.google.com/uc?id=1qE5-AINvm4B6xTWPVAon61_pqhDeaTbQ' },
        {'icon': iconImage, 'title': '코키아 - 부엉이', 'file': 'https://docs.google.com/uc?id=10hLEex4mXBlEnmfXbI8tGNjzn44MOwfu' },
        {'icon': iconImage, 'title': 'Calry Rae Jepsen - Call me maybe', 'file': 'https://docs.google.com/uc?id=1Db8TT4sY9JKyCgqKXaahIggBhPms1P7k' },
        {'icon': iconImage, 'title': 'DAOKO x 요네즈 켄시 - 타상연화', 'file': 'https://docs.google.com/uc?id=1TJXF2CThog_Xk-bp_VB_15LVXEwQQK1x' },
        {'icon': iconImage, 'title': 'Hatsune Miku - 심해소녀', 'file': 'https://docs.google.com/uc?id=1ZgGb7RkBHbe9Ce6_tseZeVI749Oj0j3C' },
        {'icon': iconImage, 'title': 'Hatsune Miku - Calc', 'file': 'https://docs.google.com/uc?id=1l7aqGS2gVWUGKiIJcgMjS1cvB0lo2r-B' },
        {'icon': iconImage, 'title': 'It_s Beginning to Look a Lot Like Christmas', 'file': 'https://docs.google.com/uc?id=1JC4rzB5A7aJtfU4LzfFDtn5TFxls-EFo' },
        {'icon': iconImage, 'title': 'sasakure.UK - Little Cry of The Abyss feat. Asako Toki', 'file': 'https://docs.google.com/uc?id=1oG5KbtBYQu8TeqZKfHZsGysKg9YNUYIF' },
        {'icon': iconImage, 'title': 'Sia - Chandelier', 'file': 'https://docs.google.com/uc?id=10JUp8p8941bl_efgGMDRPmMXVT0yflQT' },
        {'icon': iconImage, 'title': 'The Chainsmokers - Closer', 'file': 'https://docs.google.com/uc?id=1FNV-OWCCw9hNaQ2XbZiYAw3c7Ovbntas' },
        
    ]
});