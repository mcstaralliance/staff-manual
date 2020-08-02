# 指令及用法 #

- `/cmi checkaccount ` 查看玩家拥有的账户数量
- `/cmi clearchat` 清屏
- `/cmi dispose [ID]` 打开垃圾桶
- `/cmi enchant [ID] [附魔的英文名称] [等级]` 强制附魔手上的物品
- `/cmi ender [ID]` 查看玩家末影箱
- `/cmi exp [ID] [add/set/take/clear] [数量]` 编辑玩家的经验
- `/cmi feed ID` 喂饱某个玩家
- `/cmi fly [ID] (true/false)` 开启关闭玩家的飞行状态
- `/cmi hat [ID]` 将手上的物品替换头上
- `/cmi inv [ID] ` 打开玩家背包
- `/cmi money [pay/set/give/take] [ID/all/alloffline] [数量]` 修改玩家的钱
- `/cmi near (距离)` 显示你附近的玩家
- `/cmi pos [ID]` 显示玩家位置
- `/cmi repair [ID] [hand/armor/all]` 修复物品
- `/cmi search (物品)` 在所有玩家的背包/末影箱/玩家账户中搜索指定的物品
- `/cmi sit` 原地跪下
- `/cmi silentchest` 开关静音开箱模式 没有开关箱动画和声音
- `/cmi silence (on/off)` 阻止玩家收到任何提示信息
- `/cmi sudo [ID] (command/c:[命令])` 强制玩家执行指定命令或者在公屏发送信息
- `/cmi tfly [ID] (时长/秒) (-s)` 设置玩家在一定时间内可以飞行.
- `/cmi tgod [ID] (时长/秒) (-s)` 设置玩家在一定时间内可以无敌
- `/cmi tree (树类型)` 在你看的地方生成一棵树
- `/cmi vanish (ID/list)` 隐身/查看隐身玩家
- `/cmi workbench [ID]` 打开工作台
- `/scan id [物品ID] r [半径] [purge(查出来立马删除物品)]`
- `/co help` - 显示命令列表 
- `/co i` - 查询指定方块破坏放置记录
- `/co inspect` - 切换检查状态（处于检查状态，可以通过交互动作来检查）
- `/co rollback <参数>` - 回档方块数据
- `/co restore <参数>` - 恢复方块数据
- `/co lookup <参数>` - 查询方块数据 
- `/co purge <参数>` - 删除旧方块数   
- `/co reload` - 重载配置 
- `/co version` - 查看插件版本
- `/co rollback u:<user> t:<time> r:<radius> a:<action> b:<blocks> e:<exclude>`
 用法：<user> 回档指定玩家       <time> 回档指定时间            1w（一周） 1d（一天） 1h（一小时） 1m（一分钟） 1s（一秒）       <radius> 指定半径       <action> 限定查找某类型操作
- `/co near` - 查找半径为5的数据
- `/co undo` -  插销操作
（查水表专用）
- `/co i [ID] t:1y a:command`  （查询某个玩家一年内输入过的指令）
- `/ban [ID]`  封禁某个玩家
- `/ban [IP]`  封禁这个地址的所有号 
- `/seen [ID]`  查询某个玩家ip地址
- `/tempban [ID/IP] [time] ` 封禁某个ID或者IP一段时间，time里面这样写：1s就是一秒，1m,一分钟，1h，一小时，1d就是1天,1w,一个星期，mo,月，y,年  比如，封禁Littlebear这个玩家2个星期 输入/tempban Littlebear 2w
- `/mute [ID] [time]`  禁言某个玩家一段时间 
- `/unban [ID/IP]`  解封 ID或者IP
- `/eco [give/take/reset] [ID] [数量]`  给予/拿走/重设，某个玩家的钱
监狱类指令
- `/setjail` [名字]  设置一个监狱
- `/togglejail [名字]`  把玩家送进xxx监狱，永久封存  /tjail [ID] [监狱名字] [时间]  把玩家扔到指定的监狱多少时间.1d, 1h ,1w 等等  
- `/unjail [ID] [监狱名字] [时间]`  多久后把玩家解放出来  /deljail [ID]  使某玩家从监狱中释放出来 
- `/invsee`  查看某个玩家的背包，并且可以移动  /clearinventory [ID]  清空某个玩家的背包
- `/socialspy` [ID]查看他人隐私，包括锁东西的信息，邮件，私聊等等