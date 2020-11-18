var app = new Vue({
    el: '#app',
    data(){
        return{
            twoListIndex: 0,
            sixListIndex: 0,
            popupSec: false,
            oneBoxList: [
                {
                    image: '/images/images-one/one-list-img1.png',
                    title: '1.简单易用，一键开播',
                    label: ['界面直观，小白式交互，上手即用', '支持语音、实时视频、录播视频、PPT课件、图片等多种形式的直播教学', '讲师可使用白板画笔、屏幕共享等进行文档演示，操作简便']
                },
                {
                    image: '/images/images-one/one-list-img2.png',
                    title: '2.课堂实时互动，赋能多场景',
                    label: ['支持讲师同时和16名学员/嘉宾连麦实时互动，学员在线观看直播人数无上限', '支持多人的电子白板画笔，在直播画面上涂写勾画，方便高校讲课', '讨论区互动答疑，学员可实时讨论反馈问题，讲师同步回复答疑', '互动形式多样，课堂签到、实时答题、课后问卷等']
                },
                {
                    image: '/images/images-one/one-list-img3.png',
                    title: '3.全平台支持，系统无缝对接',
                    label: ['讲师可用电脑网页、iPad、APP、小程序随时随地便捷开课', '学员无需下载任何插件，直接通过扫码/直播链接进入云课堂，可通过电脑/手机/平板观看', '提供丰富的API及SDK，直播随心接入OA、网校、教务系统等用户业务系统']
                }
            ],
            twoBoxList: [
                {
                    image: '/images/images-one/twoSec-img/sec-li-img1.png',
                    imagehover: '/images/images-one/twoSec-img/sec-li-h-img1.png',
                    title: '音视频直播教学',
                    text: '支持音频/视频实景上课，音频、动作等实时传递，呈现真实课堂的教学环境'
                },
                {
                    image: '/images/images-one/twoSec-img/sec-li-img2.png',
                    imagehover: '/images/images-one/twoSec-img/sec-li-h-img2.png',
                    title: '发起点名/签到',
                    text: '老师发起点名，所有在教室内的学员签到；老师可导出学员到课名单，便于归档'
                },
                {
                    image: '/images/images-one/twoSec-img/sec-li-img3.png',
                    imagehover: '/images/images-one/twoSec-img/sec-li-h-img3.png',
                    title: '教学课件共享',
                    text: '支持展示PPT（静态和动效）、Word、PDF、PNG图片等教学课件；支持播放本地的音视频文件'
                },
                {
                    image: '/images/images-one/twoSec-img/sec-li-img4.png',
                    imagehover: '/images/images-one/twoSec-img/sec-li-h-img4.png',
                    title: '电子白板板书',
                    text: '直播教室白板支持画笔、几何图形擦除等操作，学员和老师均可书写增加教学效果的传递'
                },
                {
                    image: '/images/images-one/twoSec-img/sec-li-img5.png',
                    imagehover: '/images/images-one/twoSec-img/sec-li-h-img5.png',
                    title: '师生桌面共享',
                    text: '老师端可以共享电脑桌面内容，学员端可观看老师授课场景或观看老师共享内容'
                },
                {
                    image: '/images/images-one/twoSec-img/sec-li-img6.png',
                    imagehover: '/images/images-one/twoSec-img/sec-li-h-img6.png',
                    title: '直播弹题/测验',
                    text: '老师在线发布测验题，学生端进行答题检测，老师可查看测验结果，检查教室内学员是否认真听课'
                },
                {
                    image: '/images/images-one/twoSec-img/sec-li-img7.png',
                    imagehover: '/images/images-one/twoSec-img/sec-li-h-img7.png',
                    title: '学员举手发言',
                    text: '老师可点名学员回答问题，学生也可主动举手请求发言，课堂答疑实时高校'
                },
                {
                    image: '/images/images-one/twoSec-img/sec-li-img8.png',
                    imagehover: '/images/images-one/twoSec-img/sec-li-h-img8.png',
                    title: '课堂互动交流',
                    text: '支持老师、助教、学生三者相互文字、音视频交流讨论，实现师生课堂互动'
                },
                {
                    image: '/images/images-one/twoSec-img/sec-li-img9.png',
                    imagehover: '/images/images-one/twoSec-img/sec-li-h-img9.png',
                    title: '课程录制/回看',
                    text: '支持云端录制和本地录制，生成直播录制视频及云端回放链接，完全重现直播时的场景，便于学习复习及教学内容再次传播'
                },
                {
                    image: '/images/images-one/twoSec-img/sec-li-img10.png',
                    imagehover: '/images/images-one/twoSec-img/sec-li-h-img10.png',
                    title: '线上双师教学',
                    text: '通过分组直播及大小班转换功能，对学生进行分组教学，双师教学，让教学过程更加合理、高校'
                },
                {
                    image: '/images/images-one/twoSec-img/sec-li-img11.png',
                    imagehover: '/images/images-one/twoSec-img/sec-li-h-img11.png',
                    title: '多种观看方式',
                    text: '可通过链接、二维码、邀请码、付 费等多种形式、电脑、手机、iPad等多终端进入直播间观看'
                },
                {
                    image: '/images/images-one/twoSec-img/sec-li-img12.png',
                    imagehover: '/images/images-one/twoSec-img/sec-li-h-img12.png',
                    title: '直播运营管理',
                    text: '课程管理、老师管理、学员管理、上课数据管理等、精准掌控市场运营情况，为教学和市场的策略调整提供数据支撑'
                }
            ],
            thrBoxList: [
                {
                    image: '/images/images-one/thrSec-img/thr-sec-icon1.png',
                    title: '直播加载快延时低',
                    text: '延时低，抗网络抖动强，基于UDP私有协议、直播延时低于200ms/直播互动体验出色',
                },
                {
                    image: '/images/images-one/thrSec-img/thr-sec-icon2.png',
                    title: '多画质网络自适应',
                    text: '支持流畅、标清、高清、超清等多种清晰度选择，满足多样化视频播放质量要求，根据用户网络情况自由调整',
                },
                {
                    image: '/images/images-one/thrSec-img/thr-sec-icon3.png',
                    title: '弹性架构海量并发',
                    text: '经历实际考验的海量数据承载能力，整体架构支持弹性扩容，轻松支持万级到十万级的在线直播需求',
                },
                {
                    image: '/images/images-one/thrSec-img/thr-sec-icon4.png',
                    title: 'CDN加速稳定流畅',
                    text: '自建CDN网络并联多套知名CDN，覆盖各省市点，确保了用户在各种网络节点下的流畅观看体验',
                },
                {
                    image: '/images/images-one/thrSec-img/thr-sec-icon5.png',
                    title: '安全防护安心直播',
                    text: '随即混淆加密机制，伪装视频头链接，同时内嵌视频水印，跑马灯、LOGO等技术手段有效防止下载、录屏，保护课程版权',
                },
                {
                    image: '/images/images-one/thrSec-img/thr-sec-icon6.png',
                    title: '终身免费功能升级',
                    text: '定期版本迭代更新，直播解决方案不断升级，用户无需支付任何费用，免费使用所有升级功能',
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
            + '；页面来源：' + (num == 1 ? '推广页-教育直播-页面banner' : '推广页-教育直播-页面弹窗')
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