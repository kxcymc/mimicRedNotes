import express from 'express'
import Mock from 'mockjs'

const app = express()
app.use(express.json())

// 模拟宠物数据
const pets = Mock.mock({
    'data|10-20': [
        {
            code: '@guid', // 生成唯一标识
            type: '@pick(["犬科", "猫科", "爬行动物", "鸟类"])',
            kind: '@pick(["哈士奇", "中华田园犬", "金毛", "布偶猫", "暹罗猫", "鹦鹉", "蜥蜴"])',
            name: '@cname', // 生成随机名字
            pic: '@image(200x200, @color, @word)', // 生成随机图片
            birth: '@date("yyyy-MM-dd")', // 随机出生日期
            gender: '@integer(0, 3)', // 0: 雌, 1: 雄, 2: 雌雄共体, 3: 未知
            disposition: '@pick(["温顺", "活泼", "胆小", "粘人", "高冷"])',
            health: '@pick(["健康", "亚健康", "生病"])',
            state: '@integer(0, 1)' // 0: 未被领养, 1: 已被领养
        }
    ]
}).data

// 搜索接口
app.post('/pet/search', (req, res) => {
    const keyword = req.query.keyword || ''
    const result = pets.filter(pet =>
        pet.name.includes(keyword) ||
        pet.type.includes(keyword) ||
        pet.kind.includes(keyword)
    )
    res.json({ code: 200, message: "查询成功", data: result })
})

// 启动服务器
app.listen(3000, () => {
    console.log('Mock server running at http://localhost:3000')
})
