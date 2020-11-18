var app = new Vue({
    el: '#app',
    data(){
        return{
            twoListIndex: 0,
            sixListIndex: 0,
            popupSec: false,
            oneBoxList: [
                {
                    image: '/images/images-test/one-list-img1.png',
                    title: '1.方便快速，一键开启考试',
                    label: ['界面直观，小白式交互，上手即用', '快速批量导入试题，灵活组卷快速开始考试', '支持单选、多选、判断、填空、材料、综合题等多种题型']
                },
                {
                    image: '/images/images-test/one-list-img2.png',
                    title: '2.多方式评分，生成能力透析报告',
                    label: ['支持自主自评，客观题、填空题自动阅卷', '统计用户考试信息，根据考试数据生成能力透析报告', '随堂、课后、知识点、错题库练习，针对性强化训练提高效率']
                },
                {
                    image: '/images/images-test/one-list-img3.png',
                    title: '3.全平台支持，满足个性化需求',
                    label: ['电脑端、APP、微信、小程序多种方式参加考试', '拥有强大的考试并发负载能力，支持万人以上考生同时在线考试', '稳定健全的标准产品，适用于多场景考试，个性化的定制满足不同客户的需求']
                }
            ],
            twoBoxList: [
                {
                    imagebg: '/images/images-test/two-bg1.png',
                    imageicon: '/images/images-test/two-icon1.png',
                    title: '课后练习测评',
                    text: '提供练习模式，学完即考，巩固学习效果，还可记录学习进度，堪为教学利器'
                },
                {
                    imagebg: '/images/images-test/two-bg2.png',
                    imageicon: '/images/images-test/two-icon2.png',
                    title: '业务知识考核',
                    text: '支持新老员工、经销商业务知识培训和考核，提供阅卷、排名及分析，方便快捷'
                },
                {
                    imagebg: '/images/images-test/two-bg3.png',
                    imageicon: '/images/images-test/two-icon3.png',
                    title: '招聘培训考试',
                    text: '校园招聘、远程招聘、大规模招聘，再无时间、地点约束，高校筛选，HR必备'
                },
                {
                    imagebg: '/images/images-test/two-bg4.png',
                    imageicon: '/images/images-test/two-icon4.png',
                    title: '企业培训考试',
                    text: '适合各类大型企业开展安全生产、操作流程、技术规范等学习、培训及考核'
                },
                {
                    imagebg: '/images/images-test/two-bg5.png',
                    imageicon: '/images/images-test/two-icon5.png',
                    title: '知识竞赛考试',
                    text: '党政类知识竞赛，技能知识竞赛，校内知识竞赛等'
                },
                {
                    imagebg: '/images/images-test/two-bg6.png',
                    imageicon: '/images/images-test/two-icon6.png',
                    title: '医药机构考核',
                    text: '助力各类医院、医疗机构考核医 疗知识，规范业务操作流程，专业好用'
                },
                
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
        
    },
    mounted() {
        let that = this;
    },
    methods: {
        menutwoList(idx) {
            let that = this;
            that.twoListIndex = idx;
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
            + '；页面来源：' + (num == 1 ? '推广页-培训考试-页面banner' : '推广页-培训考试-页面弹窗')
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