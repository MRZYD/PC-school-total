var app = new Vue({
    el: '#app',
    data(){
        return{
            fourListIndex: 0,
            popupSec: false,
            zeroBoxList: [
                {
                    image: '/images/images-solution/one-list-img1.png',
                    title: '标准产品',
                    stitle: '私有化',
                    label: ['独立部署', '数据安全', '系统稳定', '塑造品牌']
                },
                {
                    image: '/images/images-solution/one-list-img2.png',
                    title: '量身定制',
                    stitle: '1V1',
                    label: ['个性化需求', '1V1专属服务']
                },
                {
                    image: '/images/images-solution/one-list-img3.png',
                    title: '系统源码',
                    stitle: '二次开发',
                    label: ['源码售卖', '二次开发', '拓展性强', '产品文档']
                },
                {
                    image: '/images/images-solution/one-list-img4.png',
                    title: '数据同步',
                    stitle: '多终端',
                    label: ['电脑端网校', '移动H5网校', '微信小程序', '专属网校APP']
                }
            ],
            oneBoxList: [
                {
                    title: '招生引流',
                    label: ['涨粉神器', '裂变海报', '拼团秒杀', '裂变红包', '二级分销', '会员积分']
                },
                {
                    title: '品牌网站',
                    label: ['课程展示', '名师展示', '互动班级', '在线直播', '考试题库', '新闻资讯']
                },
                {
                    title: '在线网校',
                    label: ['录播课程', '直播授课', '白板文档', '课件共享', '视频弹题', '随堂笔记']
                },
                {
                    title: '在线直播',
                    label: ['电子白板', '连麦互动', '课堂签到', '桌面共享', '直播回放', '互动答疑']
                },
                {
                    title: '智能题库',
                    label: ['课后练习', '智能组卷', '专项训练', '自动阅卷', '能力评估', '错题库 ']
                },
                {
                    title: '互动班级',
                    label: ['付费问答', '移动社群', '动态圈子', '热门话题', '论坛模式', '实时资讯']
                },
                {
                    title: '教学工具',
                    label: ['用户分群', '表单问卷', '趣味测试', '活动签到', '在线打卡', '电子证书']
                },
                {
                    title: '教务管理',
                    label: ['排课约课', '校区管理', '运营管理', '学员管理', '讲师管理', '财务管理']
                },
                {
                    title: '网校数据',
                    label: ['订单数据', '交易数据', '收入数据', '流量数据', '用户数据', '数据图谱']
                }
            ],
            twoBoxList: [
                {
                    class: 'twohead-img1',
                    title: '电脑端网校',
                    text: '独立域名自主网校，建立机构专属品牌官网',
                },
                {
                    class: 'twohead-img2',
                    title: '移动H5网校',
                    text: '一键接入公众号，实现轻松获客、在线教学',
                },
                {
                    class: 'twohead-img3',
                    title: '微信小程序网校',
                    text: '无缝链接网校和微信生态，即开即用易传播',
                },
                {
                    class: 'twohead-img4',
                    title: '专属网校APP',
                    text: 'IOS、安卓双系统支持，把学校装进口袋',
                }
            ],
            thrBoxList: [
                {
                    class: 'thrhead-img1',
                    title: '六度人脉',
                    text: '通过挖掘微信关系链接资源，打通每一个顾客背后的新人脉，实现全民营销，获取流量价值。'
                },
                {
                    class: 'thrhead-img2',
                    title: '裂变海报',
                    text: '通过二级分销体系，用佣金奖励学员转发课程海报，形成接力式裂变传播的营销功能。',
                },
                {
                    class: 'thrhead-img3',
                    title: '拼团活动',
                    text: '机构通过低价设置，引导学员转发邀请好友参与拼团，促进课程的推广和售卖。',
                },
                {
                    class: 'thrhead-img4',
                    title: '优惠卡券',
                    text: '通过机构让利，从而让学员在购买课程时享受优惠的营销工具，促进用户成交。',
                },
                {
                    class: 'thrhead-img5',
                    title: '积分商城',
                    text: '通过构建积分体系，积分发放和积分消耗等功能，帮助商家维系存量用户，提高店铺的用户留存率。',
                },
                {
                    class: 'thrhead-img6',
                    title: '会员系统',
                    text: '帮助机构运营用户，提高核心学员粘性，提高平台留存和活跃度，扩大机构品牌影响力。',
                },
                {
                    class: 'thrhead-img7',
                    title: '弹窗广告',
                    text: '机构为首页弹窗自定义样式和跳转链接的营销工具为营销活动、上新课程、主推课程配置弹窗广告。',
                },
                {
                    class: 'thrhead-img8',
                    title: '推广员',
                    text: '机构进行裂变传播、维系客户、促进成交的营销工具。维系客户并促进客户成交。',
                },
                {
                    class: 'thrhead-img9',
                    title: '活动满减/赠',
                    text: '通过机构平台让利，从而让用户在购买课程时享受优惠的营销工具，来提高课程销量。',
                },
                {
                    class: 'thrhead-img10',
                    title: '电子签章',
                    text: '机构针对平台消费的订单进行其订购协议的获取和管理的功能。',
                },
                {
                    class: 'thrhead-img11',
                    title: '版本信息',
                    text: '去除平台内“268教育软件”相关版权标识，强化自主品牌，打造自己的独立网校品牌。',
                },
                {
                    class: 'thrhead-img12',
                    title: '品牌形象',
                    text: '机构自主搭建个性化网校微页面的功能。微页面内的内容及展示样式，配合站内导航实现跳转。',
                },
            ],
            fourBoxList: {
                menuList: [{
                    title: '1V1辅导',
                    image: '/images/images-school/fourSec-img/four-menu-li1.png',
                    imagehover: '/images/images-school/fourSec-img/four-menu-h-li1.png',
                }, {
                    title: '1V16小班课',
                    image: '/images/images-school/fourSec-img/four-menu-li2.png',
                    imagehover: '/images/images-school/fourSec-img/four-menu-h-li2.png',
                }, {
                    title: '1V500大班课',
                    image: '/images/images-school/fourSec-img/four-menu-li3.png',
                    imagehover: '/images/images-school/fourSec-img/four-menu-h-li3.png',
                }, {
                    title: '万人大直播',
                    image: '/images/images-school/fourSec-img/four-menu-li4.png',
                    imagehover: '/images/images-school/fourSec-img/four-menu-h-li4.png',
                }, {
                    title: '双师课堂',
                    image: '/images/images-school/fourSec-img/four-menu-li5.png',
                    imagehover: '/images/images-school/fourSec-img/four-menu-h-li5.png',
                }, {
                    title: '空中课堂',
                    image: '/images/images-school/fourSec-img/four-menu-li6.png',
                    imagehover: '/images/images-school/fourSec-img/four-menu-h-li6.png',
                }],
                secList: [{
                    image: '/images/images-school/fourSec-img/four-sec-img1.png',
                    title: '1V1辅导',
                    subtitle: '一对一VIP互动模式，直播体验更完善',
                    text: '视频模式自由转换，家长省时省心；因材施教更有效，快速搭建您的私教课堂。',
                    label: [{
                        labeltitle: '1V1互动',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-1_01.png'
                    }, {
                        labeltitle: '连麦答疑',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-1_02.png'
                    }, {
                        labeltitle: '家长督课',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-1_03.png'
                    }, {
                        labeltitle: '多终端参与',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-1_04.png'
                    },]
                }, {
                    image: '/images/images-school/fourSec-img/four-sec-img2.png',
                    title: '1V16小班课',
                    subtitle: '小班课采用2-16人的强互动模式',
                    text: '最高支持16位学员同时开启音视频，高清画质，智能降噪，延迟达到业内较高水平，让师生零距离。',
                    label: [{
                        labeltitle: '视频连麦',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-2_01.png'
                    }, {
                        labeltitle: '文档白板',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-2_02.png'
                    }, {
                        labeltitle: '桌面共享',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-2_03.png'
                    }, {
                        labeltitle: '旁听监课',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-2_04.png'
                    },]
                }, {
                    image: '/images/images-school/fourSec-img/four-sec-img3.png',
                    title: '1V500大班课',
                    subtitle: '支持1V500人的大班课直播',
                    text: '集举手发言、聊天互动，点名签到等功能的多人课堂直播产品，还原真实线下课堂。',
                    label: [{
                        labeltitle: '点名/签到',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-3_01.png'
                    }, {
                        labeltitle: '举手发言',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-3_02.png'
                    }, {
                        labeltitle: '直播弹题',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-3_03.png'
                    }, {
                        labeltitle: '音视频直播',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-3_04.png'
                    },]
                }, {
                    image: '/images/images-school/fourSec-img/four-sec-img4.png',
                    title: '万人大直播',
                    subtitle: '承载上百万学员同时在线直播',
                    text: '提供高清流畅的互动直播画面，并支持红包打赏、投票问卷、聊天互动、录制回放。',
                    label: [{
                        labeltitle: '红包打赏',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-4_01.png'
                    }, {
                        labeltitle: '投票问卷',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-4_02.png'
                    }, {
                        labeltitle: '聊天互动',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-4_03.png'
                    }, {
                        labeltitle: '录制回放',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-4_04.png'
                    },]
                }, {
                    image: '/images/images-school/fourSec-img/four-sec-img5.png',
                    title: '双师课堂',
                    subtitle: '名师直播教学+线下辅导老师服务',
                    text: '基于网络互动视频直播技术，满足主讲老师远程线上直播授课，和辅导老师在课堂中的线下管理、答疑等需求。',
                    label: [{
                        labeltitle: '连麦互动',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-5_01.png'
                    }, {
                        labeltitle: '资源共享',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-5_02.png'
                    }, {
                        labeltitle: '教学工具',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-5_03.png'
                    }, {
                        labeltitle: '即开即用',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-5_04.png'
                    },]
                }, {
                    image: '/images/images-school/fourSec-img/four-sec-img6.png',
                    title: '空中课堂',
                    subtitle: '适合K12升学冲刺备考，初高中线上课堂',
                    text: '一体化的线上教学流程，可签到考勤，随堂检测上课效果，并通过视频连麦面对面答疑，保证教学最佳效果。',
                    label: [{
                        labeltitle: '签到考勤',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-6_01.png'
                    }, {
                        labeltitle: '随堂检测',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-6_02.png'
                    }, {
                        labeltitle: '白板画笔',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-6_03.png'
                    }, {
                        labeltitle: '数据统计',
                        labelimage: '/images/images-school/fourSec-img/label-images/label-6_04.png'
                    },]
                }]
            },
            fifBoxList: [
                {
                    image: '/images/images-school/fiveSec-img/sec-li-img1.png',
                    title: '课件形式',
                    text: '音频、视频、直播、图文、专栏等形式可供选择'
                },
                {
                    image: '/images/images-school/fiveSec-img/sec-li-img2.png',
                    title: '顺序学习',
                    text: '按照顺序学习课程/考试限制，达标后可继续学习'
                },
                {
                    image: '/images/images-school/fiveSec-img/sec-li-img3.png',
                    title: '随堂练习',
                    text: '设置每节课程后的随堂测试，巩固基础知识知识点'
                },
                {
                    image: '/images/images-school/fiveSec-img/sec-li-img4.png',
                    title: '章节自定义',
                    text: '设置课程章节自定义学习，提高学习效率'
                },
                {
                    image: '/images/images-school/fiveSec-img/sec-li-img5.png',
                    title: '视频笔记',
                    text: '随视频播放节点记笔记，通过记录跳转相应知识点'
                },
                {
                    image: '/images/images-school/fiveSec-img/sec-li-img6.png',
                    title: '视频弹题',
                    text: '视频教学过程中，不定时弹题，及时巩固学习效果'
                },
                {
                    image: '/images/images-school/fiveSec-img/sec-li-img7.png',
                    title: '倍速播放',
                    text: '视频课程播放速度可控，可以选择倍速播放'
                },
                {
                    image: '/images/images-school/fiveSec-img/sec-li-img8.png',
                    title: '课程答疑',
                    text: '学员对课程有问题时提问，老师或助教通过后台答疑'
                },
                {
                    image: '/images/images-school/fiveSec-img/sec-li-img9.png',
                    title: '资料下载',
                    text: '下载课程资料图谱，方便学员巩固学习内容'
                },
                {
                    image: '/images/images-school/fiveSec-img/sec-li-img10.png',
                    title: '学习进度',
                    text: '记录学员学习进度，讲师机构可通过后台查看'
                },
                {
                    image: '/images/images-school/fiveSec-img/sec-li-img11.png',
                    title: '分享收藏',
                    text: '课程可以设置分享收藏，方便课后查漏补缺'
                },
                {
                    image: '/images/images-school/fiveSec-img/sec-li-img12.png',
                    title: '课程评价',
                    text: '按照课程教学质量，星级对点播课程进行评价'
                },
            ],
            sixBoxList: [
                {
                    image: '/images/images-school/sixSec-img/six-sec-icon1.png',
                    title: '督学打卡',
                    text: '多种参与方式持续吸粉引流，通过课后督学任务完成营销拉新，提升课程完课率。',
                    texteng: 'CLOCK IN'
                },
                {
                    image: '/images/images-school/sixSec-img/six-sec-icon2.png',
                    title: '用户分群',
                    text: '将平台用户进行划分，帮助机构精细化定向运营，提高运营效果和平台转化。',
                    texteng: 'SWARM'
                },
                {
                    image: '/images/images-school/sixSec-img/six-sec-icon3.png',
                    title: '表单问卷',
                    text: '独立平台/班级用于发起问卷调研，自定义收集用户信息，分析用户画像。',
                    texteng: 'FORMS'
                },
                {
                    image: '/images/images-school/sixSec-img/six-sec-icon4.png',
                    title: '排课表',
                    text: '支持一对一、一对多、普通班课、滚班等排课模式，多维度课表展示，教师签到，课后作业。',
                    texteng: 'CURRICULUM'
                },
                {
                    image: '/images/images-school/sixSec-img/six-sec-icon5.png',
                    title: '趣味测试',
                    text: '通过简单趣味测试题，促进沉淀学员，根据测试结果给用户推荐定向课程、试卷、图书。',
                    texteng: 'TEST'
                },
                {
                    image: '/images/images-school/sixSec-img/six-sec-icon6.png',
                    title: '电子证书',
                    text: '通过证书发放为学员带来目标感，激励学员坚持完成学习、互动感等，引导学员分享传播引流。',
                    texteng: 'CERTIFICATE'
                },
            ],
            eigBoxList: [
                {
                    image: '/images/images-school/eigSec-img/eig-ban-img1.png',
                    title: '付费问答',
                    text: '提供学员进行问题付费提问的场所，可通过后台创建问题标签，设置旁听收益。'
                }, {
                    image: '/images/images-school/eigSec-img/eig-ban-img2.png',
                    title: '互动班级',
                    text: '课程对应生成班级，以班级为单位来布置作业，开展话题，督导活跃管理用户。'
                }, {
                    image: '/images/images-school/eigSec-img/eig-ban-img3.png',
                    title: '教务管理',
                    text: '将平台用户进行划分，帮助机构精细化定向运营，提高运营效果和平台转化。'
                }, {
                    image: '/images/images-school/eigSec-img/eig-ban-img4.png',
                    title: '免费直播',
                    text: '根据平台重点主打课程，或推荐课程做免费直播，通过免费直播拉新引流。'
                }, {
                    image: '/images/images-school/eigSec-img/eig-ban-img5.png',
                    title: '新闻资讯',
                    text: '设置热门，推荐等重要资讯信息，上传平台动态，行业资讯，最新新闻等。'
                }, {
                    image: '/images/images-school/eigSec-img/eig-ban-img6.png',
                    title: '教辅图书',
                    text: '通过后台设置教辅图书，可与课程关联，辅助课程进行售卖，提高平台销售量。'
                },
            ],
            nineBoxList: [
                {
                    image: '/images/images-school/nineSec-img/nine-li-img1.png',
                    title: '数据概况',
                    text: '核心数据深度剖析，为机构决策者提供数据支持'
                }, {
                    image: '/images/images-school/nineSec-img/nine-li-img2.png',
                    title: '订单管理',
                    text: '平台销售，充值，退费，赠送，分销流水记录'
                }, {
                    image: '/images/images-school/nineSec-img/nine-li-img3.png',
                    title: '流量数据',
                    text: '平台各时间段下的流量变化和分布情况'
                }, {
                    image: '/images/images-school/nineSec-img/nine-li-img4.png',
                    title: '交易数据',
                    text: '平台的交易趋势和交易成功分析，和其他支付数据分析'
                }, {
                    image: '/images/images-school/nineSec-img/nine-li-img5.png',
                    title: '用户数据',
                    text: '可看到平台用户的增长变化趋势和付费用户的成长变化趋势'
                }, {
                    image: '/images/images-school/nineSec-img/nine-li-img6.png',
                    title: '商品数据',
                    text: '平台所有的商品数量和各个类目下的top5'
                }
            ],
            tenBoxList: {
                menuTop: [{
                    image: '/images/images-school/tenSec-img/ten-menu-img1.png',
                    text: '需求对接'
                }, {
                    image: '/images/images-school/tenSec-img/ten-menu-img2.png',
                    text: '项目启动'
                }, {
                    image: '/images/images-school/tenSec-img/ten-menu-img3.png',
                    text: '视觉效果'
                }, {
                    image: '/images/images-school/tenSec-img/ten-menu-img4.png',
                    text: '测试'
                }],
                menuBtm: [{
                    image: '/images/images-school/tenSec-img/ten-menu-img5.png',
                    text: '签订合同'
                }, {
                    image: '/images/images-school/tenSec-img/ten-menu-img6.png',
                    text: '产品原型'
                }, {
                    image: '/images/images-school/tenSec-img/ten-menu-img7.png',
                    text: '研发'
                }, {
                    image: '/images/images-school/tenSec-img/ten-menu-img8.png',
                    text: '验收交付'
                }]
            },
            eleBoxList: [
                {
                    image: '/images/images-school/ele-sec-img1.png',
                    title: '商业授权',
                    text: '提供源码私有化部署，深度化定制，一次付费终生使用',
                    list: [{
                        listtitle: '1V1量身定制',
                        listtext: '支持根据机构需求的全套私有化定制及深度定制开发'
                    }, {
                        listtitle: '开放源码',
                        listtext: '提供系统源码及产品文档，方便机构自行扩展与二次开发'
                    }, {
                        listtitle: '陪伴式服务',
                        listtext: '签订长期战略合作伙伴关系，随时答疑解惑，响应平台技术支持'
                    }]
                },
                {
                    image: '/images/images-school/ele-sec-img2.png',
                    title: 'SaaS租赁',
                    text: '开通账号即可使用，无需部署和运维',
                    list: [{
                        listtitle: '开通即用',
                        listtext: '不需要考虑技术、运维，长期升级，即时享用新功能'
                    }, {
                        listtitle: '版权保护',
                        listtext: '签署保密协议，版权+数据保护、防黑客、容灾保护'
                    }, {
                        listtitle: '更省成本',
                        listtext: '无需组建技术团队、购买服务器，按网校使用量计费'
                    }]
                }
            ],
            username: '',
            usertel: '',
            userneed: '',
            popusername: '',
            popusertel: '',
            menuSec: '#home',
        }
    },
    created() {
        $(document).ready(function(){
            $(window).scrollTop(0)
        })
    },
    mounted() {
        let that = this;
        that.swiperEigList();
    },
    methods: {
        menuFourList(idx) {
            let that = this;
            that.fourListIndex = idx;
        },

        swiperEigList() {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 1,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        },

        openKfPopup(){
            window.open('https://tb.53kf.com/code/stat/e49613946bf78d7197f3af52fac2e1986/3','newwindow', 'toolbar=no,scrollbars=yes,location=no,resizable=no,top=200,left=300,width=800,height=600')
        },

        goAnchor(selector) {
            let that = this;
            that.menuSec = selector;
            console.log(that.menuSec)
            let windowWidth = document.body.clientWidth;
            let anchor = that.$el.querySelector(selector)
            let cale = 1;
            if(windowWidth <= 1700 && windowWidth > 1550){
                cale = 0.95;
            }else if(windowWidth <= 1550 && windowWidth > 1400){
                cale = 0.85;
            }else if(windowWidth <= 1400 && windowWidth > 1280){
                cale = 0.80;
            }else if(windowWidth <= 1280){
                cale = 0.75;
            }
            console.log(cale)
            console.log(windowWidth);
            console.log(anchor.offsetTop)
            let offsetTop = parseFloat(anchor.offsetTop * cale) - parseFloat(70 * cale);
            document.documentElement.scrollTop = offsetTop;
        },

        closePopup(){
            let that = this;
            that.popupSec = false;
        },

        openPopup(){
            let that = this;
            that.popupSec = true;
        },

        submitForm(num){
            let that = this;
            let username = that.username || that.popusername;
            let mobile = that.usertel || that.popusertel; 
            var pattern = /^1{1}[0-9]{10}$/;
            if(mobile==""){
                alert("请输入手机号!");
                return;
            } else {
                if (!pattern.test(mobile)) {
                    alert("请输入正确的手机号！");
                    return;
                }
            }	
            let requirement = '页面路径：' + window.location.href
            + '；页面来源：' + (num == 1 ? '推广页-网校页面-页面banner' : '推广页-网校页面-页面弹窗')
            + ((!that.userneed) ? '' : ('；备注需求：' + that.userneed)) 
    
            console.log(username);
            console.log(mobile);
            console.log(requirement)
            $.ajax({
                url : "http://tj.268xue.com/customer/apply!addApplyInfo.action",
                data : {
                    "user.userName":username,
                    "user.mobile":mobile,
                    "user.requirement":requirement
                },
                type : "post",
                dataType : "json",
                cache : false,
                async : false,
                success : function(result) {
                    console.log(1);
                    alert("提交成功！");
                    $(".mobile,.userName,.mobileSmall").val("");
                    that.username = ''; 
                    that.popusername = '';
                    that.usertel = '';
                    that.popusertel = ''; 
                    that.userneed = '';
                },
                error : function(error) {
                    console.log(2);
                    alert("提交成功！");
                    $(".mobile,.userName,.mobileSmall").val("");
                    that.username = ''; 
                    that.popusername = '';
                    that.usertel = '';
                    that.popusertel = ''; 
                    that.userneed = '';
                }
            });
        
        }

    }
})