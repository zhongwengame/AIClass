/**
 * 标准化数据字典 (Schema V6.0 - 真实俄罗斯学生名单版)
 * 对应课程：HSK4 第11课
 */
window.HSK_DATA = {
    lessonInfo: {
        id: "hsk4_lesson_11",
        level: "HSK 4",
        title: "第 11 课：《读书好，读好书，好读书》"
    },
    
    // ✅ 已经完全替换为您的 14 位真实学生名单
    students: [
        "FATEEV ALEKSANDR", 
        "IVANOV KONSTANTIN", 
        "SANGADZHIEV DZHIRGAL", 
        "BARILOVICH ELIZAVETA", 
        "SARAYKIN ANDREY", 
        "GORELOVA ELIZAVETA", 
        "SHCHELOKOVA KSENIIA", 
        "VOROBEV ANDREI", 
        "SHUMAKHOV DAMIR", 
        "MANOKHIN MAKSIM", 
        "KLYUCHIKOV EGOR", 
        "IVANOV KIRILL", 
        "LESHCHINSKAIA OLESIA", 
        "MANUYLOV ALEXANDER"
    ],
    
    learn: {
        slidesUrl: "https://docs.google.com/presentation/d/1ja_8u2MGPAB-nSnBF6VqxwxmmhEiMsyi/embed?start=false&loop=false"
    },
    
    practice: {
        vocab: [
            { id: "v_01", word: "流利", pinyin: "liúlì", en: "fluent", ru: "бегло" },
            { id: "v_02", word: "厉害", pinyin: "lìhai", en: "awesome", ru: "сильный" },
            { id: "v_03", word: "语法", pinyin: "yǔfǎ", en: "grammar", ru: "грамматика" },
            { id: "v_04", word: "准确", pinyin: "zhǔnquè", en: "accurate", ru: "точный" },
            { id: "v_05", word: "词语", pinyin: "cíyǔ", en: "word", ru: "слова" },
            { id: "v_06", word: "来得及", pinyin: "láidejí", en: "still time", ru: "успевать" },
            { id: "v_07", word: "复杂", pinyin: "fùzá", en: "complicated", ru: "сложный" },
            { id: "v_08", word: "只好", pinyin: "zhǐhǎo", en: "forced to", ru: "приходится" },
            { id: "v_09", word: "填空", pinyin: "tiánkòng", en: "fill blank", ru: "заполнить" },
            { id: "v_10", word: "否则", pinyin: "fǒuzé", en: "otherwise", ru: "иначе" },
            { id: "v_11", word: "客厅", pinyin: "kètīng", en: "living room", ru: "гостиная" },
            { id: "v_12", word: "无论", pinyin: "wúlùn", en: "regardless of", ru: "независимо от" },
            { id: "v_13", word: "杂志", pinyin: "zázhì", en: "magazine", ru: "журнал" },
            { id: "v_14", word: "著名", pinyin: "zhùmíng", en: "famous", ru: "известный" },
            { id: "v_15", word: "增加", pinyin: "zēngjiā", en: "increase", ru: "увеличивать" },
            { id: "v_16", word: "文章", pinyin: "wénzhāng", en: "article", ru: "статья" }
        ],
        collocations: [
            { id: "c_01", left: "说得非常", right: "流利" }, { id: "c_02", left: "头疼得", right: "厉害" },
            { id: "c_03", left: "表达不太", right: "准确" }, { id: "c_04", left: "查字典找", right: "词语" },
            { id: "c_05", left: "著名的", right: "作家" }, { id: "c_06", left: "养成好", right: "习惯" },
            { id: "c_07", left: "增加", right: "知识" }, { id: "c_08", left: "减轻", right: "压力" },
            { id: "c_09", left: "复杂的", right: "问题" }, { id: "c_10", left: "精彩的", right: "比赛" }
        ],
        synonyms: [
            { id: "s_01", q: "______别人说什么，我只相信自己眼睛看见的东西。", options: ["无论", "不管"], ans: "无论" },
            { id: "s_02", q: "______去不去，最后都别忘了告诉我一声。", options: ["无论", "不管"], ans: "不管" },
            { id: "s_03", q: "虽然压力很大，但是为了共同的理想，______如何一定不能放弃。", options: ["无论", "不管"], ans: "无论" }
        ],
        reading_aloud: [
            { id: "r_01", text: "你来中国才一年，汉语就说得这么流利，真厉害！" },
            { id: "r_02", text: "看来要想考好，还得注意考试的方法，否则会做的题也没时间做了。" }
        ],
        vocab_drill: [
            { id: "vd_01", q: "你来中国才一年，汉语就说得这么____。", options: ["流利", "准确", "复杂"], ans: "流利" },
            { id: "vd_02", q: "今天头疼得____，我想请假。", options: ["厉害", "著名", "流利"], ans: "厉害" },
            { id: "vd_03", q: "下大雨了，我们____待在家里。", options: ["只好", "然而", "否则"], ans: "只好" },
            { id: "vd_04", q: "你快点跑，____就要迟到了。", options: ["否则", "然而", "无论"], ans: "否则" }
        ]
    },
    
    test: {
        platformUrl: "test-index.html", fill_blanks: [], true_false: []
    },
    
    race: {
        categories: ["生词挑战", "语法风暴", "课文透视"],
        questions: [
            { id: "j_0_10", catIdx: 0, pts: 10, q: "“complicated”对应的中文是？", a: "复杂" },
            { id: "j_0_20", catIdx: 0, pts: 20, q: "填空：我的牙最近疼得____。", a: "厉害" },
            { id: "j_0_30", catIdx: 0, pts: 30, q: "“杂志”的量词是什么？", a: "本" },
            { id: "j_1_10", catIdx: 1, pts: 10, q: "他太穷了，____吃饭的钱都没有。", a: "连" },
            { id: "j_1_20", catIdx: 1, pts: 20, q: "判断：不管如何，我都要去。", a: "错" },
            { id: "j_1_30", catIdx: 1, pts: 30, q: "你快点，____就迟到了。(然而/否则)", a: "否则" },
            { id: "j_2_10", catIdx: 2, pts: 10, q: "小雨为什么没做完考试题？", a: "先做了复杂的题" },
            { id: "j_2_20", catIdx: 2, pts: 20, q: "“好读书”的意思是什么？", a: "养成阅读习惯" },
            { id: "j_2_30", catIdx: 2, pts: 30, q: "提高阅读能力的方法有哪些？", a: "做读书笔记" }
        ]
    },
    
    fun: {
        guess_words: [
            { id: "fg_01", word: "流利", hint: "说话非常顺，不卡顿。" },
            { id: "fg_02", word: "厉害", hint: "能力很强，或者生病很严重的意思。" },
            { id: "fg_03", word: "只好", hint: "表示没有别的办法了，只能这样做。" },
            { id: "fg_04", word: "否则", hint: "如果不这样的话，就会有不好的结果。" }
        ],
        undercover: [
            { id: "fu_01", civilian: "阅读", spy: "看书" },
            { id: "fu_02", civilian: "准确", spy: "正确" },
            { id: "fu_03", civilian: "杂志", spy: "报纸" }
        ],
        wordcloud: [] 
    },
    
    analytics_base: {
        overall: { completion_rate: 65, avg_score: 72, weakest_point: "尚未暴露" },
        student_init: { score: 60, level: "初测", desc: "等待课堂互动数据分析..." }
    },

    analytics: {
        overview: {
            total_students: "14 人", // 更新为14人
            completion_rate: "85.8%",
            avg_score: "76.5 分",
            weakest_point: "近义词：无论/不管",
            error_rates: [
                { title: "语法：无论 vs 不管", rate: 38 },
                { title: "语法：连......也/都......", rate: 25 },
                { title: "词汇：复杂 vs 麻烦", rate: 18 }
            ],
            ai_advice: "🤖 教学建议：\n1. 俄罗斯学生在口语词“不管”与书面词“无论”的边界感较弱，建议进行专项配对特训。\n2. “连...都...”前置宾语错位严重，建议下发 3 道连词成句题进行巩固。"
        },
        student_reports: [
            {
                name: "FATEEV ALEKSANDR", // 默认加载第一个真实的俄语名字
                tag: "俄罗斯留学生", 
                sid: "HSK4-001", 
                class: "四级班",
                metrics: [
                    { title: "听力理解", score: 88, level: "良好", color: "text-emerald-500", desc: "对长难句抓取能力强，发音清晰。" },
                    { title: "语法建构", score: 65, level: "薄弱", color: "text-rose-500", desc: "常出现语序错误，未掌握'连'的进阶用法。" },
                    { title: "汉字读写", score: 82, level: "良好", color: "text-blue-500", desc: "汉字拆字配对准确率高，拼音依赖度下降。" }
                ]
            }
        ]
    }
};