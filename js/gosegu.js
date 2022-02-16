
// test image for web notifications
var iconImage = null;

AP.init({
    container: '#player',//a string containing one CSS selector
    volume: 0.7,
    autoPlay: false,
    notification: false,
    playList: [
        { 'icon': iconImage, 'title': 'Tangled(라푼젤) - When Will My Life Begin', 'file': 'https://docs.google.com/uc?id=1idhtxCCndNmzQ2O1LtDk1141lyvsmt5N' },
        { 'icon': iconImage, 'title': '오빠야', 'file': 'https://docs.google.com/uc?id=1mT6OSbM7wKfG9A-pWTKdOaujCftsk190' },
        { 'icon': iconImage, 'title': '있잖아', 'file': 'https://docs.google.com/uc?id=18hNVa-kSvzqgTZBKy3c3AxkTtZX3zmDY' },
        { 'icon': iconImage, 'title': '홍련화', 'file': 'https://docs.google.com/uc?id=1FfMaFt0Q-FvFr283VgHIo-6mAIlXQ2_6' },
        { 'icon': iconImage, 'title': 'Eight', 'file': 'https://docs.google.com/uc?id=1sl4bgnb2jMtDu2ZG9YT9p-I6NJz3_Y9W' },
        { 'icon': iconImage, 'title': '소나기', 'file': 'https://docs.google.com/uc?id=1najwYtjxZtRUsaKuco9FIKFm0sxZxpVl' },
        { 'icon': iconImage, 'title': '천양 다이노스', 'file': 'https://docs.google.com/uc?id=1BPbIPypi6_55fFKwx51_a_hvEA9Gv_xg' },
        { 'icon': iconImage, 'title': '프리스타일 랩', 'file': 'https://docs.google.com/uc?id=1WY0gj6dli8KMAhUopOD1kQi3C5AzmH0L' },
        { 'icon': iconImage, 'title': 'rewind', 'file': 'https://docs.google.com/uc?id=17qQWEtKqjx4JOy4TeMZ6RpWzuP0BCRfQ' },
        { 'icon': iconImage, 'title': '1rewind 랩버전', 'file': 'https://docs.google.com/uc?id=1I4wBGocJpQgn5x-GMt52TkO_cKpC88s1' },
        { 'icon': iconImage, 'title': '지구용사 우왁굳', 'file': 'https://docs.google.com/uc?id=10h2EVg8oJmsGv9sR4UwRjnQ-j-RYe85e' },
        { 'icon': iconImage, 'title': '별이 되지 않아도 돼', 'file': 'https://docs.google.com/uc?id=1ChJTf5AHIEUYIyrqO-u-Wf2l-M7cVebW' },
        { 'icon': iconImage, 'title': '학교괴담 ost - Grow u', 'file': 'https://docs.google.com/uc?id=1qNXSePzKHQfAHNp_hO3P0TBle6ew2a0b' },
        { 'icon': iconImage, 'title': 'DECO27 - モザイクロール(모자이크 롤)', 'file': 'https://docs.google.com/uc?id=1_-wUReNmD52_6JVM9W5egyp8Kvijnb8X' },
        { 'icon': iconImage, 'title': 'Always', 'file': 'https://docs.google.com/uc?id=1JIbflqNZ0n1ycdPTl7jImKZR96cc0DUQ' },
        { 'icon': iconImage, 'title': '팬서비스', 'file': 'https://docs.google.com/uc?id=1tPD07gMULTt1UUdmohePhlb9v7Y_V-ZJ' },
        { 'icon': iconImage, 'title': 'Strawberry moon', 'file': 'https://docs.google.com/uc?id=12pOAo0RNa3lnRbAwqp4No3q4JBGwTgRH' },
        { 'icon': iconImage, 'title': '사쿠란보', 'file': 'https://docs.google.com/uc?id=1V4M0Nt-KIkJDq9vE2vZ_CjSHmigqtHbU' },
        { 'icon': iconImage, 'title': '후라이의 꿈', 'file': 'https://docs.google.com/uc?id=15T-jHKckdEaiNzVaqEBSG4TGbgxTKvfU' },
        { 'icon': iconImage, 'title': '마루코는 아홉살ost', 'file': 'https://docs.google.com/uc?id=1-huan02IPkdqWzC6oSOs06ajzoGJRnnH' },
        { 'icon': iconImage, 'title': '솟구치는 투지', 'file': 'https://docs.google.com/uc?id=1veZt-Lo88RsIs1CgZB52Trfvi0q0z-5Q' },
        { 'icon': iconImage, 'title': 'Null', 'file': 'https://docs.google.com/uc?id=15tcd_cTml2herjrm_R91na6zLAEow5d9' },
        { 'icon': iconImage, 'title': '10cm - 사랑은 은하수 다방에서', 'file': 'https://docs.google.com/uc?id=1XVGyi_cfO5uiprAVMOiFQt5PCRY1X2Ep' },
        { 'icon': iconImage, 'title': '10cm - 폰서트', 'file': 'https://docs.google.com/uc?id=1aXcXh7QkxvpZX4-Lf3O8wo3rxZyoBlnc' },
        { 'icon': iconImage, 'title': '고세구 - 출근송', 'file': 'https://docs.google.com/uc?id=1kIKCQr951U09eLzWRmrDDB-fceyOCUVA' },
        { 'icon': iconImage, 'title': '넬 - 기억을 걷는 시간', 'file': 'https://docs.google.com/uc?id=1m6KIwwG7Xq6X9yRz5dfw7pj-pl4wWGVY' },
        { 'icon': iconImage, 'title': '백예린 - 이럴거면 그러지 말지', 'file': 'https://docs.google.com/uc?id=1dwtnDzEfnj17WlPYDHKFnQXZp2C7qYvD' },
        { 'icon': iconImage, 'title': '볼빨간사춘기 - 별 보러 갈래', 'file': 'https://docs.google.com/uc?id=1cV2s4dL9G9nplHdqWSFQ2MZYVHo9cUM3' },
        { 'icon': iconImage, 'title': '볼빨간사춘기 - 우주를 줄게', 'file': 'https://docs.google.com/uc?id=1PrUJFWhTVpUTwyTu1e3hiS-AYswcpdA8' },
        { 'icon': iconImage, 'title': '선우정아 - 고양이', 'file': 'https://docs.google.com/uc?id=1CVdK-c9TVLlg7n2YjaZJ1e12qi1M5824' },
        { 'icon': iconImage, 'title': '아이유 - 가을아침', 'file': 'https://docs.google.com/uc?id=1ouvzFcB72D-YTXxozWk_nEtnuIVwUfxt' },
        { 'icon': iconImage, 'title': '아이유 - 이지금', 'file': 'https://docs.google.com/uc?id=1spoenp2rCId9uyYEkY1LMq-N1FPIdrGp' },
        { 'icon': iconImage, 'title': '아이유 - Coin', 'file': 'https://docs.google.com/uc?id=1QZi6GNibLHlbaOrUqSghHzMDbUPeBwA7' },
        { 'icon': iconImage, 'title': '아이유 - Rain Dro', 'file': 'https://docs.google.com/uc?id=1nRNWheZSh4h2zfmS1yCgqAaTm1gpHYzh' },
        { 'icon': iconImage, 'title': '악동뮤지션 - 낙하', 'file': 'https://docs.google.com/uc?id=1ft4lcWD3Ggf_DUidd-n5npd5sc6OrBpA' },
        { 'icon': iconImage, 'title': '악동뮤지션 - 시간과 낙엽', 'file': 'https://docs.google.com/uc?id=1te56CVfbln4NP-AR35Ky7NNaHzBvQ_jf' },
        { 'icon': iconImage, 'title': '악동뮤지션 - 이떻게 이별까지 사랑하겠어, 널 사랑하는 거지', 'file': 'https://docs.google.com/uc?id=18Inoi462nfc6F46Tp4lvQqd4oJMpe-DE' },
        { 'icon': iconImage, 'title': '악동뮤지션 - Dinosaur', 'file': 'https://docs.google.com/uc?id=1Nmg9lLKRMHqBGktsaZlzpy9dFO2ypKnR' },
        { 'icon': iconImage, 'title': '에디 킴 - 너 사용법', 'file': 'https://docs.google.com/uc?id=1oe2MpBLOFoABr4C-vKsb31xkJiMkZOst' },
        { 'icon': iconImage, 'title': '이세계아이돌 - Re wind', 'file': 'https://docs.google.com/uc?id=1c9ssxz_ykFO1Cr3hSOnN-WdAhToHaU0y' },
        { 'icon': iconImage, 'title': '코키아 - 부엉이', 'file': 'https://docs.google.com/uc?id=1ASQVMJE767jy75l9at6I391iSmzDrQbu' },
        { 'icon': iconImage, 'title': 'Calry Rae Jepsen - Call me maybe', 'file': 'https://docs.google.com/uc?id=1ScSVfG_ZmDIWYhFtC8lk8H-IwV8sLopC' },
        { 'icon': iconImage, 'title': 'DAOKO x 요네즈 켄시 - 타상연화', 'file': 'https://docs.google.com/uc?id=110wyLaxDRqoE_twhNUsr6QM3fDHqVHDx' },
        { 'icon': iconImage, 'title': 'Hatsune Miku - 심해소녀', 'file': 'https://docs.google.com/uc?id=14VxdR0uRrepPN3EhgYypyZ_br9mf363K' },
        { 'icon': iconImage, 'title': 'Hatsune Miku - Calc', 'file': 'https://docs.google.com/uc?id=1ekuJKh5P8uZgUHavqOxRrqH54to54M57' },
        { 'icon': iconImage, 'title': 'It_s Beginning to Look a Lot Like Christmas', 'file': 'https://docs.google.com/uc?id=1cA5DrjFgyzEzmfMTb5iAjIO0HnOfXG49' },
        { 'icon': iconImage, 'title': 'sasakure.UK - Little Cry of The Abyss feat. Asako Toki', 'file': 'https://docs.google.com/uc?id=1XwkkKG_RXXxjTItjKoxJwvWIBLz06xfe' },
        { 'icon': iconImage, 'title': 'Sia - Chandelier', 'file': 'https://docs.google.com/uc?id=1DcChMfPGWF_WBW8i3bkaEebAcKD_3mtL' },
        { 'icon': iconImage, 'title': 'The Chainsmokers - Closer', 'file': 'https://docs.google.com/uc?id=1-tbGhcmtNiKKljv835rZv_89OpkRmKHS' },
        { 'icon': iconImage, 'title': 'Aimo (마크로스 프론티어 OST)', 'file': 'https://docs.google.com/uc?id=19ZmEaD_8kM5m8bJRwhgO-A_TVZQxF2GM' },
        { 'icon': iconImage, 'title': '김하온 - 붕붕', 'file': 'https://docs.google.com/uc?id=1E9jDZGZcNk1gj0m_coSsdWTvm6FYVbQP' },
        { 'icon': iconImage, 'title': '나 언젠간 떠날거야 (모아나 OST)', 'file': 'https://docs.google.com/uc?id=1IfA6OPPUn9rcnbcUzGDRlTsmcgcoRXF2' },
        { 'icon': iconImage, 'title': '내 손을 잡아 - 아이유', 'file': 'https://docs.google.com/uc?id=1cTVZXLFyoN13FR-M--o4govzBAB9neH_' },
        { 'icon': iconImage, 'title': '데이먼스 이어 - Auburn', 'file': 'https://docs.google.com/uc?id=1Jl7u42SxhD3vTujU1SDSSnWULzzm4_QO' },
        { 'icon': iconImage, 'title': '땡벌 - 강진', 'file': 'https://docs.google.com/uc?id=177pdlixbJwYab3qKnsgBrg6pigFYOdIy' },
        { 'icon': iconImage, 'title': '띵 (Prod.By 기리보이) - Jvcki Wai, 영비, Osshun Gum, 한요한', 'file': 'https://docs.google.com/uc?id=1a-jU1V63I_Czjf9cz2vqUtmFlZE_KBK2' },
        { 'icon': iconImage, 'title': '루카루카 나이트피버', 'file': 'https://docs.google.com/uc?id=1Kw3oZarbx9skX8MfLGZfHXHswNX5MLwS' },
        { 'icon': iconImage, 'title': '별이 되지 않아도 돼 - 109', 'file': 'https://docs.google.com/uc?id=1x3VtZktToD4gn1kSIBy_NcXIZUQP0M5W' },
        { 'icon': iconImage, 'title': '볼빨간사춘기 - 나의 사춘기에게', 'file': 'https://docs.google.com/uc?id=1zwwpanw5gVusKmU3vq5bc7Las2T0ZbHs' },
        { 'icon': iconImage, 'title': '볼빨간사춘기 - 워커홀릭', 'file': 'https://docs.google.com/uc?id=1KDC2pSbm0xMtafuRmjsi7b4NwuGNegnF' },
        { 'icon': iconImage, 'title': '부엉이 - 코키아', 'file': 'https://docs.google.com/uc?id=1p_L_mKQdZceDmJVMRorXEMsxFUjxVdKD' },
        { 'icon': iconImage, 'title': '아모르파티 - 김연자', 'file': 'https://docs.google.com/uc?id=1qHBwDg4fN2mHuI-UnufvVcNe1-2QRVcJ' },
        { 'icon': iconImage, 'title': '에잇 - 아이유', 'file': 'https://docs.google.com/uc?id=164uaR3caPko99sUKxcOOd6D9z6B4CsmJ' },
        { 'icon': iconImage, 'title': '연애서큘레이션 (바케모노가타리 OP)', 'file': 'https://docs.google.com/uc?id=1_Ctb8_6disJ4DPuuOc7P5zY751tJ_N3i' },
        { 'icon': iconImage, 'title': '혜성 - 윤하', 'file': 'https://docs.google.com/uc?id=1uQyrdXQrWeUbuuj7aCIiRIqstx_tgZEp' },
        { 'icon': iconImage, 'title': '호랑수월가 (나와 호랑이님 OST)', 'file': 'https://docs.google.com/uc?id=18yw8Ix9Fx7vZ1XXXZbmQcc6Iw-0hEo_w' },
        { 'icon': iconImage, 'title': '호랑풍류가 (나와 호랑이님 OST)', 'file': 'https://docs.google.com/uc?id=1BCC8Ihf27PmWJKUicDifBX02IPTH1Urw' },
        { 'icon': iconImage, 'title': '황금별', 'file': 'https://docs.google.com/uc?id=13GNYLHlluTjvLA9QX7qGO4D6PCr9m7wg' },
        { 'icon': iconImage, 'title': 'ASAP - STAYC(스테이씨)', 'file': 'https://docs.google.com/uc?id=1sCTU4KWAF51UkPdh2y4ceM15ui71dI9C' },
        { 'icon': iconImage, 'title': 'Celebirty - 아이유', 'file': 'https://docs.google.com/uc?id=1gLSXirY3wPsAA-cN0AL2T3yDSu9kbLpk' },
        { 'icon': iconImage, 'title': 'For the First Time in Forever (겨울왕국 OST)', 'file': 'https://docs.google.com/uc?id=10sxgi2fryIJE8fv3tUpDbEN40zsPS8Ef' },
        { 'icon': iconImage, 'title': 'Into the Unknown (겨울왕국2 OST)', 'file': 'https://docs.google.com/uc?id=1HOUwBnncEAyvMl-MO7FuHE19l4jGO4bM' },
        { 'icon': iconImage, 'title': 'IVE (아이브) - Eleven (일레븐)', 'file': 'https://docs.google.com/uc?id=1IAAkVQX-0BK5AiZZIamPJOpxPryNfszd' },
        { 'icon': iconImage, 'title': 'Lonely - 볼빨간사춘기', 'file': 'https://docs.google.com/uc?id=1SwtNkR3T_iKILP-qm791zISwt0DPQC8-' },
        { 'icon': iconImage, 'title': 'Love Is An Open Door (겨울왕국 OST)', 'file': 'https://docs.google.com/uc?id=1G0uhkhVUSY9VgjPdDvZ6S9FlJHXRev1E' },
        { 'icon': iconImage, 'title': 'Never enough (위대한 쇼맨 OST)', 'file': 'https://docs.google.com/uc?id=1ZkYGdXZiDxQZHbt27uqkziUUDySFZYJ7' },
        { 'icon': iconImage, 'title': 'Strawberry Moon - 아이유', 'file': 'https://docs.google.com/uc?id=1374_j5ENlcdrHd_uGIJXUDj9dy6cm54V' },
        { 'icon': iconImage, 'title': 'Unravel (도쿄구울 OP)', 'file': 'https://docs.google.com/uc?id=1xHJtnuHtXP1y0hYVsJXNcjcQsGl5W7Bh' },
        { 'icon': iconImage, 'title': 'VVS - 미란이,쿤디판다,먼치맨,머쉬베놈', 'file': 'https://docs.google.com/uc?id=1iwtE5p5qZRZ0NCGAv_xIwFNKBB3egLnE' },
        { 'icon': iconImage, 'title': 'When Will My Life Begin (라푼젤  OST)', 'file': 'https://docs.google.com/uc?id=1vqtH1JyZe_JISctCbTyvH2H0IaYg3r3p' },
        { 'icon': iconImage, 'title': 'You(=I) - 볼빨간사춘기', 'file': 'https://docs.google.com/uc?id=166bDnLLkSxdduuInFQkQmGyuv765ICDu' },                
        
    ]
});