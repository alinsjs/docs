<template>
    <div class='home-wrapper'>
        <div class='title'>
            <img src='https://shiyix.cn/alins.png' alt=''>
        </div>
        <div class='desc'><span>Al</span>l-<span>in</span>-j<span>s</span> Web UI <span class="sub-desc">Framework</span></div>
        
        <div class='start-w'>
            <el-button type='primary' @click='start'>Get Started <i class='ei-location-arrow'></i></el-button>
            <el-button type='primary' @click='run'>Playground <i class='ei-cube-alt'></i></el-button>
            <el-button type='primary' @click='run'>Install <i class="ei-hand-up"></i></el-button>
        </div>
        <div class='feature-w'>
            <div class='f-i'>
                <a style='font-weight: normal;' href='/cnchar/guide/intro.html#_2-%E5%8A%9F%E8%83%BD'><div class='f-t'><i class='ei-rocket'></i>Reactive</div></a>
                <div class='f-des'>Reactive Data</div>
                <div class='f-des'>Computed/Watch</div>
                <div class='f-des'>Components</div>
                <div class='f-des'>No v-dom</div>
            </div>
            <div class='f-i'>
                <div class='f-t'><i class="ei-cogs"></i>Controllers</div>
                <div class='f-des'>For</div>
                <div class='f-des'>If/Show</div>
                <div class='f-des'>Switch</div>
                <div class='f-des'>Model</div>
            </div>
            <div class='f-i'>
                <div class='f-t'><i class="ei-paint-brush"></i>CSS In JS</div>
                <div class='f-des'>Reactive Css</div>
                <div class='f-des'>Reactive Style</div>
                <div class='f-des'>Atom Style</div>
                <div class='f-des'>Style Compose</div>
            </div>
        </div>
        <div class='copy-right'>MIT Licensed | Copyright © 2022 - present <a href='https://www.github.com/theajack' target='view_window'>theajack</a></div>
        <div id='comment'>

        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                loaded: false,
            };
        },
        mounted () {
            if (window.Alins) {
                this.loaded = true;
            } else {
                window.addEventListener('load', () => {
                    this.loaded = false;
                });
            }
        },
        methods: {
            start () {
                window.location.href = '/cnchar/guide/intro';
            },
            run () {
                window.open('https://theajack.github.io/jsbox/?github=theajack.cnchar@master');
            },
        },
    };
</script>

<style lang="less">
    .home-wrapper{
        text-align: center;
        .el-button--primary {
            font-weight: bold;
            font-size: 1rem;
        }
        img.logo{
            width: 100%;
            max-width: 240px;
        }
        .title{
            font-weight: bold;
            font-family: Microsoft Yahei;
            font-size: 3.5rem;
            margin-bottom: 10px;
            margin-top: 80px;
            img{
                width: 150px;
            }
        }
        .desc{
            font-family: sans-serif;
            font-weight: bold;
            font-size: 2.5rem;
            color: #ec5c2f;
            padding-bottom: 20px;
            // background: -webkit-linear-gradient(315deg,#ecd45a 25%,#ec5c2f);
            // background-clip: text;
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
            span{
                color:#ecd45a
            }
            .sub-desc{
                color:#349fd2;
            }
        }
        .test{
            margin: 1.4rem 0;
        }
        .feature-w{
            display: flex;
            justify-content: center;
            max-width: 1000px;
            margin: 0 auto;
            margin-bottom: 40px;
            margin-top: 20px;
            .f-i{
                align-items: center;
                width: 33.3333333%;
                padding: 0 10px;
                .f-t{
                    font-size: 1.3rem;
                    margin-bottom: 1rem;
                    color: #ec5c2f;
                    i{
                        margin-right: 4px;
                    }
                }
                .f-des{
                   line-height: 1.6rem;
                }
            }
        }
        .copy-right{
            margin-top: 1rem;
            color: #aaa;
            font-size: 0.9rem;
        }
        .btn-w{
            max-width: 1000px;
            padding: 0.5rem 0;
            margin: 0 auto;
        }
        .start-w{
            max-width: 1000px;
            padding: 1.5rem 0;
            border-top: 1px solid #eee;
            margin: 0 auto;
        }
        .el-button{
            // font-size: 1rem;
            // padding: 0.8rem 1.2rem;
        }
    }
</style>
