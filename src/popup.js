(function(w) {
    var today = new Date().toJSON().slice(0, 10)
    var practiceList = [
        "第一日 清空大脑， 在当下， 我与太傻同在",
        "第二日 没有区别、好坏、对错、一切都已和谐 ",
        "第三日 我每一天经历的每一刻都是奇迹",
        "第四日 爱中没有区别，一切都是爱",
        "第五日 只有我自己才能创造我所有的经历",
        "第六日 奇迹是爱与智慧的合一， 太傻是终极的奇迹",
        "第七日 我是太傻, 我是一，我们都是一",

        "第八日 我的大脑只能看见分离， 我决定用心看见",
        "第九日 我只是看见我想看见的, 我决定用心看见真相",
        "第十日 分离的追逐是一切痛苦的源头， 没有分离",
        "第十一日 大脑说 \"我知道\"时，我会说\"我不知道\"",
        "第十二日 在太傻的指引下，我将恢复已经颠倒的觉知",
        "第十三日 只有我的心才真正的知道, 他是太傻的眼睛",
        "第十四日 我在看到真实, 我只看到合一的爱与奇迹",

        "第十五日 我的大脑无法知道，我无需选择",
        "第十六日 我停止在大脑指导下的无止境的追逐",
        "第十七日 太傻指导下的生活,一切都是轻松自如的",
        "第十八日 太傻的生活原则是：理解一切，接受一切",
        "第十九日 我什么都不用做, 我只成为我自己",
        "第二十日 我不是受害者 我是奇迹的创造者",
        "第二十一日 外在无法创造, 我创造一切",

        "第二十二日 此刻我看到爱",
        "第二十三日 在我的每个兄弟姐妹身上，我只看到爱",
        "第二十四日 我看到的一切事物都是爱",
        "第二十五日 我在这个世界的唯一目的就是爱",
        "第二十六日 在爱中，我理解一切，接受一切",
        "第二十七日 爱是唯一真实的道路， 我无需选择",
        "第二十八日 太傻的第一步， 我理解爱并成为爱",

        "第二十九日 我决定不再看到问题，并自己制造问题",
        "第三十日 当我不再制造问题， 我会自然的开始创造",
        "第三十一日 我收回我在分离的制造中浪费的爱",
        "第三十二日 爱是唯一创造的力量 我只会用爱来创造",
        "第三十三日 我每一刻都在创造， 我不可能不创造",
        "第三十四日 太傻第二步， 我在无限中找到智慧与光",
        "第三十五日 我用爱解决一切问题，创造一切奇迹",

        "第三十六日 我不再游戏，我决定真实的生活",
        "第三十七日 我经历一切都是我自己创造的奇迹",
        "第三十八日 在奇迹的服务中，我与无限的自己合一",
        "第三十九日 我已经做出了我的选择，我无需选择",
        "第四十日 太傻第三步， 爱与光合一， 我就是奇迹",
        "第四十一日 奇迹无需行动，奇迹只在太傻指导下施展",
        "第四十二日 太傻是终极的奇迹，我将与太傻合一",

        "第四十三日 我是一，我是无限，这是我唯一的真相",
        "第四十四日 差别与局限是我体验合一与无限的方式",
        "第四十五日 我唯一的目标就是成为无限的自己",
        "第四十六日 我履行太傻道路的责任: 爱、智慧与奇迹",
        "第四十七日 我在不断的遗忘和记起中, 理解我自己",
        "第四十八日 在扭曲的平衡中, 我接受无限的我自己",
        "第四十九日 我们都是太傻,我们都是一"
    ]

    function generatePractice() {
        //每章练习数量
        let chapterLength = 7
        let chapterNo = document.getElementById('chapter').value
        var no = w.Math.floor(w.Math.random() * chapterLength) + (chapterNo - 1) * chapterLength

        return practiceList[no]
    }

    function storePractice(p) {
        var praticeToday = {}
        praticeToday[today] = p
        window.localStorage.setItem('practice', JSON.stringify(praticeToday))
        return window.localStorage.getItem('practice')
    }

    function actionType() {
        if (!window.localStorage.getItem('practice')) {
            return false
        } else if (JSON.parse(window.localStorage.getItem('practice'))[today] === undefined) {
            return false
        } else {
            return true
        }
    }

    function display() {
        document.getElementById('practiceContent').innerHTML = JSON.parse(window.localStorage.getItem('practice'))[today]
        document.querySelector('.operate').style.display = 'none'
    }

    function generate() {
        var btn = document.getElementById('ge-btn')
        btn.addEventListener('click', function() {
            storePractice(generatePractice())
            display()
        })
    }

    document.addEventListener('DOMContentLoaded', function() {
        actionType() ? display() : generate()
    })
})(window)