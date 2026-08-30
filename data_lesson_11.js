/**
 * 标准化数据字典 (Schema V2.0 瘦身版)
 * 对应课程：HSK4 第11课
 * 规范：顶层 Key 绝对不可删除；所有题目必须带全局唯一 ID。
 */
window.HSK_DATA = {
    // 1. 课程基础信息
    lessonInfo: {
        id: "hsk4_lesson_11",
        level: "HSK 4",
        title: "第 11 课：《读书好，读好书，好读书》"
    },
    
    // 虚拟班级学生名单 (可空，绝不删除 Key)
    students: ["马克", "大卫", "小夏", "小雨", "小林", "小李", "安娜", "玛丽"],

    // 2. 学 (Learn)
    learn: {
        slidesUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ.../embed?start=false&loop=false&delayms=3000"
    },

    // 3. 练 (Practice) - 题型数组
    practice: {
        // 核心生词 (30个)
        vocab: [
            { id: "v_01", word: "流利", pinyin: "liúlì", en: "fluent", ru: "бегло" },
            { id: "v_02", word: "厉害", pinyin: "lìhai", en: "awesome", ru: "сильный" },
            { id: "v_03", word: "语法", pinyin: "yǔfǎ", en: "grammar", ru: "грамматика" },
            { id: "v_04", word: "准确", pinyin: "zhǔnquè", en: "accurate", ru: "точный" },
            { id: "v_05", word: "词语", pinyin: "cíyǔ", en: "word", ru: "слова" },
            { id: "v_06", word: "连", pinyin: "lián", en: "even", ru: "даже" },
            { id: "v_07", word: "阅读", pinyin: "yuèdú", en: "to read", ru: "читать" },
            { id: "v_08", word: "来得及", pinyin: "láidejí", en: "still time", ru: "успевать" },
            { id: "v_09", word: "复杂", pinyin: "fùzá", en: "complicated", ru: "сложный" },
            { id: "v_10", word: "只好", pinyin: "zhǐhǎo", en: "forced to", ru: "приходится" },
            { id: "v_11", word: "填空", pinyin: "tiánkòng", en: "fill blank", ru: "заполнить" },
            { id: "v_12", word: "猜", pinyin: "cāi", en: "to guess", ru: "угадывать" },
            { id: "v_13", word: "否则", pinyin: "fǒuzé", en: "otherwise", ru: "иначе" },
            { id: "v_14", word: "客厅", pinyin: "kètīng", en: "living room", ru: "гостиная" },
            { id: "v_15", word: "无论", pinyin: "wúlùn", en: "regardless of", ru: "независимо от" },
            { id: "v_16", word: "杂志", pinyin: "zázhì", en: "magazine", ru: "журнал" },
            { id: "v_17", word: "著名", pinyin: "zhùmíng", en: "famous", ru: "известный" },
            { id: "v_18", word: "页", pinyin: "yè", en: "page", ru: "страница" },
            { id: "v_19", word: "增加", pinyin: "zēngjiā", en: "increase", ru: "увеличивать" },
            { id: "v_20", word: "文章", pinyin: "wénzhāng", en: "article", ru: "статья" },
            { id: "v_21", word: "之", pinyin: "zhī", en: "of/connecting", ru: "связка" },
            { id: "v_22", word: "内容", pinyin: "nèiróng", en: "content", ru: "содержание" },
            { id: "v_23", word: "然而", pinyin: "rán'ér", en: "however", ru: "однако" },
            { id: "v_24", word: "看法", pinyin: "kànfǎ", en: "viewpoint", ru: "мнение" },
            { id: "v_25", word: "相同", pinyin: "xiāngtóng", en: "same", ru: "одинаковый" },
            { id: "v_26", word: "顺序", pinyin: "shùnxù", en: "order", ru: "последовательность" },
            { id: "v_27", word: "表示", pinyin: "biǎoshì", en: "express", ru: "выражать" },
            { id: "v_28", word: "养成", pinyin: "yǎngchéng", en: "develop", ru: "формировать" },
            { id: "v_29", word: "同时", pinyin: "tóngshí", en: "at same time", ru: "одновременно" },
            { id: "v_30", word: "精彩", pinyin: "jīngcǎi", en: "splendid", ru: "замечательный" }
        ],
        collocations: [
            { id: "c_01", left: "汉语说得", right: "流利" }, { id: "c_02", left: "疼得", right: "厉害" },
            { id: "c_03", left: "表达不", right: "准确" }, { id: "c_04", left: "查", right: "词典" },
            { id: "c_05", left: "著名", right: "作家" }, { id: "c_06", left: "养成", right: "习惯" }
        ],
        synonyms: [
            { id: "s_01", q: "______别人说什么，我只相信自己眼睛看见的东西。", options: ["无论", "不管"], ans: "无论" },
            { id: "s_02", q: "______去不去，最后都别忘了告诉我一声。", options: ["无论", "不管"], ans: "不管" },
            { id: "s_03", q: "虽然压力很大，但是为了共同的理想，______如何一定不能放弃。", options: ["无论", "不管"], ans: "无论" }
        ],
        reading_aloud: [
            { id: "r_01", text: "你来中国才一年，汉语就说得这么流利，真厉害！" },
            { id: "r_02", text: "看来要想考好，还得注意考试的方法，否则会做的题也没时间做了。" },
            { id: "r_03", text: "坚持阅读，除了能增加知识外，还能帮助我减轻压力。" }
        ]
    },

    // 4. 测 (Test) - 独立系统，留空保持 Schema 完整
    test: {
        platformUrl: "test-index.html",
        fill_blanks: [],
        true_false: []
    },

    // 5. 赛 (Race) - 诸神之战
    race: {
        categories: ["生词挑战", "语法风暴", "课文透视"],
        questions: [
            { id: "j_0_10", catIdx: 0, pts: 10, q: "“complicated”对应的中文是？", a: "复杂" },
            { id: "j_0_20", catIdx: 0, pts: 20, q: "填空：我的牙最近疼得____。", a: "厉害" },
            { id: "j_0_30", catIdx: 0, pts: 30, q: "“杂志”的量词是什么？", a: "本 (一本杂志)" },
            { id: "j_1_10", catIdx: 1, pts: 10, q: "填空：他太穷了，____吃饭的钱都没有。", a: "连" },
            { id: "j_1_20", catIdx: 1, pts: 20, q: "判断：不管如何，我都要去。", a: "错（应为无论如何）" },
            { id: "j_1_30", catIdx: 1, pts: 30, q: "用“否则”造句", a: "（主观题）" },
            { id: "j_2_10", catIdx: 2, pts: 10, q: "小雨为什么没做完考试题？", a: "先做了复杂的题" },
            { id: "j_2_20", catIdx: 2, pts: 20, q: "“好读书”的意思是什么？", a: "养成阅读的习惯" },
            { id: "j_2_30", catIdx: 2, pts: 30, q: "提高阅读能力的方法有哪些？", a: "做读书笔记" }
        ]
    },

    // 6. 趣 (Fun)
    fun: {
        guess_words: [
            { id: "fg_01", word: "只好", hint: "副词。表示没有别的办法了，只能这样做。" },
            { id: "fg_02", word: "著名", hint: "形容词。在世界上非常有名，大家都知道。" },
            { id: "fg_03", word: "猜", hint: "动词。考试不知道答案时，你闭上眼选一个的动作。" }
        ],
        undercover: [
            { id: "fu_01", civilian: "阅读", spy: "看书" },
            { id: "fu_02", civilian: "杂志", spy: "报纸" },
            { id: "fu_03", civilian: "准确", spy: "正确" }
        ],
        wordcloud: [] // 词云仅发送触发指令，无具体题干
    }
};