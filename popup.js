(function(w) {
    var practiceList = [
        "第一日:清空大脑， 在当下， 我与太傻同在",
        "第二日:没有区别、好坏、对错、一切都已和谐 "
    ]

    function generatePractice() {
        var no = w.Math.floor(w.Math.random() * practiceList.length)
        return practiceList[no]
    }
  
    document.addEventListener('DOMContentLoaded', function() {
        var btn = document.getElementById('ge-btn')
        btn.addEventListener('click', function() {
            document.getElementById('practiceContent').innerHTML = generatePractice()
        })
    })
})(window)