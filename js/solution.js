var app = new Vue({
    el: '#app',
    data(){
        return{
            thrListIndex: 0,
            sixListIndex: 0,
            popupSec: false,
            oneBoxList: [
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
            thrBoxList: {
                menuList: [{
                    title: '招生引流',
                    image: '/images/images-solution/thrSec-img/thr-menu-li1.png',
                    imagehover: '/images/images-solution/thrSec-img/thr-menu-h-li1.png',
                }, {
                    title: '品牌网校',
                    image: '/images/images-solution/thrSec-img/thr-menu-li2.png',
                    imagehover: '/images/images-solution/thrSec-img/thr-menu-h-li2.png',
                }, {
                    title: '直播教学',
                    image: '/images/images-solution/thrSec-img/thr-menu-li3.png',
                    imagehover: '/images/images-solution/thrSec-img/thr-menu-h-li3.png',
                }, {
                    title: '考试题库',
                    image: '/images/images-solution/thrSec-img/thr-menu-li4.png',
                    imagehover: '/images/images-solution/thrSec-img/thr-menu-h-li4.png',
                }, {
                    title: '互动班级',
                    image: '/images/images-solution/thrSec-img/thr-menu-li5.png',
                    imagehover: '/images/images-solution/thrSec-img/thr-menu-h-li5.png',
                }, {
                    title: '教务管理',
                    image: '/images/images-solution/thrSec-img/thr-menu-li6.png',
                    imagehover: '/images/images-solution/thrSec-img/thr-menu-h-li6.png',
                }],
                secList: [{
                    image: '/images/images-solution/thrSec-img/thr-sec-img1.png',
                    title: '招生引流',
                    subtitle: '搭建线上招生获客渠道，构建私域流量池',
                    text: '多种营销裂变工具自由组合，可跨渠道、跨终端帮助机构完成招生 引流全过程，全程数据追踪，提高转化率。',
                    label: [{
                        labeltitle: '六度人脉',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-1_01.png'
                    }, {
                        labeltitle: '拼团活动',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-1_02.png'
                    }, {
                        labeltitle: '裂变海报',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-1_03.png'
                    }, {
                        labeltitle: '优惠卡券',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-1_04.png'
                    },]
                }, {
                    image: '/images/images-solution/thrSec-img/thr-sec-img2.png',
                    title: '品牌网校',
                    subtitle: '独立网校构建教育机构品牌，覆盖多个流量生态',
                    text: '快速搭建独立网校平台，沉浸自己的学院用户，支持PC网页、微信、H5、网校APP、小程序等多种终端形式',
                    label: [{
                        labeltitle: '课程中心',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-2_01.png'
                    }, {
                        labeltitle: '讲师展示',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-2_02.png'
                    }, {
                        labeltitle: '在线直播',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-2_03.png'
                    }, {
                        labeltitle: '新闻资讯',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-2_04.png'
                    },]
                }, {
                    image: '/images/images-solution/thrSec-img/thr-sec-img3.png',
                    title: '直播教学',
                    subtitle: '满足各种在线教育直播场景，真是还原面授教学',
                    text: '支持实现视频直播，屏幕分享直播，分屏直播、直播回放，还原线下教学场景，师生互动零距离',
                    label: [{
                        labeltitle: '小班互动',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-3_01.png'
                    }, {
                        labeltitle: '大班直播',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-3_02.png'
                    }, {
                        labeltitle: '双师课堂',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-3_03.png'
                    }, {
                        labeltitle: '空中课堂',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-3_04.png'
                    },]
                }, {
                    image: '/images/images-solution/thrSec-img/thr-sec-img4.png',
                    title: '考试题库',
                    subtitle: '考试题库功能多样化，满足多种业务场景',
                    text: '自主研发纯B/S架构，针对机构/企业单位设计。满足多种业务场景，随时随地搞定考试，有效降低人工成本，效率高N倍',
                    label: [{
                        labeltitle: '课后练习',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-4_01.png'
                    }, {
                        labeltitle: '智能组卷',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-4_02.png'
                    }, {
                        labeltitle: '仿真考试',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-4_03.png'
                    }, {
                        labeltitle: '能力评估',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-4_04.png'
                    },]
                }, {
                    image: '/images/images-solution/thrSec-img/thr-sec-img5.png',
                    title: '互动班级',
                    subtitle: '轻量级互动问答社区，多项技术创新',
                    text: '课程对应生成班级，以班级为单位来布置作业，开展话题，督导活跃管理用户',
                    label: [{
                        labeltitle: '付费问答',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-5_01.png'
                    }, {
                        labeltitle: '班级制',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-5_02.png'
                    }, {
                        labeltitle: '话题圈子',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-5_03.png'
                    }, {
                        labeltitle: '论坛模式',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-5_04.png'
                    },]
                }, {
                    image: '/images/images-solution/thrSec-img/thr-sec-img6.png',
                    title: '教务管理',
                    subtitle: '深度融合推广、教务、网校形成闭环式服务',
                    text: '将平台用户进行划分，帮助机构精致细化定向运营，提高运营效果和平台转化',
                    label: [{
                        labeltitle: '排课约课',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-6_01.png'
                    }, {
                        labeltitle: '校区管理',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-6_02.png'
                    }, {
                        labeltitle: '讲师管理',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-6_03.png'
                    }, {
                        labeltitle: '运营管理',
                        labelimage: '/images/images-solution/thrSec-img/label-images/label-6_04.png'
                    },]
                }]
            },
            fourBoxList: [
                {
                    image: '/images/images-solution/fourSec-img/sec-li-img1.png',
                    title: '职业教育',
                    text: '会计 | HR | 心理 | 经济师 建造师 | 证券等'
                },
                {
                    image: '/images/images-solution/fourSec-img/sec-li-img2.png',
                    title: '成人学历',
                    text: '自学考试 | 高起专 | 专升本 成考自考 | 考研培训'
                },
                {
                    image: '/images/images-solution/fourSec-img/sec-li-img3.png',
                    title: '语言培训',
                    text: '英语四、六级 | 托福 雅思 韩语 | 日语等'
                },
                {
                    image: '/images/images-solution/fourSec-img/sec-li-img4.png',
                    title: 'K12教育',
                    text: '小学 | 初中 | 高中 学科培训 | 1对1'
                },
                {
                    image: '/images/images-solution/fourSec-img/sec-li-img5.png',
                    title: '兴趣教育',
                    text: '舞蹈 | 瑜伽 | 手动DIY美术 摄影 | 美妆 | 减肥健身'
                },
                {
                    image: '/images/images-solution/fourSec-img/sec-li-img6.png',
                    title: '学院学校',
                    text: '中小院校 | 大专院校 | 高等 院校 | 私立院校'
                },
                {
                    image: '/images/images-solution/fourSec-img/sec-li-img7.png',
                    title: '企业培训',
                    text: '金融 | 医疗 | 餐饮 | 制造 地产 | 服务 | 政府单位'
                },
                {
                    image: '/images/images-solution/fourSec-img/sec-li-img8.png',
                    title: '更多场景',
                    text: '出版社 | 司法 | 传媒'
                }
            ],
            fifBoxList: [
                {
                    image: '/images/images-solution/fifSec-img/fif-sec-icon1.png',
                    title: '需求对接',
                    text: '顾问式的需求、沟通确认、对需求给出合理的意见及建议',
                    id: 1,
                },
                {
                    image: '/images/images-solution/fifSec-img/fif-sec-icon2.png',
                    title: '签订合同',
                    text: '签订合同、项目周期、项目价格、保密协议',
                    id: 2,
                },
                {
                    image: '/images/images-solution/fifSec-img/fif-sec-icon3.png',
                    title: '项目启动',
                    text: '组织产品经理、UI设计师、开发工程师等人员发起会议，组建项目团队',
                    id: 3,
                },
                {
                    image: '/images/images-solution/fifSec-img/fif-sec-icon4.png',
                    title: '产品原型',
                    text: '制作原型图和客户确认',
                    id: 4,
                },
                {
                    image: '/images/images-solution/fifSec-img/fif-sec-icon8.png',
                    title: '验收交付',
                    text: '提供最终产品包，给客户验收交付',
                    id: 8,
                },
                {
                    image: '/images/images-solution/fifSec-img/fif-sec-icon7.png',
                    title: '测试',
                    text: '开发自测、测试部测试、销售部配合项目测试',
                    id: 7,
                },
                {
                    image: '/images/images-solution/fifSec-img/fif-sec-icon6.png',
                    title: '研发',
                    text: '项目研发结束，客户反馈后进行调整',
                    id: 6,
                },
                {
                    image: '/images/images-solution/fifSec-img/fif-sec-icon5.png',
                    title: '视觉效果',
                    text: '设计高保真视觉图与客户确认',
                    id: 5,
                },
                
            ],
            sixBoxList: {
                menuList: [{
                    title: '雄厚公司资质',
                    image: '/images/images-solution/sixSec-img/six-menu-li1.png',
                    imagehover: '/images/images-solution/sixSec-img/six-menu-h-li1.png',
                }, {
                    title: '敏锐行业前瞻',
                    image: '/images/images-solution/sixSec-img/six-menu-li2.png',
                    imagehover: '/images/images-solution/sixSec-img/six-menu-h-li2.png',
                }, {
                    title: '优质售后服务',
                    image: '/images/images-solution/sixSec-img/six-menu-li3.png',
                    imagehover: '/images/images-solution/sixSec-img/six-menu-h-li3.png',
                }],
                secList: [{
                    label: [{
                        labeltitle: '高新技术企业',
                        labeltext: '268教育获北京市高新技术企业认证。',
                        labelimage: '/images/images-solution/sixSec-img/label-images/label-1_01.png'
                    }, {
                        labeltitle: '10余年经验开发团队',
                        labeltext: '268团队自2009年起就一直致力于推进教育信息化发展，我们具备丰富的在线教育技术开发经验，对在线教育应用场景的痛点和需求有深刻的理解。',
                        labelimage: '/images/images-solution/sixSec-img/label-images/label-1_02.png'
                    }, {
                        labeltitle: '10余年在线教育技术积累',
                        labeltext: '团队服务过多家上市教育企业，无缝 解决市场运营、教学产品、平台技术层面的各种复杂场景问题。',
                        labelimage: '/images/images-solution/sixSec-img/label-images/label-1_03.png'
                    }, {
                        labeltitle: '30+软件著作权证书',
                        labeltext: '获30余款在线教育创新产品，自主知识产权软件著作权证书。',
                        labelimage: '/images/images-solution/sixSec-img/label-images/label-1_04.png'
                    },]
                }, {
                    label: [{
                        labeltitle: '5G在线教育布局',
                        labeltext: '继5G环境下4K直播测试成功落地，专为教育场景打造5G超高清课堂，充分发挥5G技术特性。',
                        labelimage: '/images/images-solution/sixSec-img/label-images/label-2_01.png'
                    }, {
                        labeltitle: '前沿开发技术',
                        labeltext: '适配市面主流的开发技术，全终端适配，使用更便捷，给您的用户提供良好的使用体验。',
                        labelimage: '/images/images-solution/sixSec-img/label-images/label-2_02.png'
                    }, {
                        labeltitle: 'AI+视频',
                        labeltext: '268与AI技术结合，准确挖掘用户行为特征，不断优化服务，提供场景化解决方案。',
                        labelimage: '/images/images-solution/sixSec-img/label-images/label-2_03.png'
                    }, {
                        labeltitle: '产品更新迭代',
                        labeltext: '每周均提供不同系统的功能点更新及优化，产品更新迅速，让您时刻立足行业前沿。',
                        labelimage: '/images/images-solution/sixSec-img/label-images/label-2_04.png'
                    },]
                }, {
                    label: [{
                        labeltitle: '强大售后团队',
                        labeltext: '强大的售前售后团队，配备专门的服务人员及技术人员1V1服务确保客户碰到的问题第一时间予以解决。',
                        labelimage: '/images/images-solution/sixSec-img/label-images/label-3_01.png'
                    }, {
                        labeltitle: '完美技术支持',
                        labeltext: '产品手册，交付文档，常见问题解决方案等服务文档一应俱全，为您提供完整的技术指导和行业支持，让你快速上手，轻松应对。',
                        labelimage: '/images/images-solution/sixSec-img/label-images/label-3_02.png'
                    }, {
                        labeltitle: '迅速响应服务',
                        labeltext: '电话、钉钉、工单...售后人员随时为您提供迅速响应服务，及时应对客户提出的一切运营、技术难题。',
                        labelimage: '/images/images-solution/sixSec-img/label-images/label-3_03.png'
                    }, {
                        labeltitle: '全方位服务',
                        labeltext: '微信、钉钉、电话等聊天工具全方位解答客户各种操作、技术难题，确保客户系统安全稳定。bug及时修复。',
                        labelimage: '/images/images-solution/sixSec-img/label-images/label-3_04.png'
                    }, {
                        labeltitle: '平台搭建部署全程指导',
                        labeltext: '为各平台的搭建部署提供全程指导，即便创业小白，268也能帮助您实现平台快速上线和运营。',
                        labelimage: '/images/images-solution/sixSec-img/label-images/label-3_05.png'
                    }, {
                        labeltitle: '更多增值服务',
                        labeltext: '268将与您协同配合、提出优质的解决方案，持续跟进用户反馈，满足您的多方位其他需求。',
                        labelimage: '/images/images-solution/sixSec-img/label-images/label-3_06.png'
                    },]
                }]
            },
            username: '',
            usertel: '',
            userneed: '',
            popusername: '',
            popusertel: '',
            menuSec: '#home',
        }
    },
    created() {},
    mounted() {},
    methods: {
        menuthrList(idx) {
            let that = this;
            that.thrListIndex = idx;
        },

        menusixList(idx) {
            let that = this;
            that.sixListIndex = idx;
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
            + '；页面来源：' + (num == 1 ? '推广页-行业解决方案-页面banner' : '推广页-行业解决方案-页面弹窗')
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