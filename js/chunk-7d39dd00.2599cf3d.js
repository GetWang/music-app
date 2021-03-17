(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d39dd00"],{"0ade":function(t,e,s){"use strict";var i=s("6f57"),n=s.n(i);n.a},5362:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music-list"},[s("div",{staticClass:"back",on:{click:t.back}},[s("i",{staticClass:"icon-back"})]),s("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),s("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[s("div",{ref:"filter",staticClass:"filter"}),s("div",{staticClass:"play-wrapper"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length > 0"}],ref:"playBtn",staticClass:"playBtn",on:{click:t.random}},[s("i",{staticClass:"icon-play"}),s("span",{staticClass:"text"},[t._v("随机播放全部")])])])]),s("div",{ref:"layer",staticClass:"bg-layer"}),s("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"probe-type":t.probeType,"listen-scroll":t.listenScroll},on:{scroll:t.scroll}},[s("div",{staticClass:"song-list-wrapper"},[s("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[s("loading")],1)])],1)},n=[],a=s("cebc"),c=s("99f1"),l=s("e9fc"),r=s("1cb8"),o=s("3e2c"),g=s("2f62"),f=s("510f"),h=30,u=Object(o["c"])("transform"),d=Object(o["c"])("backdrop-filter"),m={props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:-1}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTranslateHeight=-this.imageHeight+h,this.$refs.list.$el.style.top="".concat(this.imageHeight,"px")},computed:{bgStyle:function(){return"background-image: url(".concat(this.bgImage,")")}},mixins:[f["b"]],methods:Object(a["a"])({scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})},handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=e,this.$refs.list.refresh()},random:function(){this.randomPlay({list:this.songs})}},Object(g["b"])(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var e=Math.max(this.minTranslateHeight,t),s=0,i=1,n=0;this.$refs.layer.style[u]="translate3d(0, ".concat(e,"px, 0)");var a=Math.abs(t/this.imageHeight);t>0?(i=1+a,s=10,this.$refs.bgImage.style[u]="scale(".concat(i,")")):(n=Math.min(20*a,20),this.$refs.filter.style[d]="blur(".concat(n,"px)")),t<this.minTranslateHeight?(s=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="".concat(h,"px"),this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style.zIndex=s}},components:{SongList:c["a"],Scroll:l["a"],Loading:r["a"]}},p=m,b=(s("e187"),s("2877")),y=Object(b["a"])(p,i,n,!1,null,"c20ce6f0",null);e["a"]=y.exports},"53f8":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide"}},[s("music-list",{attrs:{title:t.title,"bg-image":t.bgImage,songs:t.songs}})],1)},n=[],a=(s("ac6a"),s("7f7f"),s("cebc")),c=s("5362"),l=s("2f62"),r=s("7f5c"),o=s("da71"),g=s("f5de"),f={data:function(){return{songs:[]}},computed:Object(a["a"])({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},Object(l["c"])(["singer"])),created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;this.singer.id?Object(r["a"])(this.singer.id).then(function(e){e.code===o["a"]&&(t.songs=t._normalizeSongs(e.data.list))}):this.$router.push("/singer")},_normalizeSongs:function(t){var e=[];return t.forEach(function(t){var s=t.musicData;s.songid&&s.albumid&&e.push(Object(g["a"])(s))}),e}},components:{MusicList:c["a"]}},h=f,u=(s("0ade"),s("2877")),d=Object(u["a"])(h,i,n,!1,null,"e383ace6",null);e["default"]=d.exports},"680d":function(t,e,s){},"6f57":function(t,e,s){},"7f5c":function(t,e,s){"use strict";s.d(e,"b",function(){return l}),s.d(e,"a",function(){return r});var i=s("5176"),n=s.n(i),a=s("5693"),c=s("da71");function l(){var t="https://c.y.qq.com/v8/fcg-bin/v8.fcg",e=n()({},c["b"],{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,platform:"yqq",needNewCode:0,loginUin:0,hostUin:0});return Object(a["a"])(t,e,c["c"])}function r(t){var e="https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",s=n()({},c["b"],{loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,singermid:t,order:"listen",begin:0,num:100,songstatus:1});return Object(a["a"])(e,s,c["c"])}},e187:function(t,e,s){"use strict";var i=s("680d"),n=s.n(i);n.a}}]);
//# sourceMappingURL=chunk-7d39dd00.2599cf3d.js.map