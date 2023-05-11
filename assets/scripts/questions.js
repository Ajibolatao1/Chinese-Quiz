const questions = {
  letters: [
    {
      id: crypto.randomUUID(),
      C: "我",
      R: "wǒ",
      E: "I",
    },
    {
      id: "crypto.randomUUID()",
      C: "好",
      R: "hǎo",
      E: "good, well, ok",
    },
    {
      id: "crypto.randomUUID()",
      C: "你",
      R: "nǐ",
      E: "you",
    },
    {
      id: "crypto.randomUUID()",
      C: "您",
      R: "nín",
      E: "you (respectful form)",
    },
    {
      id: "crypto.randomUUID()",
      C: "他",
      R: "tā",
      E: "he, him",
    },
    {
      id: "crypto.randomUUID()",
      C: "她",
      R: "tā",
      E: "she, her",
    },
    {
      id: "crypto.randomUUID()",
      C: "们",
      R: "men",
      E: "(used after a personal pronoun or a noun to show a plural number)",
    },
    {
      id: "crypto.randomUUID()",
      C: "爱",
      R: "ài",
      E: "love",
    },
    {
      id: "crypto.randomUUID()",
      C: "不",
      R: "bù",
      E: "no,not",
    },
    {
      id: "crypto.randomUUID()",
      C: "零",
      R: "líng",
      E: "0",
    },
    {
      id: "crypto.randomUUID()",
      C: "一",
      R: "yī",
      E: "1",
    },
    {
      id: "crypto.randomUUID()",
      C: "二",
      R: "èr",
      E: "2",
    },
    {
      id: "crypto.randomUUID()",
      C: "三",
      R: "sān",
      E: "3",
    },
    {
      id: "crypto.randomUUID()",
      C: "四",
      R: "sì",
      E: "4",
    },
    {
      id: "crypto.randomUUID()",
      C: "五",
      R: "wǔ",
      E: "5",
    },
    {
      id: "crypto.randomUUID()",
      C: "六",
      R: "liù",
      E: "6",
    },
    {
      id: "crypto.randomUUID()",
      C: "七",
      R: "qī",
      E: "7",
    },
    {
      id: "crypto.randomUUID()",
      C: "八",
      R: "bā",
      E: "8",
    },
    {
      id: "crypto.randomUUID()",
      C: "九",
      R: "jiǔ",
      E: "9",
    },
    {
      id: "crypto.randomUUID()",
      C: "十",
      R: "shí",
      E: "10",
    },
    {
      id: "crypto.randomUUID()",
      C: "十二",
      R: "shí èr",
      E: "12",
    },
    {
      id: "crypto.randomUUID()",
      C: "二十",
      R: "èr shí",
      E: "20",
    },
    {
      id: "crypto.randomUUID()",
      C: "一百",
      R: "yì bǎi",
      E: "100",
    },
    {
      id: "crypto.randomUUID()",
      C: "月",
      R: "yuè",
      E: "month",
    },
    {
      id: "crypto.randomUUID()",
      C: "March",
      R: "sān yuè",
      E: "March",
    },
    {
      id: "crypto.randomUUID()",
      C: "的",
      R: "de",
      E: "of",
    },
    {
      id: "crypto.randomUUID()",
      C: "是",
      R: "shì",
      E: "is,am,are",
    },
    {
      id: "crypto.randomUUID()",
      C: "",
      R: "",
      E: "",
    },
  ],
  words: [
    {
      id: crypto.randomUUID(),
      C: "我们",
      R: "wǒ men",
      E: "we, us",
    },
    {
      id: crypto.randomUUID(),
      C: "你们",
      R: "nǐ men",
      E: "you",
    },
    {
      id: crypto.randomUUID(),
      C: "他们 / 她们",
      R: "tā men",
      E: "they",
    },
    {
      id: crypto.randomUUID(),
      C: "爸爸",
      R: "bà bɑ",
      E: "father, dad",
    },
    {
      id: crypto.randomUUID(),
      C: "妈妈",
      R: "mā mɑ",
      E: "mother, mum",
    },
    {
      id: crypto.randomUUID(),
      C: "哥哥",
      R: "gē ge",
      E: "elder brother",
    },
    {
      id: crypto.randomUUID(),
      C: "姐姐",
      R: "jiě jie",
      E: "elder sister",
    },
    {
      id: crypto.randomUUID(),
      C: "弟弟",
      R: "dì di",
      E: "younger brother",
    },
    {
      id: crypto.randomUUID(),
      C: "妹妹",
      R: "mèi mei",
      E: "younger sister",
    },
    {
      id: crypto.randomUUID(),
      C: "你好",
      R: "nǐ hǎo",
      E: "Hello",
    },
    {
      id: crypto.randomUUID(),
      C: "您好",
      R: "nín hǎo",
      E: "Hello! (respectful form)",
    },
    {
      id: crypto.randomUUID(),
      C: "你们好",
      R: "nǐ men hǎo",
      E: "Hello! (you - plural form)",
    },
    {
      id: crypto.randomUUID(),
      C: "老师",
      R: "lǎo shī",
      E: "teacher",
    },
    {
      id: crypto.randomUUID(),
      C: "老师好",
      R: "lǎo shī hǎo",
      E: "Hello，teacher !",
    },
    {
      id: crypto.randomUUID(),
      C: "再见",
      R: "zài jiàn",
      E: "good-bye",
    },
    {
      id: crypto.randomUUID(),
      C: "谢谢",
      R: "xiè xie",
      E: "Thank you!",
    },
    {
      id: crypto.randomUUID(),
      C: "不客气",
      R: "bú kè qi",
      E: "You’re welcome!",
    },
    {
      id: crypto.randomUUID(),
      C: "对不起",
      R: "duì bu qǐ",
      E: "Sorry!",
    },
    {
      id: crypto.randomUUID(),
      C: "没关系",
      R: "méi guān xi",
      E: "It doesn't matter!",
    },
    {
      id: crypto.randomUUID(),
      C: "早上",
      R: "zǎo shɑng",
      E: "morning",
    },
    {
      id: crypto.randomUUID(),
      C: "中午",
      R: "zhōng wǔ",
      E: "noon",
    },
    {
      id: crypto.randomUUID(),
      C: "下午",
      R: "xià wǔ",
      E: "afernoon",
    },
    {
      id: crypto.randomUUID(),
      C: "晚上",
      R: "wǎn shɑng",
      E: "evening",
    },
    {
      id: crypto.randomUUID(),
      C: "今天",
      R: "jīn tiān",
      E: "today",
    },
    {
      id: crypto.randomUUID(),
      C: "明天",
      R: "míng tiān",
      E: "tomorrow",
    },
    {
      id: crypto.randomUUID(),
      C: "日 / 号",
      R: "rì / hào",
      E: "date，day",
    },
    {
      id: crypto.randomUUID(),
      C: "几",
      R: "jǐ",
      E: "how many",
    },
    {
      id: crypto.randomUUID(),
      C: "星期",
      R: "xīng qī",
      E: "week",
    },
    {
      id: crypto.randomUUID(),
      C: "星期一",
      R: "xīng qī yī",
      E: "Monday",
    },
    {
      id: crypto.randomUUID(),
      C: "星期日",
      R: "xīng qī rì",
      E: "Sunday",
    },
    {
      id: crypto.randomUUID(),
      C: "生日",
      R: "shēng rì",
      E: "birthday",
    },
    {
      id: crypto.randomUUID(),
      C: "",
      R: "",
      E: "",
    },
  ],
  sentences: [
    {
      id: crypto.randomUUID(),
      C: "你的手机号码是多少？",
      R: "Nǐ de shǒujī hàomǎ shì duōshao?",
      E: "What is your mobile phone number?",
    },
    {
      id: crypto.randomUUID(),
      C: "今天几月几号？",
      R: "Jīn tiān jǐ yuè jǐ hào",
      E: "What's the date today?",
    },
    {
      id: crypto.randomUUID(),
      C: "今天星期几？",
      R: "Jīn tiān xīng qī jǐ",
      E: "What day is it today? ",
    },
    {
      id: crypto.randomUUID(),
      C: "你的生日是几月几号？",
      R: "nǐ de shēng rì shì jǐ yuè jǐ hào",
      E: "What's your birthday? ",
    },
    {
      id: crypto.randomUUID(),
      C: "祝你生日快乐！",
      R: "Zhù nǐ shēngrì kuàilè!",
      E: "Happy Birthday to you!",
    },
    {
      id: crypto.randomUUID(),
      C: "",
      R: "",
      E: "",
    },
  ],
};

export default questions;
