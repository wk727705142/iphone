import mock from 'mockjs'
const List = []

for (let i = 0; i < 10; i++) {
    List.push(
        mock.mock({
            'text': mock.Random.cparagraph(3)
        })
    )
}
export default List