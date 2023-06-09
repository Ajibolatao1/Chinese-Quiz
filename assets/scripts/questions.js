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
      id: crypto.randomUUID(),
      C: "你",
      R: "nǐ",
      E: "you",
    },
    {
      id: crypto.randomUUID(),
      C: "我",
      R: "wǒ",
      E: "I, me",
    },
    {
      id: crypto.randomUUID(),
      C: "他",
      R: "tā",
      E: "he, him",
    },
    {
      id: crypto.randomUUID(),
      C: "她",
      R: "tā",
      E: "she, her",
    },
    {
      id: crypto.randomUUID(),
      C: "是",
      R: "shì",
      E: "to be, is",
    },
    {
      id: crypto.randomUUID(),
      C: "不",
      R: "bù",
      E: "not, no",
    },
    {
      id: crypto.randomUUID(),
      C: "吗",
      R: "ma",
      E: "question particle for yes/no questions",
    },
    {
      id: crypto.randomUUID(),
      C: "好",
      R: "hǎo",
      E: "good, well, fine",
    },
    {
      id: crypto.randomUUID(),
      C: "的",
      R: "de",
      E: "of, ’s (possessive particle), (adjectival suffix)",
    },
    {
      id: crypto.randomUUID(),
      C: "了",
      R: "le",
      E: "(modal particle indicating completed action), to understand, to know",
    },
    {
      id: crypto.randomUUID(),
      C: "在",
      R: "zài",
      E: "at, in, on",
    },
    {
      id: crypto.randomUUID(),
      C: "这",
      R: "zhè",
      E: "this",
    },
    {
      id: crypto.randomUUID(),
      C: "有",
      R: "yǒu",
      E: "to have, there is, there are",
    },
    {
      id: crypto.randomUUID(),
      C: "一",
      R: "yī",
      E: "one, a, an",
    },
    {
      id: crypto.randomUUID(),
      C: "个",
      R: "gè",
      E: "individual, measure word for general use",
    },
    {
      id: crypto.randomUUID(),
      C: "来",
      R: "lái",
      E: "to come",
    },
    {
      id: crypto.randomUUID(),
      C: "也",
      R: "yě",
      E: "also, too",
    },
    {
      id: crypto.randomUUID(),
      C: "就",
      R: "jiù",
      E: "then, precisely, just",
    },
    {
      id: crypto.randomUUID(),
      C: "很",
      R: "hěn",
      E: "very, quite",
    },
    {
      id: crypto.randomUUID(),
      C: "人",
      R: "rén",
      E: "person, people",
    },
    {
      id: crypto.randomUUID(),
      C: "要",
      R: "yào",
      E: "to want, to need, shall, will",
    },
    {
      id: crypto.randomUUID(),
      C: "会",
      R: "huì",
      E: "can, to know how to, be able to",
    },
    {
      id: crypto.randomUUID(),
      C: "去",
      R: "qù",
      E: "to go",
    },
    {
      id: crypto.randomUUID(),
      C: "在",
      R: "zài",
      E: "at, in",
    },
    {
      id: crypto.randomUUID(),
      C: "看",
      R: "kàn",
      E: "to look, to see",
    },
    {
      id: crypto.randomUUID(),
      C: "做",
      R: "zuò",
      E: "to do, to make",
    },
    {
      id: crypto.randomUUID(),
      C: "说",
      R: "shuō",
      E: "to speak, to say",
    },
    {
      id: crypto.randomUUID(),
      C: "得",
      R: "dé",
      E: "(complement particle), to obtain, to get",
    },
    {
      id: crypto.randomUUID(),
      C: "想",
      R: "xiǎng",
      E: "to think, to want, to miss",
    },
    {
      id: crypto.randomUUID(),
      C: "生",
      R: "shēng",
      E: "life, to give birth",
    },
    {
      id: crypto.randomUUID(),
      C: "时",
      R: "shí",
      E: "time, moment",
    },
    {
      id: crypto.randomUUID(),
      C: "多",
      R: "duō",
      E: "many, much, more",
    },
    {
      id: crypto.randomUUID(),
      C: "能",
      R: "néng",
      E: "can, to be able to",
    },
    {
      id: crypto.randomUUID(),
      C: "见",
      R: "jiàn",
      E: "to see, to meet",
    },
    {
      id: crypto.randomUUID(),
      C: "天",
      R: "tiān",
      E: "day, sky",
    },
    {
      id: crypto.randomUUID(),
      C: "两",
      R: "liǎng",
      E: "two",
    },
    {
      id: crypto.randomUUID(),
      C: "百",
      R: "bǎi",
      E: "hundred",
    },
    {
      id: crypto.randomUUID(),
      C: "千",
      R: "qiān",
      E: "thousand",
    },
    {
      id: crypto.randomUUID(),
      C: "万",
      R: "wàn",
      E: "ten thousand",
    },
    {
      id: crypto.randomUUID(),
      C: "中",
      R: "zhōng",
      E: "middle, center",
    },

    // {
    //   id: "crypto.randomUUID()",
    //   C: "",
    //   R: "",
    //   E: "",
    // },
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
      C: "明天见",
      R: "míng tiān jiàn",
      E: "see you tomorrow",
    },
    {
      id: crypto.randomUUID(),
      C: "请进",
      R: "qǐng jìn",
      E: "please come in",
    },
    {
      id: crypto.randomUUID(),
      C: "好久不见",
      R: "hǎo jiǔ bú jiàn",
      E: "long time no see",
    },
    {
      id: crypto.randomUUID(),
      C: "恭喜发财",
      R: "gōng xǐ fā cái",
      E: "congratulations and prosperity",
    },
    {
      id: crypto.randomUUID(),
      C: "祝你生日快乐",
      R: "zhù nǐ shēng rì kuài lè",
      E: "happy birthday to you",
    },
    {
      id: crypto.randomUUID(),
      C: "我很高兴认识你",
      R: "wǒ hěn gāo xìng rèn shí nǐ",
      E: "I'm glad to meet you",
    },
    {
      id: crypto.randomUUID(),
      C: "你吃了吗",
      R: "nǐ chī le ma",
      E: "have you eaten",
    },
    // {
    //   id: crypto.randomUUID(),
    //   C: "",
    //   R: "",
    //   E: "",
    // },
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
  C: "我想要一杯咖啡。",
  R: "wǒ xiǎng yào yī bēi kā fēi.",
  E: "I want a cup of coffee."
},
{
  id: crypto.randomUUID(),
  C: "她正在学习中文。",
  R: "tā zhèng zài xué xí zhōng wén.",
  E: "She is studying Chinese."
},
{
  id: crypto.randomUUID(),
  C: "他非常喜欢看电影。",
  R: "tā fēi cháng xǐ huān kàn diàn yǐng.",
  E: "He really likes watching movies."
},
{
  id: crypto.randomUUID(),
  C: "我们一起去吃饭吧。",
  R: "wǒ men yì qǐ qù chī fàn ba.",
  E: "Let's go eat together."
},
{
  id: crypto.randomUUID(),
  C: "这个问题很难回答。",
  R: "zhè ge wèn tí hěn nán huí dá.",
  E: "This question is difficult to answer."
},
{
  id: crypto.randomUUID(),
  C: "他们已经结婚了。",
  R: "tā men yǐ jīng jié hūn le.",
  E: "They are already married."
},
{
  id: crypto.randomUUID(),
  C: "你的中文很好。",
  R: "nǐ de zhōng wén hěn hǎo.",
  E: "Your Chinese is very good."
},
{
  id: crypto.randomUUID(),
  C: "我每天都喝咖啡。",
  R: "wǒ měi tiān dōu hē kā fēi.",
  E: "I drink coffee every day."
},
{
  id: crypto.randomUUID(),
  C: "这个地方很漂亮。",
  R: "zhè ge dì fang hěn piào liang.",
  E: "This place is very beautiful."
},
{
  id: crypto.randomUUID(),
  C: "他们在一起很开心。",
  R: "tā men zài yì qǐ hěn kāi xīn.",
  E: "They are very happy together."
},
{
  id: crypto.randomUUID(),
  C: "这道菜很好吃。",
  R: "zhè dào cài hěn hǎo chī.",
  E: "This dish is very tasty."
},
{
  id: crypto.randomUUID(),
  C: "我的手机坏了。",
  R: "wǒ de shǒu jī huài le.",
  E: "My phone is broken."
},
{
  id: crypto.randomUUID(),
  C: "我们需要更多的时间。",
  R: "wǒ men xū yào gèng duō de shí jiān.",
  E: "We need more time."
},
    // {
    //   id: crypto.randomUUID(),
    //   C: "",
    //   R: "",
    //   E: "",
    // },
  ],
};

export default questions;
