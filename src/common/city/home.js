//notice:Source from east airline

const homeCity = [
  {
    "code": "YIE",
    "name": "A阿尔山",
    "city": "阿尔山",
    "city_code": "1",
    "type": "331",
    "regexInfo": "YIE,YIE,阿尔山,AErShan,AES,AErShan,阿尔山伊尔施机场,AErShanYiErShiJiChang,AESYESJC,AErShanYiErShiJiChang"
  },
  {
    "code": "AKU",
    "name": "A阿克苏",
    "city": "阿克苏",
    "city_code": "1",
    "type": "331",
    "regexInfo": "AKU,AKU,阿克苏,AKeSu,AKS,AKESU,阿克苏机场,Aksu,AKSJC,AKeSuJiChang"
  },
  {
    "code": "NGQ",
    "name": "A阿里",
    "city": "阿里",
    "city_code": "1",
    "type": "331",
    "regexInfo": "NGQ,NGQ,阿里,ALi,AL,ALi,狮泉河机场,ShiQuanHeJiChang,SQHJC,ShiQuanHeJiChang"
  },
  {
    "code": "AQG",
    "name": "A安庆",
    "city": "安庆",
    "city_code": "1",
    "type": "331",
    "regexInfo": "AQG,AQG,安庆,AnQing,AQ,ANQING,安庆机场,Anqing,AQJC,AnQingJiChang"
  },
  {
    "code": "AOG",
    "name": "A鞍山",
    "city": "鞍山",
    "city_code": "1",
    "type": "331",
    "regexInfo": "AOG,AOG,鞍山,AnShan,AS,ANSHAN,鞍山机场,Anshan,ASJC,AnShanJiChang"
  },
  {
    "code": "AVA",
    "name": "A安顺",
    "city": "安顺",
    "city_code": "1",
    "type": "331",
    "regexInfo": "AVA,AVA,安顺,AnShun,AS,AnShun,安顺黄果树机场,Anshun Huangguoshu Airport,ASHGSJC,AnShunHuangGuoShuJiChang"
  },
  {
    "code": "AEB",
    "name": "B百色",
    "city": "百色",
    "city_code": "1",
    "type": "331",
    "regexInfo": "AEB,AEB,百色,BaiSe,BS,BAISE,百色机场,BAISE,BSJC,BaiSeJiChang"
  },
  {
    "code": "BSD",
    "name": "B保山",
    "city": "保山",
    "city_code": "1",
    "type": "331",
    "regexInfo": "BSD,BSD,保山,BaoShan,BS,BAOSHAN,云端机场,Baoshan,YDJC,YunDuanJiChang"
  },
  {
    "code": "BAV",
    "name": "B包头",
    "city": "包头",
    "city_code": "1",
    "type": "331",
    "regexInfo": "BAV,BAV,包头,BaoTou,BT,BAOTOU,包头机场,Baotou,BTJC,BaoTouJiChang"
  },
  {
    "code": "BHY",
    "name": "B北海",
    "city": "北海",
    "city_code": "1",
    "type": "331",
    "regexInfo": "BHY,BHY,北海,BeiHai,BH,BEIHAI,福城机场,Beihai,FCJC,FuChengJiChang"
  },
  {
    "code": "BJS",
    "name": "B北京",
    "city": "北京",
    "city_code": "1",
    "type": "331",
    "regexInfo": "NAY,BJS,北京,BeiJingShi,BJS,BEIJING,南苑机场,NanYuanJiChang,NYJC,Beijing Nanyuan Apt,PEK,首都机场,ShouDuJiChang,SDJC,Beijing Capital Apt"
  },
  {
    "code": "PEK",
    "name": "B北京首都",
    "city": "北京首都",
    "city_code": "0",
    "type": "331",
    "regexInfo": "PEK,bjsd,Beijing Shoudu,B北京首都"
  },
  {
    "code": "NAY",
    "name": "B北京南苑",
    "city": "北京南苑",
    "city_code": "0",
    "type": "331",
    "regexInfo": "NAY,bjny,Beijing Nanyuan,B北京南苑"
  },
  {
    "code": "BFJ",
    "name": "B毕节",
    "city": "毕节",
    "city_code": "1",
    "type": "331",
    "regexInfo": "BFJ,BFJ,毕节,BiJie,BJ,BiJie,毕节飞雄机场,BiJieFeiXiongJiChang,BJFXJC,BiJieFeiXiongJiChang"
  },
  {
    "code": "BPE",
    "name": "B北戴河",
    "city": "北戴河",
    "city_code": "1",
    "type": "331",
    "regexInfo": "BPE,北戴河,BeiDaiHe,QHD,BEIDAIHE,北戴河机场,BDHJC,BeiDaiHeJiChang"
  },
  {
    "code": "NBS",
    "name": "C长白山",
    "city": "长白山",
    "city_code": "1",
    "type": "331",
    "regexInfo": "NBS,NBS,长白山,ChangBaiShan,CBS,ChangBaiShan,长白山机场,changbaishan,CBSJC,ChangBaiShanJiChang"
  },
  {
    "code": "CGQ",
    "name": "C长春",
    "city": "长春",
    "city_code": "1",
    "type": "331",
    "regexInfo": "CGQ,CGQ,长春,ChangChun,CC,CHANGCHUN,龙嘉机场,Changchun,LJJC,LongJiaJiChang"
  },
  {
    "code": "CGD",
    "name": "C常德",
    "city": "常德",
    "city_code": "1",
    "type": "331",
    "regexInfo": "CGD,CGD,常德,ChangDe,CD,CHANGDE,桃花源机场,Changde,THYJC,TaoHuaYuanJiChang"
  },
  {
    "code": "CSX",
    "name": "C长沙",
    "city": "长沙",
    "city_code": "1",
    "type": "331",
    "regexInfo": "CSX,CSX,长沙,ChangSha,CS,CHANGSHA,黄花机场,Changsha,HHJC,HuangHuaJiChang"
  },
  {
    "code": "CIH",
    "name": "C长治",
    "city": "长治",
    "city_code": "1",
    "type": "331",
    "regexInfo": "CIH,CIH,长治,ChangZhi,CZ,CHANGZHI,王村机场,Changzhi,WCJC,WangCunJiChang"
  },
  {
    "code": "CZX",
    "name": "C常州",
    "city": "常州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "CZX,CZX,常州,ChangZhou,CZ,CHANGZHOU,奔牛机场,Changzhou,BNJC,BenNiuJiChang"
  },
  {
    "code": "CHG",
    "name": "C朝阳",
    "city": "朝阳",
    "city_code": "1",
    "type": "331",
    "regexInfo": "CHG,CHG,朝阳,ChaoYang,CY,CHAOYANG,朝阳机场,Chaoyang,CYJC,ChaoYangJiChang"
  },
  {
    "code": "CTU",
    "name": "C成都",
    "city": "成都",
    "city_code": "1",
    "type": "331",
    "regexInfo": "CTU,CTU,成都,ChengDu,CD,CHENGDU,双流机场,Chengdu,SLJC,ShuangLiuJiChang"
  },
  {
    "code": "CIF",
    "name": "C赤峰",
    "city": "赤峰",
    "city_code": "1",
    "type": "331",
    "regexInfo": "CIF,CIF,赤峰,ChiFeng,CF,CHIFENG,赤峰机场,Chifeng,CFJC,ChiFengJiChang"
  },
  {
    "code": "CKG",
    "name": "C重庆",
    "city": "重庆",
    "city_code": "1",
    "type": "331",
    "regexInfo": "CKG,CKG,重庆,ChongQing,CQ,CHONGQING,江北机场,Chongqing,JBJC,JiangBeiJiChang"
  },
  {
    "code": "DLU",
    "name": "D大理",
    "city": "大理",
    "city_code": "1",
    "type": "331",
    "regexInfo": "DLU,DLU,大理,DaLi,DL,DALI,大理机场,Dali City,DLJC,DaLiJiChang"
  },
  {
    "code": "DLC",
    "name": "D大连",
    "city": "大连",
    "city_code": "1",
    "type": "331",
    "regexInfo": "DLC,DLC,大连,DaLian,DL,DALIAN,周水子机场,Dalian,ZSZJC,ZhouShuiZiJiChang"
  },
  {
    "code": "DAT",
    "name": "D大同",
    "city": "大同",
    "city_code": "1",
    "type": "331",
    "regexInfo": "DAT,DAT,大同,DaTong,DT,DATONG,大同机场,Datong,HRJC,DaTongJiChang"
  },
  {
    "code": "DAX",
    "name": "D达州",
    "city": "达州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "DAX,DAX,达州,DaZhou,DZ,DAXIAN,河市坝机场,Daxian,HSBJC,HeShiBaJiChang"
  },
  {
    "code": "DDG",
    "name": "D丹东",
    "city": "丹东",
    "city_code": "1",
    "type": "331",
    "regexInfo": "DDG,DDG,丹东,DanDong,DD,DANDONG,浪头机场,Dandong,LTJC,LangTouJiChang"
  },
  {
    "code": "DYN",
    "name": "D丹阳",
    "city": "丹阳",
    "city_code": "1",
    "type": "331",
    "regexInfo": "DYN,DYN,丹阳,DanYang,DY,DANYANG,丹阳火车站,Danyang Railway Station,DYHCZ,DanYangHuoCheZhan"
  },
  {
    "code": "DCY",
    "name": "D稻城",
    "city": "稻城",
    "city_code": "1",
    "type": "331",
    "regexInfo": "DCY,DCY,稻城,DaoCheng,DC,DaoCheng,稻城亚丁机场,DaoChengYaDingJiChang,DCYDJC,DaoChengYaDingJiChang"
  },
  {
    "code": "HXD",
    "name": "D德令哈",
    "city": "德令哈",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HXD,HXD,德令哈,DeLingHa,DLH,DeLingHa,德令哈机场,DeLingHaJiChang,DLHJC,DeLingHaJiChang"
  },
  {
    "code": "DOY",
    "name": "D东营",
    "city": "东营",
    "city_code": "1",
    "type": "331",
    "regexInfo": "DOY,DOY,东营,DongYing,DY,DONGYING,东营胜利机场,DongYingShengLiJiChang,DYSLJC,DongYingShengLiJiChang"
  },
  {
    "code": "DNH",
    "name": "D敦煌",
    "city": "敦煌",
    "city_code": "1",
    "type": "331",
    "regexInfo": "DNH,DNH,敦煌,DunHuang,DH,DUNHUANG,敦煌机场,Dunhuang,DHJC,DunHuangJiChang"
  },
  {
    "code": "DQA",
    "name": "D大庆",
    "city": "大庆",
    "city_code": "1",
    "type": "331",
    "regexInfo": "DQA,DQA,大庆,daqing,DQ,DAQING,大庆,DAQING,DQ,daqing"
  },
  {
    "code": "DSN",
    "name": "E鄂尔多斯",
    "city": "鄂尔多斯",
    "city_code": "1",
    "type": "331",
    "regexInfo": "DSN,DSN,鄂尔多斯,EErDuoSi,EEDS,EERDUOSI,鄂尔多斯伊金霍洛机场,Dongsheng,DSJC,DongShengJiChang"
  },
  {
    "code": "ENH",
    "name": "E恩施",
    "city": "恩施",
    "city_code": "1",
    "type": "331",
    "regexInfo": "ENH,ENH,恩施,EnShi,ES,ENSHI,许家坪机场,Enshi,XJPJC,XuJiaPingJiChang"
  },
  {
    "code": "FUO",
    "name": "F佛山",
    "city": "佛山",
    "city_code": "1",
    "type": "331",
    "regexInfo": "FUO,FUO,佛山,FoShan,FS,FOSHAN,佛山机场,Fuoshan,FSJC,FoShanJiChang"
  },
  {
    "code": "FUG",
    "name": "F阜阳",
    "city": "阜阳",
    "city_code": "1",
    "type": "331",
    "regexInfo": "FUG,FUG,阜阳,FuYang,FY,FUYANG,阜阳机场,Fuyang,FYJC,FuYangJiChang"
  },
  {
    "code": "FOC",
    "name": "F福州",
    "city": "福州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "FOC,FOC,福州,FuZhou,FZ,FUZHOU,长乐机场,Fuzhou,CLJC,ChangLeJiChang"
  },
  {
    "code": "KOW",
    "name": "G赣州",
    "city": "赣州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "KOW,KOW,赣州,GanZhou,GZ,GANZHOU,黄金机场,Ganzhou,HJJC,HuangJinJiChang"
  },
  {
    "code": "GOQ",
    "name": "G格尔木",
    "city": "格尔木",
    "city_code": "1",
    "type": "331",
    "regexInfo": "GOQ,GOQ,格尔木,GeErMu,GEM,GEERMU,格尔木机场,Golmud,GEMJC,GeErMuJiChang"
  },
  {
    "code": "GYS",
    "name": "G广元",
    "city": "广元",
    "city_code": "1",
    "type": "331",
    "regexInfo": "GYS,GYS,广元,GuangYuan,GY,GUANGYUAN,广元机场,Guang Yuan,GYJC,GuangYuanJiChang"
  },
  {
    "code": "CAN",
    "name": "G广州",
    "city": "广州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "CAN,CAN,广州,GuangZhou,GZ,GUANGZHOU,白云机场,Guangzhou,BYJC,BaiYunJiChang"
  },
  {
    "code": "KWL",
    "name": "G桂林",
    "city": "桂林",
    "city_code": "1",
    "type": "331",
    "regexInfo": "KWL,KWL,桂林,GuiLin,GL,GUILIN,两江机场,Guilin,LJJC,LiangJiangJiChang"
  },
  {
    "code": "KWE",
    "name": "G贵阳",
    "city": "贵阳",
    "city_code": "1",
    "type": "331",
    "regexInfo": "KWE,KWE,贵阳,GuiYang,GY,GUIYANG,龙洞堡机场,Guiyang,LDBJC,LongDongBaoJiChang"
  },
  {
    "code": "HRB",
    "name": "H哈尔滨",
    "city": "哈尔滨",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HRB,HRB,哈尔滨,HaErBin,HEB,Harbin,太平机场,Harbin,TPJC,TaiPingJiChang"
  },
  {
    "code": "HMI",
    "name": "H哈密",
    "city": "哈密",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HMI,HMI,哈密,HaMi,HM,HAMI,哈密机场,Hami,HMJC,HaMiJiChang"
  },
  {
    "code": "HAK",
    "name": "H海口",
    "city": "海口",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HAK,HAK,海口,HaiKou,HK,HAIKOU,美兰机场,Haikou,MLJC,MeiLanJiChang"
  },
  {
    "code": "HLD",
    "name": "H海拉尔",
    "city": "海拉尔",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HLD,HLD,海拉尔,HaiLaEr,HLE,HAILAER,东山机场,Hailar,DSJC,DongShanJiChang"
  },
  {
    "code": "HDG",
    "name": "H邯郸",
    "city": "邯郸",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HDG,HDG,邯郸,HanDan,HD,HANDAN,河北邯郸机场,HANDAN,HBHDJC,HeBeiHanDanJiChang"
  },
  {
    "code": "HZG",
    "name": "H汉中",
    "city": "汉中",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HZG,HZG,汉中,HanZhong,HZ,HANZHONG,城固机场,ChengGuJiChang,CGJC,ChengGuJiChang"
  },
  {
    "code": "HGH",
    "name": "H杭州",
    "city": "杭州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HGH,HGH,杭州,HangZhou,HZ,HANGZHOU,萧山机场,Hangzhou,XSJC,XiaoShanJiChang"
  },
  {
    "code": "HFE",
    "name": "H合肥",
    "city": "合肥",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HFE,HFE,合肥,HeFei,HF,HEFEI,合肥新桥国际机场,HeFeiXinQiaoGuoJiJiChang,HFXQGJJC,HeFeiXinQiaoGuoJiJiChang"
  },
  {
    "code": "HTN",
    "name": "H和田",
    "city": "和田",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HTN,HTN,和田,HeTian,HT,HETIAN,和田机场,Hotan,HTJC,HeTianJiChang"
  },
  {
    "code": "HEK",
    "name": "H黑河",
    "city": "黑河",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HEK,HEK,黑河,HeiHe,HH,HEIHE,黑河机场,Heihe,HHJC,HeiHeJiChang"
  },
  {
    "code": "HNY",
    "name": "H衡阳",
    "city": "衡阳",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HNY,HNY,衡阳,HengYang,HY,HENGYANG,衡阳机场,Hengyang,HYJC,HengYangJiChang"
  },
  {
    "code": "HET",
    "name": "H呼和浩特",
    "city": "呼和浩特",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HET,HET,呼和浩特,HuHeHaoTe,HHHT,Hohhot,白塔机场,Hohhot,BTJC,BaiTaJiChang"
  },
  {
    "code": "HIA",
    "name": "H淮安",
    "city": "淮安",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HIA,HIA,淮安,HuaiAn,HA,HUAI AN,淮安涟水机场,HUAIAN,HALSJC,HuaiAnLianShuiJiChang"
  },
  {
    "code": "TXN",
    "name": "H黄山",
    "city": "黄山",
    "city_code": "1",
    "type": "331",
    "regexInfo": "TXN,TXN,黄山,HuangShan,HS,TUNXI,屯溪机场,Huangshan,TXJC,TunXiJiChang"
  },
  {
    "code": "TNA",
    "name": "J济南",
    "city": "济南",
    "city_code": "1",
    "type": "331",
    "regexInfo": "TNA,TNA,济南,JiNan,JN,JINAN,遥墙机场,Jinan,YQJC,YaoQiangJiChang"
  },
  {
    "code": "JNG",
    "name": "J济宁",
    "city": "济宁",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JNG,JNG,济宁,JiNing,JN,JINING,济宁机场,Jining,QFJC,QuFuJiChang"
  },
  {
    "code": "JXA",
    "name": "J鸡西",
    "city": "鸡西",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JXA,JXA,鸡西,JiXi,JX,JIXI,鸡西,JIXI,JX,jixi"
  },
  {
    "code": "JGD",
    "name": "J加格达奇",
    "city": "加格达奇",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JGD,JGD,加格达奇,JiaGeDaQiJiChang,JGDQJC,JiaGeDaQiJiChang,加格达奇机场,JiaGeDaQiJiChang,JGDQJC,JiaGeDaQiJiChang"
  },
  {
    "code": "JMU",
    "name": "J佳木斯",
    "city": "佳木斯",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JMU,JMU,佳木斯,JiaMuSi,JMS,JIAMUSI,佳木斯机场,Jiamusi,JMSJC,JiaMuSiJiChang"
  },
  {
    "code": "JXS",
    "name": "J嘉兴",
    "city": "嘉兴",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JXS,JXS,嘉兴,JiaXing,JX,JIAXING,嘉兴火车站,Jiaxing Rail Station ,JXN,JiaXingNanHuoCheZhan"
  },
  {
    "code": "JGN",
    "name": "J嘉峪关",
    "city": "嘉峪关",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JGN,JGN,嘉峪关,JiaYuGuan,JYG,JIAYUGUAN,嘉峪关机场,Jiayuguan,JYGJC,JiaYuGuanJiChang"
  },
  {
    "code": "JIC",
    "name": "J金昌",
    "city": "金昌",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JIC,JIC,金昌,JinChang,JC,JinChang,金昌机场,JinChangJiChang,JCJC,JinChangJiChang"
  },
  {
    "code": "JNZ",
    "name": "J锦州",
    "city": "锦州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JNZ,JNZ,锦州,JinZhou,JZ,JINZHOU,锦州小岭子机场,Jinzhou,JZXLZJC,JinZhouXiaoLingZiJiChang"
  },
  {
    "code": "JGS",
    "name": "J井冈山",
    "city": "井冈山",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JGS,JGS,井冈山,JingGangShan,JGS,JINGGANGSHAN,井冈山机场,JINGGANGSHAN,JGSJC,JingGangShanJiChang"
  },
  {
    "code": "JUH",
    "name": "J九华山",
    "city": "九华山",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JUH,JUH,九华山,JiuHuaShan,JHS,jiuhuashan,九华山机场,jiuhuashanjichang,JHSJC,JiuHuaShanJiChang"
  },
  {
    "code": "JIU",
    "name": "J九江",
    "city": "九江",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JIU,JIU,九江,JiuJiang,JJ,JIUJIANG,九江机场,Jiujiang,JJJC,JiuJiangJiChang"
  },
  {
    "code": "JZH",
    "name": "J九寨沟",
    "city": "九寨沟",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JZH,JZH,九寨沟,JiuZhaiGou,JZG,JIUZHAIGOU,黄龙机场,JIUZHAIGOU,HLJC,HuangLongJiChang"
  },
  {
    "code": "KHG",
    "name": "K喀什",
    "city": "喀什",
    "city_code": "1",
    "type": "331",
    "regexInfo": "KHG,KHG,喀什,KaShen,KS,KASHI,喀什机场,Kashi,KSJC,KaShenJiChang"
  },
  {
    "code": "KJH",
    "name": "K凯里",
    "city": "凯里",
    "city_code": "1",
    "type": "331",
    "regexInfo": "KJH,KJH,凯里,KaiLi,KL,KaiLi,凯里黄平机场,KaiLiHuangPingJiChang,KLHPJC,KaiLiHuangPingJiChang"
  },
  {
    "code": "KGT",
    "name": "K康定",
    "city": "康定",
    "city_code": "1",
    "type": "331",
    "regexInfo": "KGT,KGT,康定,KangDing,KD,KangDing,康定机场,KangDing,KDJC,KangDingJiChang"
  },
  {
    "code": "KCA",
    "name": "K库车",
    "city": "库车",
    "city_code": "1",
    "type": "331",
    "regexInfo": "KCA,KCA,库车,KuChe,KC,KUCHE,库车龟兹机场,KuCheGuiZiJiChang,KCGZJC,KuCheGuiZiJiChang"
  },
  {
    "code": "KRL",
    "name": "K库尔勒",
    "city": "库尔勒",
    "city_code": "1",
    "type": "331",
    "regexInfo": "KRL,KRL,库尔勒,KuErLe,KEL,KUERLE,库尔勒机场,Korla,KELJC,KuErLeJiChang"
  },
  {
    "code": "KMG",
    "name": "K昆明",
    "city": "昆明",
    "city_code": "1",
    "type": "331",
    "regexInfo": "KMG,KMG,昆明,KunMing,KM,KUNMING,昆明长水机场,Kunming,CSJC,ChangShuiJiChang"
  },
  {
    "code": "LXA",
    "name": "L拉萨",
    "city": "拉萨",
    "city_code": "1",
    "type": "331",
    "regexInfo": "LXA,LXA,拉萨,LaSa,LS,LASA,贡嘎机场,Lhasa,GGJC,GongGaJiChang"
  },
  {
    "code": "LHW",
    "name": "L兰州",
    "city": "兰州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "LHW,LHW,兰州,LanZhou,LZ,LANZHOU,中川机场,Lanzhou Apt,ZCJC,ZhongChuanJiChang"
  },
  {
    "code": "LJG",
    "name": "L丽江",
    "city": "丽江",
    "city_code": "1",
    "type": "331",
    "regexInfo": "LJG,LJG,丽江,LiJiang,LJ,LIJIANG,丽江机场,Lijiang City,LJJC,LiJiangJiChang"
  },
  {
    "code": "HZH",
    "name": "L黎平",
    "city": "黎平",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HZH,HZH,黎平,LiPing,LP,LiPing,黎平机场,LiPingJiChang,LPJC,LiPingJiChang"
  },
  {
    "code": "LYG",
    "name": "L连云港",
    "city": "连云港",
    "city_code": "1",
    "type": "331",
    "regexInfo": "LYG,LYG,连云港,LianYunGang,LYG,LIANYUNGANG,白塔阜机场,Lianyungang,BTFJC,BaiTaFuJiChang"
  },
  {
    "code": "LNJ",
    "name": "L临沧",
    "city": "临沧",
    "city_code": "1",
    "type": "331",
    "regexInfo": "LNJ,LNJ,临沧,LinCang,LC,LINCANG,临沧机场,LINCANG,LCJC,LinCangJiChang"
  },
  {
    "code": "LYI",
    "name": "L临沂",
    "city": "临沂",
    "city_code": "1",
    "type": "331",
    "regexInfo": "LYI,LYI,临沂,LinYi,LY,LINYI,临沂机场,Linyi,LYJC,LinYiJiChang"
  },
  {
    "code": "LPF",
    "name": "L六盘水",
    "city": "六盘水",
    "city_code": "1",
    "type": "331",
    "regexInfo": "LPF,LPF,六盘水,LiuPanShui,LPS,LiuPanShui,六盘水月照机场,LiuPanShuiYueZhaoJiChang,LPSYZJC,LiuPanShuiYueZhaoJiChang"
  },
  {
    "code": "LZH",
    "name": "L柳州",
    "city": "柳州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "LZH,LZH,柳州,LiuZhou,LZ,LIUZHOU,白莲机场,Liuzhou,BLJC,BaiLianJiChang"
  },
  {
    "code": "LZO",
    "name": "L泸州",
    "city": "泸州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "LZO,LZO,泸州,LuZhou,LZ,ZHOU,泸州云龙机场,Luzhou,YLJC,YunLongJiChang"
  },
  {
    "code": "LYA",
    "name": "L洛阳",
    "city": "洛阳",
    "city_code": "1",
    "type": "331",
    "regexInfo": "LYA,LYA,洛阳,LuoYang,LY,LUOYANG,北郊机场,Luoyang,BJJC,BeiJiaoJiChang"
  },
  {
    "code": "NLH",
    "name": "L泸沽湖",
    "city": "泸沽湖",
    "city_code": "1",
    "type": "331",
    "regexInfo": "NLH,NLH,泸沽湖,luguhu,lgh,LuGuHu,泸沽湖,LuGuHuJiChang,LGHJC,LuGuHuJiChang"
  },
  {
    "code": "LLV",
    "name": "L吕梁",
    "city": "吕梁",
    "city_code": "1",
    "type": "331",
    "regexInfo": "LLV,LLV,吕梁,LvLiang,LL,LvLiang,吕梁大武机场,LvLiangDaWuJiChang,LLDWJC,LvLiangDaWuJiChang"
  },
  {
    "code": "LFQ",
    "name": "L临汾",
    "city": "临汾",
    "city_code": "1",
    "type": "331",
    "regexInfo": "LFQ,LFQ,临汾,LinFen,LF,linfen,临汾机场,LinFenJiChang,LFJC,linfenJiChang"
  },
  {
    "code": "NZH",
    "name": "M满洲里",
    "city": "满洲里",
    "city_code": "1",
    "type": "331",
    "regexInfo": "NZH,NZH,满洲里,ManZhouLi,MZL,MANZHOULI,满洲里,Manzhouli Xijiao Airport,MZL,ManZhouLi"
  },
  {
    "code": "LUM",
    "name": "M芒市",
    "city": "芒市",
    "city_code": "1",
    "type": "331",
    "regexInfo": "LUM,LUM,芒市,MangShi,MS,MANGSHI,芒市机场,Luxi,MSJC,MangShiJiChang"
  },
  {
    "code": "MIG",
    "name": "M绵阳",
    "city": "绵阳",
    "city_code": "1",
    "type": "331",
    "regexInfo": "MIG,MIG,绵阳,MianYang,MY,MIANYANG,绵阳南郊机场,Mian Yang,MYJC,MianYangJiChang"
  },
  {
    "code": "OHE",
    "name": "M漠河",
    "city": "漠河",
    "city_code": "1",
    "type": "331",
    "regexInfo": "OHE,OHE,漠河,MoHe,MH,MoHe,漠河机场,Mohe Airport,MHJC,MoHeJiChang"
  },
  {
    "code": "MDG",
    "name": "M牡丹江",
    "city": "牡丹江",
    "city_code": "1",
    "type": "331",
    "regexInfo": "MDG,MDG,牡丹江,MuDanJiang,MDJ,MUDANJIANG,海浪机场,Mudanjiang,HLJC,HaiLangJiChang"
  },
  {
    "code": "KHN",
    "name": "N南昌",
    "city": "南昌",
    "city_code": "1",
    "type": "331",
    "regexInfo": "KHN,KHN,南昌,NanChang,NC,NANCHANG,昌北机场,Nanchang,CBJC,ChangBeiJiChang"
  },
  {
    "code": "NAO",
    "name": "N南充",
    "city": "南充",
    "city_code": "1",
    "type": "331",
    "regexInfo": "NAO,NAO,南充,NanChong,NC,NANCHONG,南充高坪机场,Nanchong,NCJC,NanChongJiChang"
  },
  {
    "code": "NKG",
    "name": "N南京",
    "city": "南京",
    "city_code": "1",
    "type": "331",
    "regexInfo": "NKG,NKG,南京,NanJing,NJ,NANJING,禄口机场,Nanjing,LKJC,LuKouJiChang"
  },
  {
    "code": "NNG",
    "name": "N南宁",
    "city": "南宁",
    "city_code": "1",
    "type": "331",
    "regexInfo": "NNG,NNG,南宁,NanNing,NN,NANNING,吴圩机场,Nanning,WWJC,WuWeiJiChang"
  },
  {
    "code": "NTG",
    "name": "N南通",
    "city": "南通",
    "city_code": "1",
    "type": "331",
    "regexInfo": "NTG,NTG,南通,NanTong,NT,NANTONG,兴东机场,Nantong,XDJC,XingDongJiChang"
  },
  {
    "code": "NNY",
    "name": "N南阳",
    "city": "南阳",
    "city_code": "1",
    "type": "331",
    "regexInfo": "NNY,NNY,南阳,NanYang,NY,NANYANG,姜营机场,Nanyang,JYJC,JiangYingJiChang"
  },
  {
    "code": "NGB",
    "name": "N宁波",
    "city": "宁波",
    "city_code": "1",
    "type": "331",
    "regexInfo": "NGB,NGB,宁波,NingBo,NB,NINGBO,栎社机场,Ningbo,LSJC,LiSheJiChang"
  },
  {
    "code": "SYM",
    "name": "P普洱",
    "city": "普洱",
    "city_code": "1",
    "type": "331",
    "regexInfo": "SYM,SYM,普洱,puer,PE,PUER,思茅机场,Simao,SMJC,SiMaoJiChang"
  },
  {
    "code": "NDG",
    "name": "Q齐齐哈尔",
    "city": "齐齐哈尔",
    "city_code": "1",
    "type": "331",
    "regexInfo": "NDG,NDG,齐齐哈尔,QiQiHaEr,QQHE,QIQIHAER,三家子机场,Qiqihar,SJZJC,SanJiaZiJiChang"
  },
  {
    "code": "JIQ",
    "name": "Q黔江",
    "city": "黔江",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JIQ,JIQ,黔江,QianJiang,QJ,QIAN JIANG,黔江武陵山机场,qianjiangwulingshanjichang,QJWLSJC,qianjiangwulingshanjichang"
  },
  {
    "code": "TAO",
    "name": "Q青岛",
    "city": "青岛",
    "city_code": "1",
    "type": "331",
    "regexInfo": "TAO,TAO,青岛,QingDao,QD,QINGDAO,流亭机场,Qingdao,LTJC,LiuTingJiChang"
  },
  {
    "code": "IQN",
    "name": "Q庆阳",
    "city": "庆阳",
    "city_code": "1",
    "type": "331",
    "regexInfo": "IQN,IQN,庆阳,QingYang,QY,QINGYANG,庆阳机场,Qingyang,QYJC,QingYangJiChang"
  },
  {
    "code": "JUZ",
    "name": "Q衢州",
    "city": "衢州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JUZ,JUZ,衢州,QuZhou,QZ,QUZHOU,衢州机场,QuZhouJiChang,QZJC,QuZhouJiChang"
  },
  {
    "code": "JJN",
    "name": "Q泉州",
    "city": "泉州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JJN,JJN,泉州,QuanZhou,QZ,JINJIANG,晋江机场,Jinjiang,JJJC,JinJiangJiChang"
  },
  {
    "code": "RIZ",
    "name": "R日照",
    "city": "日照",
    "city_code": "1",
    "type": "331",
    "regexInfo": "RIZ,RIZ,日照,RiZhao,RIZ,RIZHAO,山字河,RIZHAO,RIZ,ShanZiHe"
  },
  {
    "code": "SWA",
    "name": "S汕头",
    "city": "汕头",
    "city_code": "1",
    "type": "331",
    "regexInfo": "SWA,SWA,汕头,ShanTou,ST,SHANTOU,揭阳潮汕机场,Shantou,JYCSJC,JieYangChaoShanJiChang"
  },
  {
    "code": "SHA",
    "name": "S上海",
    "city": "上海",
    "city_code": "1",
    "type": "331",
    "regexInfo": "PVG,SHA,上海,ShangHai,SH,SHANGHAI,浦东机场,PuDongJiChang,PDJC,Shanghai Pu Dong Apt,SHA,虹桥机场,HongQiaoJiChang,HQJC,Shanghai Hongqiao"
  },
  {
    "code": "SHA",
    "name": "S上海虹桥",
    "city": "上海",
    "city_code": "0",
    "type": "331",
    "regexInfo": "SHA,shhq,Shanghai Hongqiao,S上海虹桥"
  },
  {
    "code": "PVG",
    "name": "S上海浦东",
    "city": "上海",
    "city_code": "0",
    "type": "331",
    "regexInfo": "PVG,shpd,Shanghai Pu Dong,S上海浦东"
  },
  {
    "code": "HPG",
    "name": "S神农架",
    "city": "神农架",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HPG,HPG,神农架,ShenNongJia,SNJ,ShenNongJia,神农架红坪机场,ShenNongJiaHongPingJiChang,SNJHPJC,ShenNongJiaHongPingJiChang"
  },
  {
    "code": "SHE",
    "name": "S沈阳",
    "city": "沈阳",
    "city_code": "1",
    "type": "331",
    "regexInfo": "SHE,SHE,沈阳,ShenYang,SY,SHENYANG,桃仙机场,Shenyang,TXJC,TaoXianJiChang"
  },
  {
    "code": "SZX",
    "name": "S深圳",
    "city": "深圳",
    "city_code": "1",
    "type": "331",
    "regexInfo": "SZX,SZX,深圳,ShenZhen,SZ,SHENZHEN,宝安机场,Shenzhen,BAJC,BaoAnJiChang"
  },
  {
    "code": "SJW",
    "name": "S石家庄",
    "city": "石家庄",
    "city_code": "1",
    "type": "331",
    "regexInfo": "SJW,SJW,石家庄,ShiJiaZhuang,SJZ,SHIJIAZHUANG,正定机场,Shijiazhuang,ZDJC,ZhengDingJiChang"
  },
  {
    "code": "SYX",
    "name": "S三亚",
    "city": "三亚",
    "city_code": "1",
    "type": "331",
    "regexInfo": "SYX,SYX,三亚,sanya,SY,SANYA,凤凰机场,Sanya,FHJC,FengHuangJiChang"
  },
  {
    "code": "TNN",
    "name": "T台南",
    "city": "台南",
    "city_code": "1",
    "type": "331",
    "regexInfo": "TNN,TNN,台南,TaiNan,TN,TAINAN,台南机场,tainanjichang,TNJC,TaiNanJiChang"
  },
  {
    "code": "TYN",
    "name": "T太原",
    "city": "太原",
    "city_code": "1",
    "type": "331",
    "regexInfo": "TYN,TYN,太原,TaiYuan,TY,TAIYUAN,武宿机场,Taiyuan,WSJC,WuSuJiChang"
  },
  {
    "code": "HYN",
    "name": "T台州",
    "city": "台州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HYN,HYN,台州,TaiZhou,TZ,HUANGYAN,黄岩机场,Huangyan,HYJC,HuangYanJiChang"
  },
  {
    "code": "TVS",
    "name": "T唐山",
    "city": "唐山",
    "city_code": "1",
    "type": "331",
    "regexInfo": "TVS,TVS,唐山,TangShan,TS,TANGSHAN,唐山三女河机场,Tangshan Sannvhe Airport,TSSNHJC,TangShanSanNvHeJiChang"
  },
  {
    "code": "TCZ",
    "name": "T腾冲",
    "city": "腾冲",
    "city_code": "1",
    "type": "331",
    "regexInfo": "TCZ,TCZ,腾冲,TengChong,TC,TENGCHONG,腾冲机场,TENGCHONG,TCJC,TengChongJiChang"
  },
  {
    "code": "TSN",
    "name": "T天津",
    "city": "天津",
    "city_code": "1",
    "type": "331",
    "regexInfo": "TSN,TSN,天津,TianJin,TJ,TIANJIN,滨海机场,Tianjin,BHJC,BinHaiJiChang"
  },
  {
    "code": "TNH",
    "name": "T通化",
    "city": "通化",
    "city_code": "1",
    "type": "331",
    "regexInfo": "TNH,TNH,通化,TongHua,TH,TONGHUA,通化,Tonghua,TH,TongHua"
  },
  {
    "code": "TGO",
    "name": "T通辽",
    "city": "通辽",
    "city_code": "1",
    "type": "331",
    "regexInfo": "TGO,TGO,通辽,TongLiao,TL,TONGLIAO,通辽机场,Tongliao,TLJC,TongLiaoJiChang"
  },
  {
    "code": "TEN",
    "name": "T铜仁",
    "city": "铜仁",
    "city_code": "1",
    "type": "331",
    "regexInfo": "TEN,TEN,铜仁,TongRen,TR,TONGREN,铜仁凤凰机场,Tongren,DXJC,DaXingJiChang"
  },
  {
    "code": "WXN",
    "name": "W万州",
    "city": "万州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "WXN,WXN,万州,WanZhou,WZ,WANZHOU,重庆万州五桥机场,WANZHOU,WZJC,WanZhouJiChang"
  },
  {
    "code": "WEH",
    "name": "W威海",
    "city": "威海",
    "city_code": "1",
    "type": "331",
    "regexInfo": "WEH,WEH,威海,WeiHai,WH,WEIHAI,威海文登大水泊机场,Weihai,DSBJC,DaShuiBoJiChang"
  },
  {
    "code": "WNH",
    "name": "W文山",
    "city": "文山",
    "city_code": "1",
    "type": "331",
    "regexInfo": "WNH,WNH,文山,WenShan,WS,WENSHAN,普者黑机场,Wenshan Airport,PZHJC,PuZheHeiJiChang"
  },
  {
    "code": "WNZ",
    "name": "W温州",
    "city": "温州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "WNZ,WNZ,温州,WenZhou,WZ,WENZHOU,永强机场,Wenzhou,YQJC,YongQiangJiChang"
  },
  {
    "code": "WUA",
    "name": "W乌海",
    "city": "乌海",
    "city_code": "1",
    "type": "331",
    "regexInfo": "WUA,WUA,乌海,WuHai,WH,WuHai,乌海机场,WuHai,WHJC,WuHaiJiChang"
  },
  {
    "code": "WUH",
    "name": "W武汉",
    "city": "武汉",
    "city_code": "1",
    "type": "331",
    "regexInfo": "WUH,WUH,武汉,WuHan,WH,WUHAN,天河机场,Wuhan,THJC,TianHeJiChang"
  },
  {
    "code": "HLH",
    "name": "W乌兰浩特",
    "city": "乌兰浩特",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HLH,HLH,乌兰浩特,WuLanHaoTe,WLHT,WULANHAOTE,乌兰浩特机场,Ulanhot,WLHTJC,WuLanHaoTeJiChang"
  },
  {
    "code": "URC",
    "name": "W乌鲁木齐",
    "city": "乌鲁木齐",
    "city_code": "1",
    "type": "331",
    "regexInfo": "URC,URC,乌鲁木齐,WuLuMuQi,WLMQ,WULUMUQI,地窝堡国际机场,Urumqi,DWPGJJC,DiWoPuGuoJiJiChang"
  },
  {
    "code": "WUX",
    "name": "W无锡",
    "city": "无锡",
    "city_code": "1",
    "type": "331",
    "regexInfo": "WUX,WUX,无锡,WuXi,WX,WUXI,无锡机场,Wuxi,WXJC,WuXiJiChang"
  },
  {
    "code": "WUS",
    "name": "W武夷山",
    "city": "武夷山",
    "city_code": "1",
    "type": "331",
    "regexInfo": "WUS,WUS,武夷山,WuYiShan,WYS,WUYISHAN,武夷山机场,Wuyishan,WYSJC,WuYiShanJiChang"
  },
  {
    "code": "WUT",
    "name": "W五台山",
    "city": "五台山",
    "city_code": "1",
    "type": "331",
    "regexInfo": "WUT,WUT,五台山,WuTaiShan,WTS,WUTAISHAN,五台山机场,WuTaiShan,WTSJC,WuTaiShanJiChang"
  },
  {
    "code": "SIA",
    "name": "X西安",
    "city": "西安",
    "city_code": "1",
    "type": "331",
    "regexInfo": "XIY,SIA,西安,XiAn,XA,XIAN,咸阳机场,Xi an Xianyang Apt,XYJC,XianYangJiChang"
  },
  {
    "code": "XIC",
    "name": "X西昌",
    "city": "西昌",
    "city_code": "1",
    "type": "331",
    "regexInfo": "XIC,XIC,西昌,XiChang,XC,XICHANG,青山机场,Xichang,QSJC,QingShanJiChang"
  },
  {
    "code": "XIL",
    "name": "X锡林浩特",
    "city": "锡林浩特",
    "city_code": "1",
    "type": "331",
    "regexInfo": "XIL,XIL,锡林浩特,XiLinHaoTe,XLHT,XILINHAOTE,锡林浩特机场,Xilinhot,HTJC,HaoTeJiChang"
  },
  {
    "code": "XNN",
    "name": "X西宁",
    "city": "西宁",
    "city_code": "1",
    "type": "331",
    "regexInfo": "XNN,XNN,西宁,XiNing,XN,XINING,曹家堡机场,Xining,CJBJC,CaoJiaBaoJiChang"
  },
  {
    "code": "JHG",
    "name": "X西双版纳",
    "city": "西双版纳",
    "city_code": "1",
    "type": "331",
    "regexInfo": "JHG,JHG,西双版纳,XiShuangBanNa,XSBN,JINGHONG,景洪(西双版纳)机场,Jinghong,GSJC,GaSaJiChang"
  },
  {
    "code": "XMN",
    "name": "X厦门",
    "city": "厦门",
    "city_code": "1",
    "type": "331",
    "regexInfo": "XMN,XMN,厦门,XiaMen,XM,XIAMEN,高崎机场,Xiamen,GQJC,GaoQiJiChang"
  },
  {
    "code": "DIG",
    "name": "X香格里拉",
    "city": "香格里拉",
    "city_code": "1",
    "type": "331",
    "regexInfo": "DIG,DIG,香格里拉,XiangGeLiLa,XGLL,DIQING,中甸机场,Diqing,ZDJC,ZhongDianJiChang"
  },
  {
    "code": "XFN",
    "name": "X襄阳",
    "city": "襄阳",
    "city_code": "1",
    "type": "331",
    "regexInfo": "XFN,XFN,襄阳,XiangYang,XY,XIANGYANG,襄阳刘集机场,Xiangfan,XYJC,XiangYangJiChang"
  },
  {
    "code": "ACX",
    "name": "X兴义",
    "city": "兴义",
    "city_code": "1",
    "type": "331",
    "regexInfo": "ACX,ACX,兴义,XingYi,XY,XINGYI,兴义机场,Xingyi Airport,XYJC,XingYiJiChang"
  },
  {
    "code": "XUZ",
    "name": "X徐州",
    "city": "徐州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "XUZ,XUZ,徐州,XuZhou,XZ,XUZHOU,徐州观音机场,Xuzhou,GYJC,GuanYinJiChang"
  },
  {
    "code": "ENY",
    "name": "Y延安",
    "city": "延安",
    "city_code": "1",
    "type": "331",
    "regexInfo": "ENY,ENY,延安,YanAn,YA,YANAN,二十里铺机场,Yanan,ESLPJC,ErShiLiPuJiChang"
  },
  {
    "code": "YNZ",
    "name": "Y盐城",
    "city": "盐城",
    "city_code": "1",
    "type": "331",
    "regexInfo": "YNZ,YNZ,盐城,YanCheng,YC,YANCHENG,盐城机场,Yancheng,YCJC,YanChengJiChang"
  },
  {
    "code": "YNJ",
    "name": "Y延吉",
    "city": "延吉",
    "city_code": "1",
    "type": "331",
    "regexInfo": "YNJ,YNJ,延吉,YanJi,YJ,YANJI,延吉朝阳川机场,Yanji,YJJC,YanJiJiChang"
  },
  {
    "code": "YNT",
    "name": "Y烟台",
    "city": "烟台",
    "city_code": "1",
    "type": "331",
    "regexInfo": "YNT,YNT,烟台,YanTai,YT,YANTAI,蓬莱国际机场,PengLaiGuoJiJiChang,PLGJJC,PengLaiGuoJiJiChang"
  },
  {
    "code": "YTY",
    "name": "Y扬州",
    "city": "扬州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "YTY,YTY,扬州,YangZhouTaiZhouJiChang,YZQZ,Yangzhou ,扬州机场,Yangzhou ,YZQZ,YangZhouTaiZhouJiChang"
  },
  {
    "code": "YBP",
    "name": "Y宜宾",
    "city": "宜宾",
    "city_code": "1",
    "type": "331",
    "regexInfo": "YBP,YBP,宜宾,YiBin,YB,YIBIN,宜宾(菜坝)机场,Yibin,LBJC,LaiBaJiChang"
  },
  {
    "code": "YIH",
    "name": "Y宜昌",
    "city": "宜昌",
    "city_code": "1",
    "type": "331",
    "regexInfo": "YIH,YIH,宜昌,YiChang,YC,YICHANG,三峡机场,Yichang,SXJC,SanXiaJiChang"
  },
  {
    "code": "LDS",
    "name": "Y伊春",
    "city": "伊春",
    "city_code": "1",
    "type": "331",
    "regexInfo": "LDS,LDS,伊春,YiChun,YC,YiChun,伊春林都机场,Yichun lindu Airport,YCLDJC,YiChunLinDuJiChang"
  },
  {
    "code": "YIN",
    "name": "Y伊宁",
    "city": "伊宁",
    "city_code": "1",
    "type": "331",
    "regexInfo": "YIN,YIN,伊宁,YiNing,YN,YINING,伊宁机场,Yining,YNJC,YiNingJiChang"
  },
  {
    "code": "YIW",
    "name": "Y义乌",
    "city": "义乌",
    "city_code": "1",
    "type": "331",
    "regexInfo": "YIW,YIW,义乌,YiWu,YW,YIWU,义乌机场,Yiwu,YWJC,YiWuJiChang"
  },
  {
    "code": "INC",
    "name": "Y银川",
    "city": "银川",
    "city_code": "1",
    "type": "331",
    "regexInfo": "INC,INC,银川,YinChuan,YC,YINCHUAN,河东机场,Yinchuan,HDJC,HeDongJiChang"
  },
  {
    "code": "LLF",
    "name": "Y永州",
    "city": "永州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "LLF,LLF,永州,YongZhou,YZ,YONGZHOU,永州机场,YongZhouJiChang,YZJC,YongZhouJiChang"
  },
  {
    "code": "UYN",
    "name": "Y榆林",
    "city": "榆林",
    "city_code": "1",
    "type": "331",
    "regexInfo": "UYN,UYN,榆林,YuLin,YL,YULIN,榆阳机场,YuYang,YYJC,YuYangJiChang"
  },
  {
    "code": "YUS",
    "name": "Y玉树",
    "city": "玉树",
    "city_code": "1",
    "type": "331",
    "regexInfo": "YUS,YUS,玉树,YuShu,YS,YUSHU,三江源(巴塘)机场,yushu,SJY(BT)JC,SanJiangYuan(BaTang)JiChang"
  },
  {
    "code": "YCU",
    "name": "Y运城",
    "city": "运城",
    "city_code": "1",
    "type": "331",
    "regexInfo": "YCU,YCU,运城,YunCheng,YC,YUNCHENG,运城机场,YUNCHENG,YCJC,YunChengJiChang"
  },
  {
    "code": "YKH",
    "name": "Y营口",
    "city": "营口",
    "city_code": "1",
    "type": "331",
    "regexInfo": "YKH,YKH,营口,YiKou,YK,YINGKOU,兰旗机场,YINGKOU,LQJC,LanQiJiChang"
  },
  {
    "code": "ZHA",
    "name": "Z湛江",
    "city": "湛江",
    "city_code": "1",
    "type": "331",
    "regexInfo": "ZHA,ZHA,湛江,ZhanJiang,ZJ,ZHANJIANG,湛江机场,Zhanjiang,ZJJC,ZhanJiangJiChang"
  },
  {
    "code": "DYG",
    "name": "Z张家界",
    "city": "张家界",
    "city_code": "1",
    "type": "331",
    "regexInfo": "DYG,DYG,张家界,ZhangJiaJie,ZJJ,ZHANGJIAJIE,荷花机场,Dayong,HHJC,HeHuaJiChang"
  },
  {
    "code": "ZQZ",
    "name": "Z张家口",
    "city": "张家口",
    "city_code": "1",
    "type": "331",
    "regexInfo": "ZQZ,ZQZ,张家口,ZhangJiaKou,ZJK,ZhangJiaKou,张家口宁远机场,ZhangJiaKouNingYuanJiChang,ZJKNYJC,ZhangJiaKouNingYuanJiChang"
  },
  {
    "code": "YZY",
    "name": "Z张掖",
    "city": "张掖",
    "city_code": "1",
    "type": "331",
    "regexInfo": "YZY,YZY,张掖,ZhangYe,ZY,ZHANGYE,张掖机场,ZHANGYE,ZYJC,ZhangYeJiChang"
  },
  {
    "code": "ZAT",
    "name": "Z昭通",
    "city": "昭通",
    "city_code": "1",
    "type": "331",
    "regexInfo": "ZAT,ZAT,昭通,ZhaoTong,ZT,ZHAOTONG,昭通机场,Zhaotong,ZTJC,ZhaoTongJiChang"
  },
  {
    "code": "ZUJ",
    "name": "Z镇江",
    "city": "镇江",
    "city_code": "1",
    "type": "331",
    "regexInfo": "ZUJ,ZUJ,镇江,ZhenJiang,ZJ,ZHENJIANG,镇江火车站,Zhengjiang Railway Station,ZJHCZ,ZhenJiangHuoCheZhan"
  },
  {
    "code": "CGO",
    "name": "Z郑州",
    "city": "郑州",
    "city_code": "1",
    "type": "331",
    "regexInfo": "CGO,CGO,郑州,ZhengZhou,ZZ,ZHENGZHOU,新郑机场,Zhengzhou,XZJC,XinZhengJiChang"
  },
  {
    "code": "HSN",
    "name": "Z舟山",
    "city": "舟山",
    "city_code": "1",
    "type": "331",
    "regexInfo": "HSN,HSN,舟山,ZhouShan,ZS,ZHOUSHAN,舟山普陀山朱家尖机场,Zhoushan,PTSJC,PuTuoShanJiChang"
  },
  {
    "code": "ZUH",
    "name": "Z珠海",
    "city": "珠海",
    "city_code": "1",
    "type": "331",
    "regexInfo": "ZUH,ZUH,珠海,ZhuHai,ZH,ZHUHAI,珠海金湾机场,ZHUHAI JINWAN AIRPORT,ZHJWJC,ZhuHaiJinWanJiChang"
  },
  {
    "code": "ZYI",
    "name": "Z遵义",
    "city": "遵义",
    "city_code": "1",
    "type": "331",
    "regexInfo": "ZYI,ZYI,遵义,ZunYi,ZY,ZUNYI,遵义机场,Zunyi,ZYJC,ZunYiJiChang"
  }
];
