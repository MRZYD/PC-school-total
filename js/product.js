var app = new Vue({
    el: '#app',
    data(){
        return{
            twoListIndex: 0,
            sixListIndex: 0,
            popupSec: false,
            oneBoxList: [
                {
                    image: '/images/images-prod/one-li-img1.png',
                    title: '认可268文化',
                    text: '认同268产品价值和文化理念 愿意跟268长期合作'
                },
                {
                    image: '/images/images-prod/one-li-img2.png',
                    title: '具有公司资质',
                    text: '有合作营业执照和独立法人代表 有良好商业信誉和口碑'
                },
                {
                    image: '/images/images-prod/one-li-img3.png',
                    title: '具有行业背景',
                    text: '有互联网背景，对教育行业、 Saas行业有了解'
                },
                {
                    image: '/images/images-prod/one-li-img4.png',
                    title: '具有客户资源',
                    text: '拥有当地丰富的企业及资源 或教育机构/老师资源'
                },
                {
                    image: '/images/images-prod/one-li-img5.png',
                    title: '具有销售团队',
                    text: '有专属且成熟的销售团队 负责人有团队管理经验'
                }
            ],
            twoBoxList: [
                {
                    image: '/images/images-prod/two-img1.png',
                    title: '提交申请',
                    numicon: '/images/images-prod/two-num1.png',
                },
                {
                    image: '/images/images-prod/two-img2.png',
                    title: '审核资料',
                    numicon: '/images/images-prod/two-num2.png',
                },
                {
                    image: '/images/images-prod/two-img3.png',
                    title: '洽谈合作',
                    numicon: '/images/images-prod/two-num3.png',
                },
                {
                    image: '/images/images-prod/two-img4.png',
                    title: '签约合作',
                    numicon: '/images/images-prod/two-num4.png',
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
            + '；页面来源：' + (num == 1 ? '推广页-产品代理-页面banner' : '推广页-产品代理-页面弹窗')
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