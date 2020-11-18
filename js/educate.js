var app = new Vue({
    el: '#app',
    data(){
        return{
            twoListIndex: 0,
            sixListIndex: 0,
            popupSec: false,
            oneBoxList: [
                {
                    image: '/images/images-edu/one-list-img1.png',
                    icon: '/images/images-edu/one-list-icon1.png',
                    title: '1.一站式教务管理平台',
                    text: '一站式管理平台，集成高校CRM、教务和OA管理系统于一体，简单、易用，降低学习使用成本'
                },
                {
                    image: '/images/images-edu/one-list-img2.png',
                    icon: '/images/images-edu/one-list-icon2.png',
                    title: '2.PC端、移动端全适配',
                    text: '多类型终端支持，不仅能够在PC端使用，还支持在移动端数据展示，让您随时随地掌握业务情况'
                },
                {
                    image: '/images/images-edu/one-list-img3.png',
                    icon: '/images/images-edu/one-list-icon3.png',
                    title: '3.多校区、多角色管理',
                    text: '按需自由管理角色权限功能，多校区、跨部门、多角色云端协同合作，分权限查看和管理数据，让工作更高效'
                }
            ],
            twoBoxList: [
                {
                    image: '/images/images-edu/two-li-img1.png',
                    title: '排课教务',
                    text: '智能分班排课，课程批量管理，补课、调班、加课安排'
                },
                {
                    image: '/images/images-edu/two-li-img2.png',
                    title: '课程管理',
                    text: '课程发布、下架、推荐、自动检测冲突、可视化调整'
                },
                {
                    image: '/images/images-edu/two-li-img3.png',
                    title: '学员管理',
                    text: '学员档案管理，报班选课，休学结业批量操作、一键完成'
                },
                {
                    image: '/images/images-edu/two-li-img4.png',
                    title: '自主预约课',
                    text: '选课列表开放年级、科目、时间、学员根据自己时间预课'
                },
                {
                    image: '/images/images-edu/two-li-img5.png',
                    title: '灵活消课',
                    text: '多场景签到，多课程通用，机构自定义消课规则'
                },
                {
                    image: '/images/images-edu/two-li-img6.png',
                    title: '上课通知',
                    text: '学员通知避免人工漏掉，系统提醒自动短信邮件通知上课'
                },
                {
                    image: '/images/images-edu/two-li-img7.png',
                    title: '老师管理',
                    text: '角色赋权排课量统计，教师考核及分配工作提供数据支撑'
                },
                {
                    image: '/images/images-edu/two-li-img8.png',
                    title: '财务管理',
                    text: '学员交费、退费、结转详细记录，工资提成自动统计'
                },
                {
                    image: '/images/images-edu/two-li-img9.png',
                    title: '数据报表',
                    text: '招生、学员、课消、市场、财务、 提供各类决策报表'
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
            + '；页面来源：' + (num == 1 ? '推广页-教务管理-页面banner' : '推广页-教务管理-页面弹窗')
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