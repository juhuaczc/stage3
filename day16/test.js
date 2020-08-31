exports.a=1;
exports.b=2;
exports.c='3';
exports.d=function(){};

{
    let news = [
        {
            title:'新闻1',
            contents:[
                {t:'体育',m:'篮球开始比赛了'},
                {t:'娱乐',m:'电影院开放了'}
            ]
        },
        {
            title:'新闻1',
            contents:[
                {t:'体育',m:'乒乓球是竞赛'},
                {t:'娱乐',m:'电夺宝奇兵'}
            ]
        }
    ] 

    let [m1,m2] = news
    console.log(m1,m2)
    let {title,contents} = m1
    let [{title,contents}] = news
    console.log(title,contents)
    let[{contents:[{t:t1,m:m1}]}] = news
    console.log(t1,m1)
}