import mock from 'mockjs'
const Detail = []

for (let i = 0; i < 15; i++) {
    Detail.push(
        mock.mock({
            'img': mock.Random.image('40x40', mock.Random.color()),
            'num': /^1[34578][1-9]\d{8}/,
            'name': mock.Random.cname(3),
            'type':mock.Random.ctitle(4),
            'time': mock.Random.datetime("yyyy-MM-dd HH:mm")
        })
    )
}
export default Detail