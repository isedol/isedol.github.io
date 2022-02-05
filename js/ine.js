
// test image for web notifications
var iconImage = null;

AP.init({
    container: '#player',//a string containing one CSS selector
    volume: 0.7,
    autoPlay: false,
    notification: false,
    playList: [
        { 'icon': iconImage, 'title': '겨울왕국', 'file': 'https://docs.google.com/uc?export=open&id=11Tb7Tcawnq03zRWV9323lVv1xcyEfQBs' },
        { 'icon': iconImage, 'title': '내가 죽으려 생각한 것은', 'file': 'https://docs.google.com/uc?export=open&id=1ySzHzoFxpzgAAE2CylPoBWq5hBwz68uX' },
        { 'icon': iconImage, 'title': '라푼젤 - when will my life begin', 'file': 'https://docs.google.com/uc?export=open&id=1ldnhBWqnXreFuzmZqiNNax929cA4s2lp' },
        { 'icon': iconImage, 'title': '러브 크로니클', 'file': 'https://docs.google.com/uc?export=open&id=1kPvik8t9PWnQMkdordR4EdEIKtHHlWvu' },
        { 'icon': iconImage, 'title': '밤편지', 'file': 'https://docs.google.com/uc?export=open&id=1yJ_mtE-UQD1gs8dQMysqDi65qgkx0mmy' },
        { 'icon': iconImage, 'title': '성간비행', 'file': 'https://docs.google.com/uc?export=open&id=1l5o8nG68MhirLnyE0RnsQp-yt_qc0Jgo' },
        { 'icon': iconImage, 'title': '비밀의 정원', 'file': 'https://docs.google.com/uc?export=open&id=1zutmI0jJMpScNzkwQ1jy1pt07kp1a1e5' },
        { 'icon': iconImage, 'title': '이지금', 'file': 'https://docs.google.com/uc?export=open&id=1Ci4bKoHItOdHgNmO5OXEhalc40Fwnj3t' },
        { 'icon': iconImage, 'title': '어푸', 'file': 'https://docs.google.com/uc?export=open&id=1XKQqcdS4Lgr0qkNuLSXUKftjHP7BxVB1' },
        { 'icon': iconImage, 'title': '여우비', 'file': 'https://docs.google.com/uc?export=open&id=12fin9mJTMqSO371g_JmI96qNNMPv73EX' },
        { 'icon': iconImage, 'title': '인어공주 -part of your world', 'file': 'https://docs.google.com/uc?export=open&id=15HswK88l0vt2LLJSGCsmI6lx5HAMkIUs' },
        { 'icon': iconImage, 'title': '일루저니스타', 'file': 'https://docs.google.com/uc?export=open&id=1CcUu5zi4BxtuirW3gd71IUFizOLOv-gp' },
        { 'icon': iconImage, 'title': '화조도', 'file': 'https://docs.google.com/uc?export=open&id=16xAKVNCEwI6N__6casm4binb4MToeYnW' },
        { 'icon': iconImage, 'title': 'Bing Crosby - White chrismas', 'file': 'https://docs.google.com/uc?export=open&id=1_7mNXAqB454Yks6r5Rv3tPZDSZLuzR3s' },
        { 'icon': iconImage, 'title': 'its over isnt it', 'file': 'https://docs.google.com/uc?export=open&id=16IKhnT-9zpolTmuxxjYI109mKg62evEc' },
        { 'icon': iconImage, 'title': 'Popular', 'file': 'https://docs.google.com/uc?export=open&id=1LFj6vxCChlrcSDdHwAP1GkRy5KB8O56x' },
        { 'icon': iconImage, 'title': 'remember me', 'file': 'https://docs.google.com/uc?export=open&id=13v0I2AKHK6X2pZPJWiDmdMhEf_IrHien' },
        { 'icon': iconImage, 'title': 'Sia - snowman', 'file': 'https://docs.google.com/uc?export=open&id=1jtZbnbXLXel6jGAqIhzxRYn4A75nCzaB' },
        { 'icon': iconImage, 'title': '아라리', 'file': 'https://docs.google.com/uc?export=open&id=1BkCJna_Qa492tVZMAPVqg_HyFfBKi_n6' },
        { 'icon': iconImage, 'title': '트와이스 - Fancy', 'file': 'https://docs.google.com/uc?export=open&id=1bRwCsdtW78HGyW-PUlyqvCmxcuWkogC3' },
        { 'icon': iconImage, 'title': 'dont you worry about a thing', 'file': 'https://docs.google.com/uc?export=open&id=1Z8Bk8BmT7DZNfk2OmpBPSnGsUYTeMUFY' },
    ]
});