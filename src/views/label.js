const amap = {
//   twoD: {
//     url:
//         'http://81.68.73.55/group1/M00/00/04/rBEAA1-JJ8yAUq_BALEcom8pRmM963.png',
//     bounds: [
//       [114.588403, 36.649755], // 左下角
//       [114.605564, 36.660364]
//     ], // 右上角
//     center: [114.596396, 36.655077],
//     zooms: [16, 25],
//     zoom: 17,
//     holes: [
//       [
//         [114.588344, 36.65909],
//         [114.588607, 36.659398],
//         [114.589626, 36.659709],
//         [114.59162, 36.660199],
//         [114.5987, 36.660199],
//         [114.599108, 36.660377],
//         [114.605583, 36.660377],
//         [114.605583, 36.650858],
//         [114.605535, 36.650748],
//         [114.605535, 36.650148],
//         [114.605085, 36.649771],
//         [114.604395, 36.649771],
//         [114.604285, 36.649751],
//         [114.589933, 36.649751],
//         [114.589751, 36.649801],
//         [114.588786, 36.649801],
//         [114.588401, 36.650148],
//         [114.588401, 36.650648],
//         [114.588344, 36.650858],
//         [114.588344, 36.65909]
//       ]
//     ],
//     labels: {
//       college: {
//         name: '学院',
//         positionIcon: 'http://localhost:8080/red_icon.png',
//         data: [
//           {
//             name: '组团一',
//             lnglatCenter: [114.592225, 36.653993],
//             code: '9',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '机械与装备学院',
//             lnglatCenter: [114.592222, 36.655714],
//             code: '15',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '信息与电气工程学院',
//             lnglatCenter: [114.593021, 36.6566],
//             code: '16',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '材料、矿院、地球',
//             lnglatCenter: [114.594443, 36.656316],
//             code: '17',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '能源与环境工程学院',
//             lnglatCenter: [114.598659, 36.658033],
//             code: '24',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '土木工程学院',
//             lnglatCenter: [114.599464, 36.657134],
//             code: '25',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '水利水电学院',
//             lnglatCenter: [114.600499, 36.658068],
//             code: '27',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '实验主楼',
//             lnglatCenter: [114.60125, 36.657125],
//             code: '26',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '水电学院水工结构及材料试验厂',
//             lnglatCenter: [114.601196, 36.658287],
//             code: '29',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '组团四',
//             lnglatCenter: [114.601615, 36.655387],
//             code: '36',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '建筑与艺术学院',
//             lnglatCenter: [114.604388, 36.652241],
//             code: '43',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           }
//         ]
//       },
//       classroom: {
//         name: '教室',
//         positionIcon: 'http://localhost:8080/red_icon.png',
//         data: [
//           {
//             name: '第一公共教学楼',
//             lnglatCenter: [114.594891, 36.654638],
//             code: '2',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '第二公共教学楼',
//             lnglatCenter: [114.599204, 36.654793],
//             code: '3',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           }
//         ]
//       },
//       administration: {
//         name: '行政',
//         positionIcon: 'http://localhost:8080/red_icon.png',
//         data: [
//           {
//             name: '图书馆',
//             lnglatCenter: [114.597152, 36.653291],
//             code: '1',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '科研楼',
//             lnglatCenter: [114.598791, 36.652168],
//             code: '4',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '学术会议中心',
//             lnglatCenter: [114.598453, 36.650868],
//             code: '5',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '行政服务中心',
//             lnglatCenter: [114.595873, 36.650881],
//             code: '6',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '校医院',
//             lnglatCenter: [114.603573, 36.659311],
//             code: '33',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '第一后勤服务楼',
//             lnglatCenter: [114.603535, 36.659729],
//             code: '32',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '工程实训中心',
//             lnglatCenter: [114.601293, 36.65234],
//             code: '42',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           }
//         ]
//       },
//       buildingsLabel: {
//         name: '标签',
//         positionIcon: 'http://localhost:8080/red_icon.png',
//         // infoBody: ,
//         data: [
//           {
//             name: '图书馆',
//             lnglatCenter: [114.597152, 36.653291],
//             code: '1',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '第一公共教学楼',
//             lnglatCenter: [114.594891, 36.654638],
//             code: '2',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '第二公共教学楼',
//             lnglatCenter: [114.599204, 36.654793],
//             code: '3',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '科研楼',
//             lnglatCenter: [114.598791, 36.652168],
//             code: '4',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '学术会议中心',
//             lnglatCenter: [114.598453, 36.650868],
//             code: '5',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '行政服务中心',
//             lnglatCenter: [114.595873, 36.650881],
//             code: '6',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '体育综合馆',
//             lnglatCenter: [114.590283, 36.654187],
//             code: '8',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '组团一',
//             lnglatCenter: [114.592225, 36.653993],
//             code: '9',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '第一食堂',
//             lnglatCenter: [114.590208, 36.655706],
//             code: '11',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '一社区A楼',
//             lnglatCenter: [114.590186, 36.657694],
//             code: '12A',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '一社区B楼',
//             lnglatCenter: [114.589285, 36.65735],
//             code: '12B',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '一社区C楼',
//             lnglatCenter: [114.589586, 36.656605],
//             code: '12C',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '一社区D楼',
//             lnglatCenter: [114.589564, 36.655732],
//             code: '12D',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '一社区E楼',
//             lnglatCenter: [114.591367, 36.657264],
//             code: '12E',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '冷热源站1#',
//             lnglatCenter: [114.590221, 36.656351],
//             code: '13',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '一社区配套',
//             lnglatCenter: [114.590945, 36.656604],
//             code: '14',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '机械与装备学院',
//             lnglatCenter: [114.592222, 36.655714],
//             code: '15',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '信息与电气工程学院',
//             lnglatCenter: [114.593021, 36.6566],
//             code: '16',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '材料、矿院、地球',
//             lnglatCenter: [114.594443, 36.656316],
//             code: '17',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '第二食堂',
//             lnglatCenter: [114.592967, 36.658007],
//             code: '20',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '二社区A楼',
//             lnglatCenter: [114.591953, 36.659277],
//             code: '21A',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '二社区B楼',
//             lnglatCenter: [114.593552, 36.659737],
//             code: '21B',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '二社区C楼',
//             lnglatCenter: [114.594936, 36.659505],
//             code: '21C',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '二社区D楼',
//             lnglatCenter: [114.593278, 36.659075],
//             code: '21D',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '二社区E楼',
//             lnglatCenter: [114.594727, 36.658382],
//             code: '21E',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '二社区配套',
//             lnglatCenter: [114.593928, 36.659212],
//             code: '22',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '能源与环境工程学院',
//             lnglatCenter: [114.598659, 36.658033],
//             code: '24',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '土木工程学院',
//             lnglatCenter: [114.599464, 36.657134],
//             code: '25',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '水利水电学院',
//             lnglatCenter: [114.600499, 36.658068],
//             code: '27',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '实验主楼',
//             lnglatCenter: [114.60125, 36.657125],
//             code: '26',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '水电学院水工结构及材料试验厂',
//             lnglatCenter: [114.601196, 36.658287],
//             code: '29',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '三社区A楼',
//             lnglatCenter: [114.599866, 36.659522],
//             code: '30A',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '三社区B楼',
//             lnglatCenter: [114.601202, 36.659527],
//             code: '30B',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '三社区C楼',
//             lnglatCenter: [114.602457, 36.659505],
//             code: '30C',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '三社区配套',
//             lnglatCenter: [114.601186, 36.660004],
//             code: '31',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '校医院',
//             lnglatCenter: [114.603573, 36.659311],
//             code: '33',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '第一后勤服务楼',
//             lnglatCenter: [114.603535, 36.659729],
//             code: '32',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '第三食堂',
//             lnglatCenter: [114.603471, 36.658089],
//             code: '34',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '冷热源站2#',
//             lnglatCenter: [114.602661, 36.65694],
//             code: '35',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '组团四',
//             lnglatCenter: [114.601615, 36.655387],
//             code: '36',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '四社区A楼',
//             lnglatCenter: [114.603455, 36.656054],
//             code: '40A',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '四社区B楼',
//             lnglatCenter: [114.603465, 36.654715],
//             code: '40B',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '四社区C楼',
//             lnglatCenter: [114.604909, 36.656071],
//             code: '40C',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '四社区D',
//             lnglatCenter: [114.604903, 36.654737],
//             code: '40D',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '四社区配套',
//             lnglatCenter: [114.603873, 36.655292],
//             code: '41',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '工程实训中心',
//             lnglatCenter: [114.601293, 36.65234],
//             code: '42',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '建筑与艺术学院',
//             lnglatCenter: [114.604388, 36.652241],
//             code: '43',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '留学生公寓',
//             lnglatCenter: [114.603653, 36.650541],
//             code: '44',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           }
//         ]
//       },
//       sports: {
//         name: '体育',
//         positionIcon: 'http://localhost:8080/red_icon.png',
//         data: [
//           {
//             name: '体育综合馆',
//             lnglatCenter: [114.590283, 36.654187],
//             code: '8',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           }
//         ]
//       },
//       restaurant: {
//         name: '食堂',
//         positionIcon: 'http://localhost:8080/red_icon.png',
//         data: [
//           {
//             name: '第一食堂',
//             lnglatCenter: [114.590208, 36.655706],
//             code: '44',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '第二食堂',
//             lnglatCenter: [114.592967, 36.658007],
//             code: '20',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '第三食堂',
//             lnglatCenter: [114.603471, 36.658089],
//             code: '44',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           }
//         ]
//       },
//       dormitory: {
//         name: '宿舍',
//         positionIcon: 'http://localhost:8080/red_icon.png',
//         data: [
//           {
//             name: '一社区A楼',
//             lnglatCenter: [114.590186, 36.657694],
//             code: '12A',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '一社区B楼',
//             lnglatCenter: [114.589285, 36.65735],
//             code: '12B',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '一社区C楼',
//             lnglatCenter: [114.589586, 36.656605],
//             code: '12C',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '一社区D楼',
//             lnglatCenter: [114.589564, 36.655732],
//             code: '12D',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '一社区E楼',
//             lnglatCenter: [114.591367, 36.657264],
//             code: '12E',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '冷热源站1#',
//             lnglatCenter: [114.590221, 36.656351],
//             code: '13',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '一社区配套',
//             lnglatCenter: [114.590945, 36.656604],
//             code: '14',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '二社区A楼',
//             lnglatCenter: [114.591953, 36.659277],
//             code: '21A',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '二社区B楼',
//             lnglatCenter: [114.593552, 36.659737],
//             code: '21B',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '二社区C楼',
//             lnglatCenter: [114.594936, 36.659505],
//             code: '21C',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '二社区D楼',
//             lnglatCenter: [114.593278, 36.659075],
//             code: '21D',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '二社区E楼',
//             lnglatCenter: [114.594727, 36.658382],
//             code: '21E',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '二社区配套',
//             lnglatCenter: [114.593928, 36.659212],
//             code: '22',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '三社区A楼',
//             lnglatCenter: [114.599866, 36.659522],
//             code: '30A',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '三社区B楼',
//             lnglatCenter: [114.601202, 36.659527],
//             code: '30B',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '三社区C楼',
//             lnglatCenter: [114.602457, 36.659505],
//             code: '30C',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '三社区配套',
//             lnglatCenter: [114.601186, 36.660004],
//             code: '31',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '冷热源站2#',
//             lnglatCenter: [114.602661, 36.65694],
//             code: '35',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '四社区A楼',
//             lnglatCenter: [114.603455, 36.656054],
//             code: '40A',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '四社区B楼',
//             lnglatCenter: [114.603465, 36.654715],
//             code: '40B',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '四社区C楼',
//             lnglatCenter: [114.604909, 36.656071],
//             code: '40C',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '四社区D',
//             lnglatCenter: [114.604903, 36.654737],
//             code: '40D',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '四社区配套',
//             lnglatCenter: [114.603873, 36.655292],
//             code: '41',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '留学生公寓',
//             lnglatCenter: [114.603653, 36.650541],
//             code: '44',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           }
//         ]
//       },
//       supermarket: {
//         name: '超市',
//         positionIcon: 'http://localhost:8080/red_icon.png',
//         data: [
//           {
//             name: '超市',
//             lnglatCenter: [114.593772, 36.658012],
//             code: '44',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           },
//           {
//             name: '超市',
//             lnglatCenter: [114.603471, 36.657306],
//             code: '44',
//             iphone: '0310-8578786',
//             introduce: '介绍',
//             img:
//                 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
//           }
//         ]
//       }
//     }
//   },
  threeD: {
    // infoBody:"`<div style='font-size: 10px; > 'buildingLabel.img</div>`",
    // url:
    //     'http://81.68.73.55/group1/M00/00/34/rBEAA2F7qfWABW2JAGdJS_oe5RU086.jpg',
    // bounds: [
    //   [114.588403, 36.649755], // 左下角
    //   [114.908403, 36.780195]
    // ], // 右上角
    // center: [114.748403, 36.714965],
    // zooms: [12.8, 16],
    // zoom: 14,
    // holes: [
    //   [
    //     [114.908403, 36.649755],
    //     [114.588403, 36.649755],
    //     [114.588403, 36.780195],
    //     [114.908403, 36.780195],
    //     [114.908403, 36.649755]
    //   ]
    // ],
    labels: {
      college: {
        name: '学院',
        positionIcon: 'http://localhost:8080/red_icon.png',
        data: [
          {
            name: '组团一',
            lnglatCenter: [114.678239, 36.72054],
            code: '9',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '机械与装备学院',
            lnglatCenter: [114.681414, 36.733473],
            code: '15',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '信息与电气工程学院',
            lnglatCenter: [114.693345, 36.739526],
            code: '16',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '材料、矿院、地球',
            lnglatCenter: [114.713858, 36.738081],
            code: '17',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '能源与环境工程学院',
            lnglatCenter: [114.769625, 36.747366],
            code: '24',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '土木工程学院',
            lnglatCenter: [114.783358, 36.743377],
            code: '25',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '水利水电学院',
            lnglatCenter: [114.789023, 36.746472],
            code: '27',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '实验主楼',
            lnglatCenter: [114.800439, 36.74269],
            code: '26',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '水电学院水工结构及材料试验厂',
            lnglatCenter: [114.798464, 36.747779],
            code: '29',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '组团四',
            lnglatCenter: [114.803014, 36.731272],
            code: '36',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '建筑与艺术学院',
            lnglatCenter: [114.867301, 36.702031],
            code: '43',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          }
        ]
      },
      classroom: {
        name: '教室',
        positionIcon: 'http://localhost:8080/red_icon.png',
        data: [
          {
            name: '第一公共教学楼',
            lnglatCenter: [114.71657, 36.72527],
            code: '2',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '第二公共教学楼',
            lnglatCenter: [114.776402, 36.725772],
            code: '3',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          }
        ]
      },
      administration: {
        name: '行政',
        positionIcon: 'http://localhost:8080/red_icon.png',
        data: [
          {
            name: '图书馆',
            lnglatCenter: [114.748553, 36.713383],
            code: '1',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '科研楼',
            lnglatCenter: [114.774857, 36.700693],
            code: '4',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '学术会议中心',
            lnglatCenter: [114.770908, 36.687892],
            code: '5',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '行政服务中心',
            lnglatCenter: [114.724817, 36.687341],
            code: '6',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '校医院',
            lnglatCenter: [114.822539, 36.754665],
            code: '33',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '第一后勤服务楼',
            lnglatCenter: [114.820523, 36.757682],
            code: '32',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '工程实训中心',
            lnglatCenter: [114.815459, 36.702994],
            code: '42',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          }
        ]
      },
      sports: {
        name: '体育',
        positionIcon: 'http://localhost:8080/red_icon.png',
        data: [
          {
            name: '体育综合馆',
            lnglatCenter: [114.647741, 36.720096],
            code: '8',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          }
        ]
      },
      restaurant: {
        name: '食堂',
        positionIcon: 'http://localhost:8080/red_icon.png',
        data: [
          {
            name: '第一食堂',
            lnglatCenter: [114.654292, 36.733129],
            code: '44',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '第二食堂',
            lnglatCenter: [114.698495, 36.747779],
            code: '20',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '第三食堂',
            lnglatCenter: [114.824471, 36.747917],
            code: '44',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          }
        ]
      },
      dormitory: {
        name: '宿舍',
        positionIcon: 'http://localhost:8080/red_icon.png',
        data: [
          {
            name: '一社区A楼',
            lnglatCenter: [114.660043, 36.746679],
            code: '12A',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '一社区B楼',
            lnglatCenter: [114.649142, 36.744684],
            code: '12B',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '一社区C楼',
            lnglatCenter: [114.649485, 36.739938],
            code: '12C',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '一社区D楼',
            lnglatCenter: [1114.645537, 36.733679],
            code: '12D',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '一社区E偶',
            lnglatCenter: [114.675149, 36.744134],
            code: '12E',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '冷热源站1#',
            lnglatCenter: [114.656524, 36.736706],
            code: '13',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '一社区配套',
            lnglatCenter: [114.667853, 36.738769],
            code: '14',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '二社区A楼',
            lnglatCenter: [114.687594, 36.755894],
            code: '21A',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '二社区B楼',
            lnglatCenter: [114.706734, 36.758163],
            code: '21B',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '二社区C楼',
            lnglatCenter: [114.722699, 36.756582],
            code: '21C',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '二社区D楼',
            lnglatCenter: [114.703301, 36.754587],
            code: '21D',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '二社区E楼',
            lnglatCenter: [114.719695, 36.75108],
            code: '21E',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '二社区配套',
            lnglatCenter: [114.712056, 36.753969],
            code: '22',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '三社区A楼',
            lnglatCenter: [114.780869, 36.757132],
            code: '30A',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '三社区B楼',
            lnglatCenter: [114.794688, 36.757201],
            code: '30B',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '三社区C楼',
            lnglatCenter: [114.809107, 36.757063],
            code: '30C',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '三社区配套',
            lnglatCenter: [114.793658, 36.758163],
            code: '31',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '冷热源站2#',
            lnglatCenter: [114.818463, 36.742415],
            code: '35',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '四社区A楼',
            lnglatCenter: [114.832883, 36.736293],
            code: '40A',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '四社区B楼',
            lnglatCenter: [114.83829, 36.725975],
            code: '40B',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '四社区C楼',
            lnglatCenter: [114.850993, 36.736087],
            code: '40C',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '四社区D',
            lnglatCenter: [114.856658, 36.727832],
            code: '40D',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '四社区配套',
            lnglatCenter: [114.839234, 36.729001],
            code: '41',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '留学生公寓',
            lnglatCenter: [114.86173, 36.68137],
            code: '44',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          }
        ]
      },
      supermarket: {
        name: '超市',
        positionIcon: 'http://localhost:8080/red_icon.png',
        data: [
          {
            name: '超市',
            lnglatCenter: [114.707268, 36.746894],
            code: '44',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '超市',
            lnglatCenter: [114.827688, 36.743799],
            code: '44',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '东门出入',
            lnglatCenter: [114.864287, 36.713512],
            code: '44',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          }
        ]
      },
      buildingsLabel: {
        name: '标签',
        positionIcon: 'http://42.193.99.32:9800/school/web_Red_icon.png',
        // infoBody: ,
        data: [
          {
            name: '图书馆',
            lnglatCenter: [114.748553, 36.713383],
            code: '1',
            iphone: '0310-8578786',
            introduce: '介绍1',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '第一公共教学楼',
            lnglatCenter: [114.71657, 36.72527],
            code: '2',
            iphone: '0310-8578786',
            introduce: '介绍2',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '第二公共教学楼',
            lnglatCenter: [114.776402, 36.725772],
            code: '3',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '科研楼',
            lnglatCenter: [114.774857, 36.700693],
            code: '4',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '学术会议中心',
            lnglatCenter: [114.770908, 36.687892],
            code: '5',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '行政服务中心',
            lnglatCenter: [114.724817, 36.687341],
            code: '6',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '体育综合馆',
            lnglatCenter: [114.647741, 36.720096],
            code: '8',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '组团一',
            lnglatCenter: [114.678239, 36.72054],
            code: '9',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '第一食堂',
            lnglatCenter: [114.654292, 36.733129],
            code: '11',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '一社区A楼',
            lnglatCenter: [114.660043, 36.746679],
            code: '12A',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '一社区B楼',
            lnglatCenter: [114.649142, 36.744684],
            code: '12B',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '一社区C楼',
            lnglatCenter: [114.649485, 36.739938],
            code: '12C',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '一社区D楼',
            lnglatCenter: [114.645537, 36.733679],
            code: '12D',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '一社区E楼',
            lnglatCenter: [114.675149, 36.744134],
            code: '12E',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '冷热源站1#',
            lnglatCenter: [114.656524, 36.736706],
            code: '13',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '一社区配套',
            lnglatCenter: [114.667853, 36.738769],
            code: '14',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '机械与装备学院',
            lnglatCenter: [114.681414, 36.733473],
            code: '15',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '信息与电气工程学院',
            lnglatCenter: [114.693345, 36.739526],
            code: '16',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '材料、矿院、地球',
            lnglatCenter: [114.713858, 36.738081],
            code: '17',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '第二食堂',
            lnglatCenter: [114.698495, 36.747779],
            code: '20',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '二社区A楼',
            lnglatCenter: [114.687594, 36.755894],
            code: '21A',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '二社区B楼',
            lnglatCenter: [114.706734, 36.758163],
            code: '21B',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '二社区C楼',
            lnglatCenter: [114.722699, 36.756582],
            code: '21C',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '二社区D楼',
            lnglatCenter: [114.703301, 36.754587],
            code: '21D',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '二社区E楼',
            lnglatCenter: [114.719695, 36.75108],
            code: '21E',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '二社区配套',
            lnglatCenter: [114.712056, 36.753969],
            code: '22',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '能源与环境工程学院',
            lnglatCenter: [114.769625, 36.747366],
            code: '24',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '土木工程学院',
            lnglatCenter: [114.783358, 36.743377],
            code: '25',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '水利水电学院',
            lnglatCenter: [114.789023, 36.746472],
            code: '27',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '实验主楼',
            lnglatCenter: [114.800439, 36.74269],
            code: '26',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '水电学院水工结构及材料试验厂',
            lnglatCenter: [114.798464, 36.747779],
            code: '29',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '三社区A楼',
            lnglatCenter: [114.780869, 36.757132],
            code: '30A',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '三社区B楼',
            lnglatCenter: [114.794688, 36.757201],
            code: '30B',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '三社区C楼',
            lnglatCenter: [114.809107, 36.757063],
            code: '30C',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '三社区配套',
            lnglatCenter: [114.793658, 36.758163],
            code: '31',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '校医院',
            lnglatCenter: [114.822539, 36.754665],
            code: '33',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '第一后勤服务楼',
            lnglatCenter: [114.820523, 36.757682],
            code: '32',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '第三食堂',
            lnglatCenter: [114.824471, 36.747917],
            code: '34',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '冷热源站2#',
            lnglatCenter: [114.818463, 36.742415],
            code: '35',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '组团四',
            lnglatCenter: [114.803014, 36.731272],
            code: '36',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '四社区A楼',
            lnglatCenter: [114.832883, 36.736293],
            code: '40A',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '四社区B楼',
            lnglatCenter: [114.83829, 36.725975],
            code: '40B',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '四社区C楼',
            lnglatCenter: [114.850993, 36.736087],
            code: '40C',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '四社区D',
            lnglatCenter: [114.856658, 36.727832],
            code: '40D',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '四社区配套',
            lnglatCenter: [114.839234, 36.729001],
            code: '41',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '工程实训中心',
            lnglatCenter: [114.815459, 36.702994],
            code: '42',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '建筑与艺术学院',
            lnglatCenter: [114.867301, 36.702031],
            code: '43',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          },
          {
            name: '留学生公寓',
            lnglatCenter: [114.86173, 36.68137],
            code: '44',
            iphone: '0310-8578786',
            introduce: '介绍',
            img:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi.qqkou.com%2Fi%2F2a213556377x1738794267b26.jpg&refer=http%3A%2F%2Fi.qqkou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638274092&t=a9c3bb71f10d43e849e175e509543ca0'
          }
        ]
      }
    }
  }
}

export { amap }
