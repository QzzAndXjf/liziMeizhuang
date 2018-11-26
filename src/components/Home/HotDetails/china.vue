<template>
	<div id="riben">
		<div class="header">
		  <i class="fa fa-arrow-left" aria-hidden="true" @click="goback"></i>
          <span>中国馆</span>
          <i class="fa fa-home" aria-hidden="true" @click="gohome"></i>
		</div>

		<div class="body">
            <img class="banner" :src="'https://images.weserv.nl/?url='+bannerImg" alt="">
            
			<ul>
				<li class="item_0" v-for="(item,index) in ribenDate" :key="index">
                    <a :data-itemnum="item.itemNum" @click="addCar(item)">
                        <p class="pic">
                        	<img :src="'https://images.weserv.nl/?url='+item.picUrl">
                        </p>
                        <h3>{{item.name}}</h3>
                        <p class="price">￥<em>{{item.nowPrice}}</em><span class="buybtn">立即购买</span></p>
                    </a>
                </li>
			</ul>	
		</div>

		<Bottom></Bottom>
		<GoTop></GoTop>
	</div>
</template>

<script>
	import Axios from 'axios';
	import Bottom from "../commons/Bottom.vue";
	import GoTop from "../commons/GoTop.vue";


	export default{
	name:'riben',
	components:{Bottom,GoTop},
    data(){
    	return {
            bannerImg:this.$route.query.itemMsg.picUrl,
    		ribenDate :[ 
							{
                                "id": "554dae87e4b0a4e489d1cc17",
                                "itemNum":"455555552",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/1797421def129.jpg",
                                "nowPrice": "68.00",
                                "oldPrice":"88.00", //marketPrice
                                "liziPrice":"68.00", //price
                                "name": "日本花王Biore碧柔清爽水感保湿防晒乳液防晒霜SPF50/50g 17年新版",
                                "description": "清爽不油腻，防晒同时还能为肌肤补充日晒流失的水分。SPF50+PA++++超强防晒黑防晒伤，也可当妆前隔离使用，用普通洗面奶就可以洗掉，无需卸妆。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae52e4b0a4e489d1bb73",
                                "itemNum":"587138712",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/34043d1ace8e9.jpg",
                                "nowPrice": "69.00",
                                "oldPrice":"142.00", //marketPrice
                                "liziPrice":"69.00", //price
                                "name": "日本CANMAKE井田棉花糖美颜控油蜜粉饼10g 控油定妆哑光光泽",
                                "description": "霓虹妹子都在用的美颜蜜粉饼，粉质细腻，能很好的遮盖毛孔和细小的纹理。不含香料和矿物油，用完后整张脸像打了一层柔光，打造全亚光雾面妆感。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae79e4b0a4e489d1c73d",
                                "itemNum":"506260634",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/c3ad2ebf4893.jpg",
                                "nowPrice": "95.00",
                                "oldPrice":"150.00", //marketPrice
                                "liziPrice":"95.00", //price
                                "name": "日本Freeplus芙丽芳丝氨基酸净润洗面霜100g 温和清洁",
                                "description": "明☆洁面 温和低刺激 水润不紧绷",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae79e4b0a4e489d1c749",
                                "itemNum":"510391034",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/22fa5b2ce660c.jpg",
                                "nowPrice": "49.00",
                                "oldPrice":"88.00", //marketPrice
                                "liziPrice":"49.00", //price
                                "name": "日本OPERA娥佩兰薏仁水嫩白爽肤水500ml 保湿补水嫩白肌肤",
                                "description": "平价版健康水",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae3ee4b0a4e489d1b3d7",
                                "itemNum":"712021201",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e5518962ed1d.jpg",
                                "nowPrice": "79.00",
                                "oldPrice":"157.00", //marketPrice
                                "liziPrice":"79.00", //price
                                "name": "日本sofina苏菲娜防晒隔离妆前乳spf25/pa++ 控油款/滋润款",
                                "description": "实力小粉瓶",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae43e4b0a4e489d1b5c1",
                                "itemNum":"648514846",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/c3923d89f361.jpg",
                                "nowPrice": "99.00",
                                "oldPrice":"173.00", //marketPrice
                                "liziPrice":"99.00", //price
                                "name": "日本Dr.Ci:Labo城野医生LaboLabo毛孔收缩水100ml",
                                "description": "清清爽爽收毛孔",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554daea4e4b0a4e489d1d7f8",
                                "itemNum":"233273360",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/28a66abe95acc.jpg",
                                "nowPrice": "69.00",
                                "oldPrice":"104.00", //marketPrice
                                "liziPrice":"69.00", //price
                                "name": "日本Kiss me奇士美花漾美姬泪眼防水细眼线液笔0.1mm 防汗防泪防晕染",
                                "description": "笔触软硬适中 笔尖细 好操控 快干防晕",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "56e2299ee4b045af00df8294",
                                "itemNum":"14941",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/dc7494a18a8.jpg",
                                "nowPrice": "575.00",
                                "oldPrice":"850.00", //marketPrice
                                "liziPrice":"575.00", //price
                                "name": "日本CPB珂丽柏蒂肌肤之钥沁肌紧肤蜜水磨精华液170ml 细致毛孔去闭口",
                                "description": "光滑细腻",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "56e2327fe4b0faa85125be56",
                                "itemNum":"14944",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/1790e259bc287.jpg",
                                "nowPrice": "1499.00",
                                "oldPrice":"2238.00", //marketPrice
                                "liziPrice":"1499.00", //price
                                "name": "日本ReFa Carat 铂金微电流滚轮美容仪 按摩V脸瘦脸神器",
                                "description": "很畅销的瘦脸神器，脸部使用后的效果是皮肤更加紧致，提拉抗衰老，胖脸使用后更加尖细以达到瘦脸目的~产品也可用于身体各个局部想要减肥的局部部位~",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae7de4b0a4e489d1c8cc",
                                "itemNum":"495779573",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/179b21b7f98c8.jpg",
                                "nowPrice": "85.00",
                                "oldPrice":"159.00", //marketPrice
                                "liziPrice":"89.00", //price
                                "name": "日本Nursery肌肤舒缓卸妆乳啫喱柚子味 清洁",
                                "description": "质地是柔和清爽的啫喱，清洁力媲美卸妆油，还含有透明质酸呵护整个清洁过程。它诠释了&quot;护肤从卸妆开始&quot;。后续可以不再洁面，懒妹妹必败！",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "58465a30e4b04b5477e64b95",
                                "itemNum":"16975",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/68ba5d79955f.jpg",
                                "nowPrice": "315.00",
                                "oldPrice":"650.00", //marketPrice
                                "liziPrice":"315.00", //price
                                "name": "日本CPB肌肤之钥钻石光感透白清爽保湿防晒隔离霜妆前乳 国际版",
                                "description": "为您的肌肤塑造理想上妆准备。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "5ad00cfde4b0014dfdb67004",
                                "itemNum":"18748",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e573e29e0eeb.jpg",
                                "nowPrice": "198.00",
                                "oldPrice":"250.00", //marketPrice
                                "liziPrice":"198.00", //price
                                "name": "日本资生堂ELIXIR怡丽丝尔 优悦活颜防晒霜精华乳SPF30+35ml",
                                "description": "美容博主推荐！无数口碑好评！满足你对防晒的所有需求，不搓泥！不拔干！不油腻！不仅有PA++++级防晒力，更是兼具乳液、隔离效果，对于防晒，这一支就够了！",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "557a55b8e4b08ae8ac03f33f",
                                "itemNum":"10408",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/34051065d0180.jpg",
                                "nowPrice": "55.00",
                                "oldPrice":"104.00", //marketPrice
                                "liziPrice":"55.00", //price
                                "name": "日本ALOVIVI卸妆皇后四效合一卸妆液500ml 温和无酒精深层洁净",
                                "description": "四效合一～卸妆、洗脸、保湿、低敏(擦拭型)无酒精、香料、色素、无油、低刺激，温和对待肌肤，轻轻一擦，就能卸除脸部彩妆，连顽固的睫毛膏、假睫毛胶、眼线妆都能轻松卸除，同时滋养睫毛。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae4ee4b0a4e489d1b992",
                                "itemNum":"593769391",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/1793dd10de821.jpg",
                                "nowPrice": "55.00",
                                "oldPrice":"110.00", //marketPrice
                                "liziPrice":"55.00", //price
                                "name": "日本CANMAKE井田花瓣雕刻五色带刷腮红胭脂6g 粉质细腻易上色",
                                "description": "塑造日系模特的朦胧妆感",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae4de4b0a4e489d1b95c",
                                "itemNum":"593769393",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/68a91a8b5fdf.jpg",
                                "nowPrice": "50.00",
                                "oldPrice":"98.00", //marketPrice
                                "liziPrice":"50.00", //price
                                "name": "日本CANMAKE井田玩美雕刻裸色5色眼影盘眼影盒 裸妆烟熏酒红 19年2月",
                                "description": "随手一化 秒变日系萌妹",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae4be4b0a4e489d1b8bb",
                                "itemNum":"598769878",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/22f5a42caf54d.jpg",
                                "nowPrice": "49.00",
                                "oldPrice":"96.00", //marketPrice
                                "liziPrice":"49.00", //price
                                "name": "日本Bifesta漫丹眼唇水油分离卸妆液145ml 温和一抹即净曼丹",
                                "description": "卸得干净、清爽不糊眼、低刺激性，好用不贵白菜价。一般的眼影、眼线、口红、睫毛膏都能一抹即净，无香料、无色素、无防腐剂，唇部也可安心使用。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554daeb1e4b0a4e489d1def9",
                                "itemNum":"132563255",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e52a77163eb1.jpg",
                                "nowPrice": "210.00",
                                "oldPrice":"389.00", //marketPrice
                                "liziPrice":"218.00", //price
                                "name": "日本SHISEIDO资生堂安耐晒防晒露升级版60ml 防水防汗",
                                "description": "大名鼎鼎的安耐晒金瓶，夏天去海边应该人手一个的选择。全新配方，持久阻挡各波段紫外线，给予肌肤严密的保护；长达12小时超效防晒，具有极强的耐水性，汗水、泪水、海水、油脂，统统都不惧怕！",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554daea5e4b0a4e489d1d844",
                                "itemNum":"217751801",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/289d36d03fb4a.jpg",
                                "nowPrice": "47.00",
                                "oldPrice":"94.00", //marketPrice
                                "liziPrice":"52.00", //price
                                "name": "日本SHISEIDO资生堂Fino墙效渗透改善发质滋养护发膜230g",
                                "description": "Te别适用于经常烫染、头发干枯毛躁的MM。留住水分，修护受损发质，让秀发充满光泽，而且能保持染过的头发的色泽",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "5705d05be4b0f98fcd2d07b0",
                                "itemNum":"15273",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/c39e5a01af16.jpg",
                                "nowPrice": "89.00",
                                "oldPrice":"141.00", //marketPrice
                                "liziPrice":"89.00", //price
                                "name": "日本Rohto乐敦CC美容精华液20ml 嫩白淡化色素呿痘印",
                                "description": "VC高渗透嫩白淡化色素 呿痘印",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae73e4b0a4e489d1c57d",
                                "itemNum":"525992600",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/11e83e1f6b873.jpg",
                                "nowPrice": "63.00",
                                "oldPrice":"119.00", //marketPrice
                                "liziPrice":"66.00", //price
                                "name": "日本Kanebo嘉娜宝KATE三色造型立体眉粉饼/眉粉3g 持久上色",
                                "description": "三种颜色由浅到深过渡，符合眉毛由浅到深的变化。浅色画鼻影效果qiao棒。自带的小刷子取粉非常方便，软的那头沾浅色用来画眉头。刷子硬的那头，用来画眉毛的中间，和尾部。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae95e4b0a4e489d1d0aa",
                                "itemNum":"422922293",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/d2df9285eed.jpg",
                                "nowPrice": "45.00",
                                "oldPrice":"90.00", //marketPrice
                                "liziPrice":"45.00", //price
                                "name": "日本花王Biore碧柔花王蜜妮深层卸妆乳180ml 温和保湿深层清洁",
                                "description": "多元卸妆配方，轻柔卸除毛孔内以及肌肤纹理间的彩妆和污垢；弱酸性水洗卸妆，温和不刺激，带给肌肤清爽的透气感；卸妆同时洗脸，简单方便~",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "5940a0c0e4b0cf8dbecd17ab",
                                "itemNum":"17841",
                                "picUrl": "http://img.lizi.com/lizi/store/558144dfe4b0138aad41c47e/22f50cf2734c4.jpg",
                                "nowPrice": "65.00",
                                "oldPrice":"79.00", //marketPrice
                                "liziPrice":"65.00", //price
                                "name": "日本缤若诗Bifesta面部洁肤卸妆水卸妆液眼唇免洗型绿茶300ml",
                                "description": "绿款：清爽型-收紧毛孔，适合油性和混合型肌  粉款：紧致型-肌肤细致，适合各种肌   蓝款：提亮型-抹走暗沉，适合想要嫩白肌",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "593cffc7e4b0a0e614540fe8",
                                "itemNum":"17824",
                                "picUrl": "http://img.lizi.com/lizi/store/55a61c98e4b074f5824b95ec/1d45d97bd6001.jpg",
                                "nowPrice": "69.00",
                                "oldPrice":"69.00", //marketPrice
                                "liziPrice":"69.00", //price
                                "name": "香港直邮【119元两盒】日本MANDOM曼丹婴儿补水滋润透明蛋白面膜5片装",
                                "description": "日本曼丹婴儿面膜，共三个规格，不添加任何香料，能够chang效锁水，紧致肌肤，想要sheng层补水的MM们的福音哦~使得肌肤恢复细腻平滑~敷完不会觉得黏腻，皮肤摸起来还水水润润的！赶紧入手吧~~",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "56c52007e4b019476f966842",
                                "itemNum":"14839",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/22f1542d5c7e7.jpg",
                                "nowPrice": "719.00",
                                "oldPrice":"980.00", //marketPrice
                                "liziPrice":"719.00", //price
                                "name": "日本CPB珂丽柏蒂肌肤之钥钻光粉底液30ml",
                                "description": "亮泽薄透的粉底液，轻松打造动人光耀的自然妆容。让你的肌肤如笼上一抹水缎熠熠生輝，肌理自然细腻，每个角度都折射出多样光芒。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae4be4b0a4e489d1b8a2",
                                "itemNum":"598769883",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/22f7978a5cda4.jpg",
                                "nowPrice": "85.00",
                                "oldPrice":"136.00", //marketPrice
                                "liziPrice":"85.00", //price
                                "name": "日本KAO花王蒸汽眼罩  消除眼睛疲劳去黑眼圈",
                                "description": "舒缓疲劳、保护视力、改善失眠。单片都有独立的真空包装，带上之后，会暖暖的产生40&deg;左右的热度，让眼睛也能做SPA。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae98e4b0a4e489d1d167",
                                "itemNum":"415961600",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/1d47660927664.jpg",
                                "nowPrice": "19.00",
                                "oldPrice":"88.00", //marketPrice
                                "liziPrice":"19.00", //price
                                "name": "日本Shiseido资生堂六角眉笔1.2g 防水防汗自然不晕染",
                                "description": "色泽自然 质感柔滑",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae3ce4b0a4e489d1b2ac",
                                "itemNum":"730933088",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/689f2ad01189.jpg",
                                "nowPrice": "78.00",
                                "oldPrice":"185.00", //marketPrice
                                "liziPrice":"78.00", //price
                                "name": "日本Kanebo嘉娜宝KATE骨干重塑 3+1眼影 2.2g 显色持久",
                                "description": "美妆博主推荐平价好用的眼影盘。粉质软糯，非常显色。此眼影以大地色为主，新手方便上装。右一的鼻影色都挺实用，和kate眉粉里带的很像，真的算得上是kate的当家花旦啦！",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae7ce4b0a4e489d1c8b6",
                                "itemNum":"494489464",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/11e6a8c43505a.jpg",
                                "nowPrice": "65.00",
                                "oldPrice":"104.00", //marketPrice
                                "liziPrice":"65.00", //price
                                "name": "日本Esthe Dew伊诗露药用美容院级胎盘素化妆水500ml 保湿",
                                "description": "质地清爽透明，不会有黏糊糊的感觉，敷脸的效果极好，给予肌肤喝饱水的感觉。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae3fe4b0a4e489d1b468",
                                "itemNum":"707420736",
                                "picUrl": "http://img.lizi.com/c2ceec8a0868.jpg",
                                "nowPrice": "69.00",
                                "oldPrice":"110.00", //marketPrice
                                "liziPrice":"69.00", //price
                                "name": "日本CANMAKE井田新款三色遮瑕膏SPF50 保湿防晒遮黑眼圈痘印斑点",
                                "description": "平价版IPSA三色遮瑕~遮瑕膏比普通粉底更具遮盖力，遮黑眼圈、红色粉刺印、雀斑等等都适合。而且使用非常方便，贴合肌肤，持久不易脱妆。粉质细腻密度较高，搽上薄薄一层就足够了。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "567ba334e4b0de9b3e18cf71",
                                "itemNum":"14553",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/68254da82fca.jpg",
                                "nowPrice": "589.00",
                                "oldPrice":"872.00", //marketPrice
                                "liziPrice":"589.00", //price
                                "name": "日本CPB肌肤之钥贝壳高光粉饼立体修容高光粉10g 19年7月到期",
                                "description": "cpb高光比较特别的是含有蓝紫珠光，和普通的单一珠光相比，显得肤色很白净，而且不显毛孔底色看上去浅，上脸珠光的感觉比较多打造钻石名媛肌必备的一块！粉很细啊，刨去上面那层亮粉后用起来非常自然细腻",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae49e4b0a4e489d1b7e6",
                                "itemNum":"598769948",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/1798c1bdd7275.jpg",
                                "nowPrice": "65.00",
                                "oldPrice":"98.00", //marketPrice
                                "liziPrice":"65.00", //price
                                "name": "日本KISS ME花漾美姬奇士美防水不晕染黑色睫毛膏6g",
                                "description": "COSME大赏第一名！",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae7be4b0a4e489d1c866",
                                "itemNum":"496969692",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/179d3e617cf9e.png",
                                "nowPrice": "79.00",
                                "oldPrice":"120.00", //marketPrice
                                "liziPrice":"79.00", //price
                                "name": "日本Esthe Dew伊诗露樱桃精华高保湿化妆水/爽肤水500ml保湿嫩白",
                                "description": "这款爽肤水质地非常清透，不会有黏黏的感觉，它添加了西印度樱桃精华，所以闻上去是一种淡淡的果香，用它来敷脸做水膜的话太合适不过了，还有很好的消暗沉功效噢。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "55dd7328e4b0019cdbaa4098",
                                "itemNum":"12579",
                                "picUrl": "http://img.lizi.com/lizi/store/558144dfe4b0138aad41c47e/68444d44abda.jpg",
                                "nowPrice": "65.00",
                                "oldPrice":"88.00", //marketPrice
                                "liziPrice":"65.00", //price
                                "name": "CANMAKE/井田三色遮瑕膏 提亮防晒遮黑眼圈/痘印/斑点",
                                "description": "canmake也出遮瑕盘啦！ 三色搭配，可以随意搭配调和出适合自己肤色的遮瑕！ 浅色还可以用于嘴角、法令线的提亮。 痘印和黑眼圈一盒就可以搞定！带防晒值的遮瑕膏，自带小镜子和刷子",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "559f6f71e4b0330c410ae1d3",
                                "itemNum":"10743",
                                "picUrl": "http://img.lizi.com/lizi/store/558144dfe4b0138aad41c47e/289b6170a0d3c.jpg",
                                "nowPrice": "59.00",
                                "oldPrice":"79.00", //marketPrice
                                "liziPrice":"59.00", //price
                                "name": "日本药妆开架NO.1 黑龙堂卸妆油 眼部 眼唇可用 深层清洁250ml",
                                "description": "这款黑龙堂最大的亮点就是性价比超高，卸妆效果可与FANCL相比，价格上便宜了一半，250ml大容量想咋卸就咋卸，与凡茜相比，在卸眼妆的时候对眼睛的刺激更小，比DHC更温和，乳化效果很好！",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae4ae4b0a4e489d1b85a",
                                "itemNum":"598769953",
                                "picUrl": "http://img.lizi.com/67b7aaae0c8a.jpg",
                                "nowPrice": "45.00",
                                "oldPrice":"72.00", //marketPrice
                                "liziPrice":"45.00", //price
                                "name": "日本Albion奥尔滨清新莹白渗透乳200g 补水保湿去闭口",
                                "description": "平衡保湿",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae4ee4b0a4e489d1b977",
                                "itemNum":"593769392",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e4c67cc89ba9.jpg",
                                "nowPrice": "35.00",
                                "oldPrice":"88.00", //marketPrice
                                "liziPrice":"35.00", //price
                                "name": "日本CANMAKE井田高保湿防晒持久滋润唇膏3g 保湿滋润",
                                "description": "既是唇膏又是口红",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "57d522f4e4b04b24d4115197",
                                "itemNum":"16518",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/c3923d551fbf.jpg",
                                "nowPrice": "150.00",
                                "oldPrice":"344.00", //marketPrice
                                "liziPrice":"158.00", //price
                                "name": "日本城野医生labolabo黑头角栓毛孔对策化妆水200ml",
                                "description": "清清爽爽收毛孔",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "596323a7e4b0cfc02b05cefb",
                                "itemNum":"18196",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/28a49238824cb.jpg",
                                "nowPrice": "292.00",
                                "oldPrice":"390.00", //marketPrice
                                "liziPrice":"292.00", //price
                                "name": "日本CPB肌肤之钥钻光黑管唇釉 奢华艳光液体唇彩口红",
                                "description": "似平淡无奇涂抹瞬间令人惊艳，大人的妩媚显露无疑，仿佛唤起官能感受的色泽。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae70e4b0a4e489d1c4a0",
                                "itemNum":"533133314",
                                "picUrl": "http://img.lizi.com/kauu/DjWwEfAB/13ALKO.jpg",
                                "nowPrice": "29.90",
                                "oldPrice":"29.90", //marketPrice
                                "liziPrice":"29.90", //price
                                "name": "日本Mentholatum曼秀雷敦天然植物润唇膏4g滋润",
                                "description": "天然蜂蜡配方 温和保湿",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "57bfe269e4b0b26d6f945618",
                                "itemNum":"16483",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/db8cf3c4d33.jpg",
                                "nowPrice": "298.00",
                                "oldPrice":"399.00", //marketPrice
                                "liziPrice":"298.00", //price
                                "name": "日本Cosme Decorte黛珂白檀舞蝶丝绒蜜粉散粉20g",
                                "description": "粉质细腻 淡淡花香",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "58575a29e4b02bc0565890e6",
                                "itemNum":"17016",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e51357e7a9ea.png",
                                "nowPrice": "92.00",
                                "oldPrice":"92.00", //marketPrice
                                "liziPrice":"92.00", //price
                                "name": "日本惠之本铺素温泉水面膜玻尿酸保湿毛孔修复面膜5片装",
                                "description": "无香料、无色素、不添加防腐剂、无矿物油、不添加酒精",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "5785ee2de4b06e4233bd972b",
                                "itemNum":"16172",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/33fe673ea6bdf.jpg",
                                "nowPrice": "22.00",
                                "oldPrice":"51.00", //marketPrice
                                "liziPrice":"22.00", //price
                                "name": "日本DAISO大创嫩白保湿晒后修护淡化精华液30ml  提亮保湿",
                                "description": "黄皮救星",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "55c45cc7e4b082835790f31b",
                                "itemNum":"11956",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/680956cde746.jpg",
                                "nowPrice": "158.00",
                                "oldPrice":"219.00", //marketPrice
                                "liziPrice":"158.00", //price
                                "name": "日本shu uemura植村秀专业型砍刀眉笔4g 防水易上色",
                                "description": "此眉笔拥有最佳的硬度，让你轻轻自如地描绘出心目中理想的眉型。它备有多种柔和的颜色，让你能准确地调就出最喜爱的眉色。塑造自然的眉妆。将笔端削尖后，可为眉妆增添细致的层次感。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae49e4b0a4e489d1b815",
                                "itemNum":"598769961",
                                "picUrl": "http://img.lizi.com/2e45db66a7721.jpg",
                                "nowPrice": "59.00",
                                "oldPrice":"74.00", //marketPrice
                                "liziPrice":"59.00", //price
                                "name": "日本CANMAKE井田浓密睫毛增长液5ml 修护纤长更浓密",
                                "description": "COSME冠军，早晚都可以使用，给睫毛补充营养。可当透明睫毛膏使用，刷上之后再用睫毛夹定型，即可以拉长卷翘睫毛，同时又可以养护睫毛~",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "58acfc4ce4b0f7ea48a532cb",
                                "itemNum":"17172",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/22f3a47dff24b.jpg",
                                "nowPrice": "299.00",
                                "oldPrice":"309.00", //marketPrice
                                "liziPrice":"299.00", //price
                                "name": "日本LUNASOL日月晶彩光透美肌眼影采巧克力猫眼石红宝石眼影6.7g",
                                "description": "光透美肌眼影",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "5815ca5fe4b0c9e0bdaf71b5",
                                "itemNum":"16729",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/68ad40648e11.jpg",
                                "nowPrice": "65.00",
                                "oldPrice":"110.00", //marketPrice
                                "liziPrice":"65.00", //price
                                "name": "日本OPERA娥佩兰薏仁精华啫喱面霜180g",
                                "description": "薏仁水的cp好搭档",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae75e4b0a4e489d1c64a",
                                "itemNum":"517521783",
                                "picUrl": "http://img.lizi.com/67d4d7e9cf16.jpg",
                                "nowPrice": "64.90",
                                "oldPrice":"104.00", //marketPrice
                                "liziPrice":"64.90", //price
                                "name": "日本SHISEIDO资生堂MOILIP药用润唇膏8g 保湿滋润治唇炎",
                                "description": "拯救干燥 告别唇炎",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554daec1e4b0a4e489d1e961",
                                "itemNum":"59325935",
                                "picUrl": "http://img.lizi.com/kauu/BlV4jfbz/fM3Ak.jpg",
                                "nowPrice": "45.00",
                                "oldPrice":"125.00", //marketPrice
                                "liziPrice":"49.00", //price
                                "name": "日本SHISEIDO资生堂美润护手霜100g（渗透滋养型）改善粗糙保湿滋润",
                                "description": "改善手部粗糙 保湿滋润",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "56eb74c7e4b00c5b375b6295",
                                "itemNum":"15005",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/22ef5afef619c.jpg",
                                "nowPrice": "29.90",
                                "oldPrice":"48.00", //marketPrice
                                "liziPrice":"29.90", //price
                                "name": "日本DAISO大创眉毛无色定型液眉毛雨衣6ml防水防脱妆",
                                "description": "给眉妆穿上一款隐形雨衣",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554daebee4b0a4e489d1e719",
                                "itemNum":"71657165",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/34045c4549725.jpg",
                                "nowPrice": "152.00",
                                "oldPrice":"200.00", //marketPrice
                                "liziPrice":"152.00", //price
                                "name": "日本freeplus芙丽芳丝保湿修护柔润乳液（滋润型）100ml",
                                "description": "修护调理肌肤 锁水保湿",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "56e22caae4b0faa85125bb0d",
                                "itemNum":"14942",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/c32804318e2a.jpg",
                                "nowPrice": "328.00",
                                "oldPrice":"525.00", //marketPrice
                                "liziPrice":"328.00", //price
                                "name": "日本COSME DECORTE黛珂天然植物薄荷紫苏化妆水150ml 保湿",
                                "description": "薄荷和紫苏的力量，帮助不安定的肌肤及时调整基辅纹理，增强对变化的季节，环境的抵抗力，有效对抗痘痘，干燥脱皮，变黄暗淡等肌肤问题，为你带来水嫩清新，柔化透明的肌肤感受。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae3fe4b0a4e489d1b419",
                                "itemNum":"711481143",
                                "picUrl": "http://img.lizi.com/289907ef895f9.jpg",
                                "nowPrice": "76.00",
                                "oldPrice":"129.00", //marketPrice
                                "liziPrice":"79.00", //price
                                "name": "日本Esthe Dew伊诗露芦荟去粉刺化妆爽肤水500ml提亮肤色",
                                "description": "它是专门为油皮痘痘肌准备的！可以当做普通化妆水每天早晚用，也可以装在喷雾瓶里当做喷雾随时补喷，还可以晚上睡前当做面膜水来敷，质地非常清爽",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae44e4b0a4e489d1b613",
                                "itemNum":"640214053",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/1d41d5e655a7a.jpg",
                                "nowPrice": "58.00",
                                "oldPrice":"88.00", //marketPrice
                                "liziPrice":"58.00", //price
                                "name": "日本CANMAKE井田花瓣雕刻5色玫瑰高光粉 脸颊提亮修容打亮",
                                "description": "变身软妹",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae73e4b0a4e489d1c50a",
                                "itemNum":"526392636",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/28a37403d2d6f.jpg",
                                "nowPrice": "135.00",
                                "oldPrice":"232.00", //marketPrice
                                "liziPrice":"138.00", //price
                                "name": "日本HABA鲨烷保湿滋润修复抗敏感美容油15ml  保湿提亮肤色",
                                "description": "适用任何肤质，尤其针对干燥缺水，肤色暗淡的肌肤。锁水保护肌肤，轻薄透气的质地，不油腻，吸收迅速。同时能够修复肌肤，重建原来保湿屏障，使肌肤更加稳定。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "579c94f6e4b0788fdcfdb6e5",
                                "itemNum":"16345",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/1d46732678c9d.jpg",
                                "nowPrice": "28.00",
                                "oldPrice":"62.00", //marketPrice
                                "liziPrice":"28.00", //price
                                "name": "日本DAISO大创ER胎盘素爽肤水乳液 120ml 嫩白淡斑",
                                "description": "全身嫩白",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "583fd356e4b0b08ce6264c06",
                                "itemNum":"16953",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/d773d09450c.jpg",
                                "nowPrice": "199.00",
                                "oldPrice":"429.00", //marketPrice
                                "liziPrice":"199.00", //price
                                "name": "日本CPB珂丽柏蒂双生玫瑰蔷薇唇膏唇膏盒粗管唇膏芯口红 19年9月",
                                "description": "天鹅绒般质感",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "56d7cab6e4b057ffb14a01d0",
                                "itemNum":"14899",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/179904b8cb2a1.jpg",
                                "nowPrice": "238.00",
                                "oldPrice":"381.00", //marketPrice
                                "liziPrice":"238.00", //price
                                "name": "日本HABA SQ油/鲨烷精纯美容油30ml 保湿滋润嫩白淡斑",
                                "description": "细腻光泽",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "59624fe8e4b0e927d345b0eb",
                                "itemNum":"18190",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/17976f26e0d8d.jpg",
                                "nowPrice": "79.00",
                                "oldPrice":"149.00", //marketPrice
                                "liziPrice":"79.00", //price
                                "name": "日本明色胎盘素眼霜30g 保湿弹力紧致去干纹",
                                "description": "学生党也要用眼霜",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554daec0e4b0a4e489d1e84f",
                                "itemNum":"70607084",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/179904b8a2ff3.png",
                                "nowPrice": "135.00",
                                "oldPrice":"200.00", //marketPrice
                                "liziPrice":"135.00", //price
                                "name": "日本freeplus芙丽芳丝保湿修护化妆水(滋润型）130ml 锁水保湿",
                                "description": "锁水保湿 浓厚滋润",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae48e4b0a4e489d1b7b7",
                                "itemNum":"611471141",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/33fa5a4ab7500.jpg",
                                "nowPrice": "22.00",
                                "oldPrice":"22.00", //marketPrice
                                "liziPrice":"22.00", //price
                                "name": "cherry me VE修护润唇膏3.5g",
                                "description": "小小一只看着不起眼，滋润度却相当的赞，润而不油！蕴含VE精华成分，具有修护作用，令唇部时刻保持丰润状态~用完以后吸收很快，唇部润润哒，爆皮现象会明显减少，还能修复唇纹哦！",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554dae8be4b0a4e489d1cd13",
                                "itemNum":"441264146",
                                "picUrl": "http://img.lizi.com/178b679181004.jpg",
                                "nowPrice": "35.00",
                                "oldPrice":"65.00", //marketPrice
                                "liziPrice":"35.00", //price
                                "name": "日本ora2皓乐齿亮白净色牙膏140g 鲜桃薄荷型 清爽除牙垢",
                                "description": "甜蜜桃香,为女性口腔健康而生~修护牙齿纹理，使牙齿表面光洁；两种超微粒钙粉能吸附、清除附在牙齿表面牙垢形成物质；氟素促进牙齿对钙的吸收，坚固牙齿~",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "555f4553e4b01d3c4bdc8491",
                                "itemNum":"762756542",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/68cc7ced2098.jpg",
                                "nowPrice": "58.00",
                                "oldPrice":"98.00", //marketPrice
                                "liziPrice":"58.00", //price
                                "name": "日本KISS ME花漾美姬性感裸妆染眉膏8g",
                                "description": "KISS ME 性感裸妆染眉膏",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "58f19ec8e4b0fc9fad9ab0d8",
                                "itemNum":"17374",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e56333fe8a43.jpg",
                                "nowPrice": "299.00",
                                "oldPrice":"590.00", //marketPrice
                                "liziPrice":"299.00", //price
                                "name": "日本Decorte黛珂植物韵律补水保湿化妆水/乳液200ml",
                                "description": "提高肌肤弹性柔软度，温和去除老化角质，但对肌肤不刺激。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "58cce121e4b0689ddf65cf9b",
                                "itemNum":"17252",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e52546be9f81.jpg",
                                "nowPrice": "35.00",
                                "oldPrice":"88.00", //marketPrice
                                "liziPrice":"35.00", //price
                                "name": "日本Cezanne倩诗丽气质润彩唇膏口红持久高保湿滋润防水",
                                "description": "不易脱色：着色感好，持续保持刚上妆时的靓丽质感；不干燥：保护嘴唇滋润，防止干燥、皲裂~",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "577b65f1e4b0d06f6822ffd5",
                                "itemNum":"16110",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/68b882bb08d9.jpg",
                                "nowPrice": "75.00",
                                "oldPrice":"104.00", //marketPrice
                                "liziPrice":"75.00", //price
                                "name": "日本CANMAKE井田裸妆五色哑光眼影盘眉粉眼线眼妆一体盘",
                                "description": "细致的粉质 色泽饱满",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "55cc169ae4b09141750b67b9",
                                "itemNum":"12151",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/d17741621ac.jpg",
                                "nowPrice": "105.00",
                                "oldPrice":"184.00", //marketPrice
                                "liziPrice":"105.00", //price
                                "name": "日本KOSE高丝Visee新款蕾丝丰润唇膏 光泽丰盈滋润",
                                "description": "滋润、显色、光泽、有质感，无论是亮丽的色泽还是立即修护唇纹的滋润感、光泽感让你感动到哭！同时满足光泽、滋润、卓效显色持久;等高难度动作。再加上有质感金属蕾丝包装",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "57beb8bbe4b0f0fedf3cbf4a",
                                "itemNum":"16471",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e552b3c0f86a.jpg",
                                "nowPrice": "49.00",
                                "oldPrice":"189.00", //marketPrice
                                "liziPrice":"49.00", //price
                                "name": "日本SHISEIDO资生堂SPOTSCOVER遮瑕膏粉底霜20g  遮盖黑眼圈",
                                "description": "膏体细腻，遮盖力好，有效修饰面部斑点和瑕疵，用量也很少，而且味道闻起来香香的哦！~颜色也很柔和，适合绝大多数东方人使用，不仅遮盖斑点瑕疵效果不错，还使面部呈现自然之色，修饰眼袋阴影也很好。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "566a80abe4b068bf3874e585",
                                "itemNum":"14391",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/1796bbd95971a.jpg",
                                "nowPrice": "88.00",
                                "oldPrice":"141.00", //marketPrice
                                "liziPrice":"88.00", //price
                                "name": "日本资生堂恋爱魔镜女王打底睫毛膏 让睫毛不易软榻加长加密",
                                "description": "打造自然迷人的纤长、浓密睫毛",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "57a5c0a5e4b0ab47125d8941",
                                "itemNum":"16386",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/68a63f26f13f.jpg",
                                "nowPrice": "39.00",
                                "oldPrice":"104.00", //marketPrice
                                "liziPrice":"39.00", //price
                                "name": "日本LB媚姿晶钻啫喱眼线笔鲜奶油眼影眼线胶笔0.5g 阿花花酱推荐",
                                "description": "一款好用的眼线笔+多练习=变仙女+走上人生巅峰惹~",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "58296c84e4b09276f8378cab",
                                "itemNum":"16853",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/33fff6663dea8.jpg",
                                "nowPrice": "89.00",
                                "oldPrice":"99.00", //marketPrice
                                "liziPrice":"89.00", //price
                                "name": "日本ROHTO乐敦CC高渗透美白补水喷雾100g",
                                "description": "平价美白，配合乐敦cc精华使用效果更好哦",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "575f7eeee4b0630952276219",
                                "itemNum":"15885",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/c33b232c00e1.gif",
                                "nowPrice": "89.00",
                                "oldPrice":"148.00", //marketPrice
                                "liziPrice":"89.00", //price
                                "name": "日本ROHTO乐敦CC高渗透维他命C化妆水170ml 祛斑美白淡化痘印",
                                "description": "高渗透的、高浓度的维他命C成分，渗入皮肤底层的，并击破皮肤底层的暗沉因子。它有很好的晒后修复效果，非常清透的水状质地，完全不用担心黏糊。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "57906a25e4b060895d7b5281",
                                "itemNum":"16222",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/22f0edbcbc48b.jpg",
                                "nowPrice": "32.00",
                                "oldPrice":"149.00", //marketPrice
                                "liziPrice":"32.00", //price
                                "name": "日本Fracora维C诱导体粉VC粉30颗 去黄",
                                "description": "一粒=2个柠檬",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "58f6de69e4b0bb4b8d912c44",
                                "itemNum":"17390",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/3401ebf794074.png",
                                "nowPrice": "22.00",
                                "oldPrice":"39.90", //marketPrice
                                "liziPrice":"22.00", //price
                                "name": "日本DAISO大创干湿两用化妆棉粉扑屋形海绵五角形10个装",
                                "description": "pony大神推荐，湿用上粉底更好。刚打开会有点味道，随着使用和清洗就散没了。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "554daed6e4b0a4e489d1f659",
                                "itemNum":"2021205",
                                "picUrl": "http://img.lizi.com/kauu/CePL6GnX/pKP1D.jpg",
                                "nowPrice": "22.00",
                                "oldPrice":"45.00", //marketPrice
                                "liziPrice":"22.00", //price
                                "name": "日本OPERA娥佩兰双眼皮胶水假睫毛胶水7g 持久不掉",
                                "description": "透明无痕 自然妆容",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "55bb4b9be4b0c68fbe0d36eb",
                                "itemNum":"11745",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/28a54044ab7d6.jpg",
                                "nowPrice": "25.00",
                                "oldPrice":"30.00", //marketPrice
                                "liziPrice":"25.00", //price
                                "name": "日本KAI贝印原装不锈钢安全网锋利修眉刀/刮眉刀 5支装",
                                "description": "大名鼎鼎的贝印修眉刀，简单小巧易用，基本上可以说是修过眉毛的人都会接触的一款产品了。蓝色刀口上有防护网，适合新手使用，更安全；红色刀口上没有防护网，适合熟练的老手使用，更锋利。",
                                "tagUrl":""

                            }
                        ,
                        
                            {
                                "id": "58b7c558e4b082a11fd786f2",
                                "itemNum":"17208",
                                "picUrl": "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/68a4cc014999.jpg",
                                "nowPrice": "40.00",
                                "oldPrice":"205.00", //marketPrice
                                "liziPrice":"40.00", //price
                                "name": "日本Kanebo嘉娜宝3D蔷薇玫瑰花泡沫洗面奶150g  19年8月",
                                "description": "且含有美容成份的浓密泡沫，洁颜的同时馥郁的大马士革玫瑰香型以及3D蔷薇花状泡沫，能使你得到肌肤和身心全面的放松~",
                                "tagUrl":""

                            }
                        
                        
                    ]
 
    	};
    },
    methods:{   
        goback(){
            this.$qzzrouter.go(-1);
        },
        gohome(){
            this.$qzzrouter.push("/");
        },
        addCar(item){
            var storage = window.localStorage;
            let goodObj = Object.assign(item,{num:1})
            let uname = storage.getItem("uname");
            if(uname){
                 storage.setItem("good",JSON.stringify(goodObj));
                // this.$store.commit('incrementShopcar');
                this.$store.commit('addGoodsInCar');
            }else{
                alert('请先登录');
            }
           
        },
        // removeAaary(_arr, _obj) {
        //     var length = _arr.length;
        //     for (var i = 0; i < length; i++) {
        //         if (_arr[i] == _obj) {
        //             if (i == 0) {
        //                 _arr.shift(); //删除并返回数组的第一个元素
        //                 return _arr;
        //             }
        //             else if (i == length - 1) {
        //                 _arr.pop();  //删除并返回数组的最后一个元素
        //                 return _arr;
        //             }
        //             else {
        //                 _arr.splice(i, 1); //删除下标为i的元素
        //                 return _arr;
        //             }
        //         }
        //      }
        // }	
	},
	created(){

		}
	}

</script>

</script>


<style lang="less" scoped>
@import url('../../../styls/main.less');
@import url("../../../../static/swiper-4.4.2/dist/css/swiper.css");
#riben{
	.header{
		position: fixed;
		z-index:9999;
		top:0;
		width: 100%;
		.h(44);
		.lh(44);
		color:#fff;
		background: #ff666b;
		display: flex;
		justify-content: space-between;
		align-items: center;
		i{
			.fs(18);
			display: block;
			.w(44);
			.h(44);
			.lh(44);
			text-align: center;
		}
		span{
			.fs(18);
			font-style: normal;
		}
	}
	.body{
        .banner{
            width: 100%;
            .margin(44,0,0,0);
        }
		.margin(44,0,0,0);
		ul{
			.w(375);
			display: flex;
			justify-content: space-around;
			flex-wrap:wrap;
			li{
				width: 48%;
				.padding(0,0,0,3);
				.margin(5,0,5,0);
				a{
					display: block;
					.w(172);
					.h(249);
					border: 1px solid #ba4d7f;
					p{
						img{
							width: 100%;
						}
					}
					h3{
						    overflow: hidden;
						    text-overflow: ellipsis;
						    display: -webkit-box;
						    -webkit-line-clamp: 2;
						    -webkit-box-orient: vertical;
						    .margin(0,0,10,0);
						    .padding(0,10,0,10);
						    .h(36);
						    .lh(18);
						    .fs(12);
						    overflow: hidden;
						    color: #666;
						    word-wrap: break-word;
						    word-break: break-all;
					}
					.price {
					    border-top: 1px solid #ba4d7f;
					    color: #cd1212;
				        .fs(12);
				        .h(30);
					    .lh(30);
					    .padding(0,0,0,10);
					    em{
					    	.fs(20);
					    }
					    .buybtn {
						    display: inline-block;
						    float: right;
						    text-align: center;
						    width: 46%;
						    .h(30);
					    	.lh(30);
						    background: #ffe763;
						    border-left: 1px solid #ba4d7f;
						   
						}
					    
					}
				}
				

			}
		}
	}

}

</style>